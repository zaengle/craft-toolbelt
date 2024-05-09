<?php

namespace zaengle\Toolbelt\Services;

use craft\base\Component;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use TypeError;

/**
 * Stash service
 *
 * @property-read int $count
 * @property-read array $keys
 * @property-read array $values
 * @property-read array $all
 */
class StashService extends Component
{
    /**
     * @var Collection<string, mixed>
     */
    protected Collection $data;

    public function init(): void
    {
        $this->data = new Collection([]);
        parent::init();
    }
    public function set(string $key, mixed $value): void
    {
        // non dot notation
        if (!self::isDotNotationKey($key)) {
            $this->data->put($key, $value);
            return;
        }
        // unset any existing value
        if ($this->has($key)) {
            $this->drop($key);
        }
        // set the new value
        $update = collect([$key => $value])->undot();
        $this->data = $this->data->mergeRecursive($update);
    }

    /**
     * Supports dot notation
     */
    public function get(string $key, mixed $default = null): mixed
    {
        return Arr::get($this->data, $key) ?? $default;
    }

    public function push(string $key, mixed $value): void
    {
        $existing = $this->get($key) ?? collect();

        if ($existing instanceof Collection) {
            $existing->push($value);
        } elseif (is_array($existing)) {
            $existing[] = $value;
        } else {
            throw new TypeError("Cannot push value, as existing stash for $key is not a Collection or array");
        }

        $this->set($key, $existing);
    }
    public function pop(string $key): mixed
    {
        $existing = $this->get($key);

        if ($existing instanceof Collection) {
            $value = $existing->pop();

            $this->set($key, $existing);

            return $value;
        }

        if (is_array($existing)) {
            $value = array_pop($existing);

            $this->set($key, $existing);

            return $value;
        }

        throw new TypeError("Cannot pop value, as existing stash for $key is not a Collection or array");
    }

    /**
     * Supports dot notation
     */
    public function has(string $key): bool
    {
        return Arr::has($this->data, $key);
    }
    /**
     * Supports dot notation
     */
    public function drop(string $key): void
    {
        if (!$this->has($key)) {
            return;
        }
        // non dot notation
        if (!self::isDotNotationKey($key)) {
            $this->data->forget($key);
            return;
        }
        // update the parent stash
        $segments = collect(explode('.', $key));
        $dropKey = $segments->last();
        $parentPath = $segments->slice(0, -1)->implode('.');

        $parent = $this->get($parentPath);

        if ($parent instanceof Collection) {
            $parent->forget($dropKey);
        } elseif (is_array($parent)) {
            unset($parent[$dropKey]);
        } else {
            throw new TypeError("Cannot drop value, as parent stash for $key is not a Collection or array");
        }
        $this->set($parentPath, $parent);
    }
    public function clear(): void
    {
        $this->data = collect();
    }
    /**
     * @return array<string, mixed>
     */
    public function getAll(): array
    {
        return $this->data->toArray();
    }
    /**
     * @return array<string>
     */
    public function getKeys(): array
    {
        return $this->data->keys()->toArray();
    }
    /**
     * @return array
     */
    public function getValues(): array
    {
        return $this->data->values()->toArray();
    }
    public function getCount(): int
    {
        return $this->data->count();
    }

    public static function isDotNotationKey(string $key): bool
    {
        return str_contains($key, '.');
    }
}
