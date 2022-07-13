<?php

namespace zaengle\Toolbelt;

use Craft;
use craft\base\Plugin;
use zaengle\Toolbelt\Services\ToolbeltService;
use zaengle\Toolbelt\TwigExtensions\ToolbeltTwigExtension;
use Illuminate\Support\Collection;

/**
 * Class Toolbelt
 *
 * @author    Zaengle Corp
 * @package   Toolbelt
 * @since     1.0.0
 *
 * @property  ToolbeltService $tools
 */
class Toolbelt extends Plugin
{
    // Static Properties
    // =========================================================================

    public static Toolbelt $plugin;
    public string $schemaVersion = '1.0.0';
    public bool $hasCpSettings = false;
    public bool $hasCpSection = false;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init(): void
    {
        parent::init();
        self::$plugin = $this;

        $this->setComponents([
            'tools' => ToolbeltService::class,
        ]);
        Craft::$app->view->registerTwigExtension(new ToolbeltTwigExtension());

        Collection::macro('one', fn () => $this->first());

    }

    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }

    /**
     * Copy example config to project's config folder
     */
    protected function afterInstall(): void
    {
        $configSource = __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR. 'config.example.php';
        $configTarget = Craft::$app->getConfig()->configDir . DIRECTORY_SEPARATOR . 'toolbelt.php';

        if (! file_exists($configTarget)) {
            copy($configSource, $configTarget);
        }
    }
}
