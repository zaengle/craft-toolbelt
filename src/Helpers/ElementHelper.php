<?php
namespace zaengle\Toolbelt\Helpers;

use craft\elements\db\ElementQuery;
use craft\helpers\ArrayHelper;
use craft\base\Element;
use craft\base\Model;

use Illuminate\Support\Collection;

class ElementHelper
{
    public static function take(array|ElementQuery|Element|Model|Collection $subject, ?int $limit = null): Collection
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
    public static function takeOne($subject)
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
            $result->concat(static::take($sources[$i], $qty)->toArray());
            $i++;
        } while ($result->count() < $qty || $i < count($sources) - 1);

        return $result->take($qty);
    }
}
