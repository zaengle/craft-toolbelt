<?php

namespace zaengle\Toolbelt\Helpers;

use Craft;
use craft\base\Element;
use craft\base\Model;
use craft\elements\db\ElementQuery;
use craft\helpers\ArrayHelper;

use Illuminate\Support\Collection;

class ElementHelper
{
    public static function take(array|null|ElementQuery|Element|Model|Collection $subject, ?int $limit = null): Collection
    {
        if ($subject instanceof Collection) {
            $collection = $subject;
        } elseif ($subject instanceof ElementQuery) {
            $collection = $subject->limit($limit)->collect();
        } elseif (is_array($subject) && !ArrayHelper::isAssociative($subject)) {
            $collection = collect($subject);
        } elseif (
            // already a single Element or Model
            $subject instanceof Model
            // a fake / mock / facades via assoc array or Model
            || ArrayHelper::isAssociative($subject)
            // some other non-iterable thing
            || !is_iterable($subject)
        ) {
            $collection = collect([$subject]);
        } else {
            $collection = new Collection();
        }
        if ($limit) {
            $collection = $collection->take($limit);
        }

        return $collection;
    }
    public static function takeOne(array|null|ElementQuery|Element|Model|Collection $subject): ?Element
    {
        if (!is_iterable($subject)) {
            return $subject;
        }
        $selection = static::take($subject, 1);

        return $selection[0] ?? null;
    }

    public static function fill(int $qty, mixed ...$sources): Collection
    {
        $result = new Collection();
        $i = 0;

        do {
            if (!isset($sources[$i])) {
                break;
            }
            $result = $result->concat(static::take($sources[$i], $qty)->toArray());
            $i++;
        } while ($result->count() < $qty || $i < count($sources) - 1);

        return $result->take($qty);
    }

    public static function eagerLoad(Element|array|Collection $elements, array $eagerLoadingConfig = []): Element|array|Collection
    {
        if ($element = static::takeOne($elements)) {
            Craft::$app->elements->eagerLoadElements(
                $element::class,
                static::take($elements)->toArray(),
                $eagerLoadingConfig
            );
        }
        return $elements;
    }
}
