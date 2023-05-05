<?php

namespace zaengle\Toolbelt\Helpers;

class StringHelper
{
    public static function md5(string $string, bool $binary = false): string
    {
        return md5($string, $binary);
    }
}
