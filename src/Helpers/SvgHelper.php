<?php

namespace zaengle\Toolbelt\Helpers;

use Craft;

use craft\elements\Asset;
use craft\helpers\FileHelper;
use craft\helpers\Html as HtmlHelper;
use craft\helpers\Template as TemplateHelper;

use yii\base\Exception;

use zaengle\Toolbelt\Toolbelt;

class SvgHelper
{
    public const EXTENSION = '.svg';

    // @todo this should come from config once we are in a plugin, rather than a module
    public const PATHS = [
        '@root/assets/svg',
    ];

    /**
     * Renders an SVG file  inline
     *
     * @param Asset|string $file   Asset | name of the file without .svg extension
     * @param array|string $attrs  HTML attrs hash to add to the <svg> element | HTML classname to add
     * @param array        $params Additional params to pass to native Craft svg() fn
     *
     * @return string
     * @throws Exception
     */
    public static function renderInline(string|Asset $file, array|string $attrs = [], array $params = []): string
    {
        if (is_string($attrs)) {
            $attrs = [
                'class' => $attrs,
            ];
        }

        if ($fileContents = self::getFileContents(self::resolveFile($file), $params)) {
            return TemplateHelper::raw(
                str_replace('<svg', sprintf('<svg%s', HtmlHelper::renderTagAttributes($attrs)), $fileContents)
            );
        } else {
            return '';
        }
    }


    public static function useSvgSprite(string $svgSlug, array $attrs = [], array $opts = []): string
    {
        /**
         * @var \zaengle\Toolbelt\Models\Settings
         */
        $settings = Toolbelt::$plugin->getSettings();
        $template = 'toolbelt/useSvgSprite';

        if (Craft::$app->view->resolveTemplate($settings->svgSpriteTemplate)) {
            $template = $settings->svgSpriteTemplate;
        }

        return Craft::$app->view->renderTemplate(
            $template,
            [
                'svgSlug' => $svgSlug,
                'opts' => array_merge(
                    [
                        'svgSpriteIdPrefix' => $settings->svgSpriteIdPrefix,
                    ],
                    $settings->svgSpriteDefaultOpts,
                    $opts,
                ),
                'attrs' => array_merge($settings->svgSpriteDefaultAttrs, $attrs),
            ]
        );
    }
    /**
     * Resolve an SVG from the provided slug / Asset.
     *
     * @param  string|Asset $file
     * @return string|Asset
     */
    protected static function resolveFile(string|Asset $file): string|Asset
    {
        if ($file instanceof Asset) {
            return $file;
        }

        // Aliased path
        if ($file[0] == '@' && file_exists(Craft::getAlias($file))) {
            return Craft::getAlias($file);
        }

        /**
         * @var \zaengle\Toolbelt\Models\Settings
         */
        $settings = Toolbelt::$plugin->getSettings();

        // Slug
        foreach ($settings->svgPaths as $path) {
            $fullPath = Craft::getAlias(
                FileHelper::normalizePath($path) . '/' . $file . self::EXTENSION
            );

            if (file_exists($fullPath)) {
                return $fullPath;
            }
        }

        return $file . self::EXTENSION;
    }

    /**
     * Get the contents of the SVG file.
     *
     * @param string|Asset $file
     * @param array        $params
     *
     * @return string|null
     * @throws Exception
     */
    protected static function getFileContents(string|Asset $file, array $params = []): ?string
    {
        if ($file instanceof Asset && !self::isSvgAsset($file)) {
            return self::handleNonSvgAsset($file);
        }

        $nativeSvg = Craft::$app->view->twig->getFunction('svg')->getCallable();

        return $nativeSvg(
            $file,
            isset($params['sanitize']) and $params['sanitize'],
            $params['namespace'] ?? null
        );
    }

    protected static function isSvgAsset(Asset $asset): bool
    {
        return $asset->kind == 'image' && $asset->extension == 'svg';
    }

    private static function handleNonSvgAsset(Asset $file): null
    {
        $message = "$file->filename is not an SVG file";

        if (Craft::$app->config->general->devMode) {
            throw new Exception($message);
        }
        Craft::error("[inlineSvg] {$$message}", __METHOD__);

        return null;
    }
}
