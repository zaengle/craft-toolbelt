<?php

namespace zaengle\Toolbelt\TwigExtensions;

use Illuminate\Support\Collection;
use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;
use Twig\TwigFilter;
use Twig\TwigFunction;
use Twig\TwigTest;
use zaengle\Toolbelt\Toolbelt;

/**
 * Class CustomTwigExtension
 *
 * Create custom Twig filters, function, tests, and globals from definitions in
 * the plugin settings file.
 *
 * Inspired by https://github.com/oof-bar/craft-twig-toolbox
 *
 * @package zaengle\craft-toolbelt
 *
 */
class CustomTwigExtension extends AbstractExtension implements GlobalsInterface
{
    // Public Methods
    // =========================================================================
    public function getName(): string
    {
        return 'Custom Toolbelt';
    }
    /**
     * @inheritdoc
     */
    public function getFunctions(): array
    {
        return $this->getSettings('functions')
            ->map(fn($fn, $name) => new TwigFunction($name, $fn))
            ->toArray();
    }

    /**
     * @inheritDoc
     */
    public function getFilters(): array
    {
        return $this->getSettings('filters')
            ->map(fn($fn, $name) => new TwigFilter($name, $fn))
            ->toArray();
    }
    /**
     * @inheritDoc
     */
    public function getTests(): array
    {
        return $this->getSettings('tests')
            ->map(fn($fn, $name) => new TwigTest($name, $fn))
            ->toArray();
    }
    /**
     * @inheritDoc
     */
    public function getGlobals(): array
    {
        return $this->getSettings('globals')->toArray();
    }
    // Private Methods
    private function getSettings(string $key): Collection
    {
        return new Collection(Toolbelt::$plugin->getSettings()->custom[$key] ?? []);
    }
}
