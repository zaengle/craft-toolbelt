<?php

namespace zaengle\Toolbelt\Models;

use CraftCms\Cms\Plugin\PluginSettings;

class Settings extends PluginSettings
{
    public array $svgPaths = [];
    public string $svgSpriteIdPrefix = 'sprite-';
    public string $svgSpriteTemplate = '_toolbelt/useSvgSprite';
    public array $svgSpriteDefaultOpts = [];
    public array $svgSpriteDefaultAttrs = [];
    public array $custom = [];

    public function rules(): array
    {
        return [];
    }
}
