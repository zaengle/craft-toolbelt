<?php

namespace zaengle\Toolbelt;

use Craft;
use craft\base\Plugin;
use craft\events\RegisterTemplateRootsEvent;
use craft\web\View;
use ReflectionException;
use Twig\Parser;
use yii\base\Event;
use zaengle\Toolbelt\Helpers\ReflectionHelper;
use zaengle\Toolbelt\Models\Settings;
use zaengle\Toolbelt\Services\StashService;
use zaengle\Toolbelt\Twig\Extensions\CustomTwigExtension;
use zaengle\Toolbelt\Twig\Extensions\ToolbeltTwigExtension;
use zaengle\Toolbelt\Twig\Parsers\ClosureExpressionParser;

/**
 * Class Toolbelt
 *
 * @author    Zaengle Corp
 * @package   Toolbelt
 * @since     1.0.0
 *
 * @property  StashService $stash
 */
class Toolbelt extends Plugin
{
    // Static Properties
    // =========================================================================

    public static Toolbelt $plugin;
    protected bool $closureAdded = false;
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
            'stash' => StashService::class,
        ]);

        Craft::$app->view->registerTwigExtension(new ToolbeltTwigExtension());
        Craft::$app->view->registerTwigExtension(new CustomTwigExtension());


        $this->registerEventHandlers();
    }

    /**
     * @return void
     */
    protected function registerEventHandlers(): void
    {
        Event::on(
            View::class,
            View::EVENT_REGISTER_SITE_TEMPLATE_ROOTS,
            function(RegisterTemplateRootsEvent $event) {
                $event->roots['toolbelt'] = __DIR__ . '/templates';
            }
        );

        Event::on(
            View::class,
            View::EVENT_BEFORE_RENDER_TEMPLATE,
            fn() => $this->addClosure()
        );
    }

    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }

    /**
     * Add our ClosureExpressionParser to default $allowArrow = true to let
     * arrow function closures work outside of Twig filter contexts
     * @author nystudio107
     * @return void
     */
    protected function addClosure(): void
    {
        if ($this->closureAdded) {
            return;
        }
        $twig = Craft::$app->getView()->getTwig();
        // Get the parser object used by Twig
        try {
            $parserReflection = ReflectionHelper::getReflectionProperty($twig, 'parser');
        } catch (ReflectionException $e) {
            Craft::error($e->getMessage(), __METHOD__);
            return;
        }
        $parserReflection->setAccessible(true);
        $parser = $parserReflection->getValue($twig);
        if ($parser === null) {
            $parser = new Parser($twig);
            $parserReflection->setValue($twig, $parser);
        }
        // Create the ClosureExpressionParser object and set the parser to use it
        try {
            $expressionParserReflection = ReflectionHelper::getReflectionProperty($parser, 'expressionParser');
        } catch (ReflectionException $e) {
            Craft::error($e->getMessage(), __METHOD__);
            return;
        }
        $expressionParserReflection->setAccessible(true);
        $expressionParser = new ClosureExpressionParser($parser, $twig);
        $expressionParserReflection->setValue($parser, $expressionParser);
        // Indicate that we've gotten closure
        $this->closureAdded = true;
    }

    /**
     * Copy example config to project's config folder
     */
    protected function afterInstall(): void
    {
        $configSource = __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'config.example.php';
        $configTarget = Craft::$app->getConfig()->configDir . DIRECTORY_SEPARATOR . 'toolbelt.php';

        if (!file_exists($configTarget)) {
            copy($configSource, $configTarget);
        }
    }
}
