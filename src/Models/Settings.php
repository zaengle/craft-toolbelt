<?php

namespace zaengle\Toolbelt\Models;

use craft\base\Model;

class Settings extends Model
{
    public array $svgPaths = [];
    public string $svgSpriteIdPrefix = 'sprite-';

    public string $svgSpriteTemplate = '_toolbelt/useSvgSprite';
    public array $svgSpriteDefaultOpts = [];
    public array $svgSpriteDefaultAttrs = [];

    public function rules(): array
    {
        return [];
    }
}
