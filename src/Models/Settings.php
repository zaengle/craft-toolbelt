<?php

namespace zaengle\Toolbelt\Models;

use craft\base\Model;

class Settings extends Model
{
    public array $svgPaths = [];
    public string $svgSpriteIdPrefix = 'sprite-';
    public string $svgUseSpriteTemplate = '_toolbelt/useSvgSprite';

    public function rules(): array
    {
        return [];
    }
}
