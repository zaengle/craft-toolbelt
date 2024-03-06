<?php
/**
 * Toolbelt plugin for Craft CMS 5.x
 *
 * Craft Toolbelt
 *
 * @link      https://zaengle.com/
 * @copyright Copyright (c) 2022 Zaengle Corp
 */

/**
 * Toolbelt config.php
 *
 * This file exists only as a template for the Toolbelt settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'toolbelt.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [
    // Paths to look for SVGs when inlining, you can use aliases here
    // 'svgPaths' => [
    //    '@root/assets/svg'
    // ],
    // The prefix to apply to symbol ids in your SVG sprite
    // 'svgSpriteIdPrefix' => 'sprite-',
    // Optional path to customise the template used by `useSvgSprite()`
    // 'svgSpriteTemplate' => '_toolbelt/useSvgSprite',
    'svgSpriteDefaultOpts' => [
        'width' => 32,
        'height' => 32,
    ],
    'svgSpriteDefaultAttrs' => [
        'aria-hidden' => 'true'
    ],
    'custom' => [
        'filters' => [],
        'functions' => [],
        'globals' => [],
        'tests' => [],
    ],
];
