<?php

namespace zaengle\Toolbelt\Helpers;

class DataHelper
{
    public static function json_decode(string|array $value, bool $assoc = false, int $depth = 512, int $flags = 0): mixed
    {
        if (is_array($value)) {
            return $value;
        }

        return json_decode(html_entity_decode($value), $assoc, $depth, $flags);
    }
}
