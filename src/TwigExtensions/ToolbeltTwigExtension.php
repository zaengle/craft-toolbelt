<?php

namespace zaengle\Toolbelt\TwigExtensions;

use craft\helpers\StringHelper as CraftStringHelper;
use Newride\Classnames\Classnames as PhpClassnames;
use Stringy\Stringy;
use Symfony\Component\VarDumper\VarDumper;

use Twig\ExpressionParser;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

use zaengle\Toolbelt\Helpers\DataHelper;
use zaengle\Toolbelt\Helpers\ElementHelper as ToolbeltElementHelper;
use zaengle\Toolbelt\Helpers\StringHelper as ToolbeltStringHelper;
use zaengle\Toolbelt\Helpers\SvgHelper;

use zaengle\Toolbelt\Node\Expression\EmptyCoalesceExpression;

class ToolbeltTwigExtension extends AbstractExtension
{
    // Public Methods
    // =========================================================================
    public function getName(): string
    {
        return 'Toolbelt';
    }
    /**
     * @inheritdoc
     * @noinspection ForgottenDebugOutputInspection
     */
    public function getFunctions(): array
    {
        return [
            // Debugging
            new TwigFunction('d', [$this, 'dump']),
            new TwigFunction('dump', [$this, 'dump']),
            new TwigFunction('dd', fn(...$args) => dd(...$args)),

            // Wrapped native PHP functions
            new TwigFunction('dirname', fn(string $path, int $levels = 1): string => dirname($path, $levels)),
            new TwigFunction('md5', [ToolbeltStringHelper::class, 'md5']),
            new TwigFunction('parse_url', fn(string $url) => parse_url($url), ['is_safe' => ['html']]),
            new TwigFunction('pathinfo', fn(string $path, int $flags = PATHINFO_ALL): array|string => pathinfo($path, $flags)),

            // Wrapped Craft StringHelper fns
            new TwigFunction('UUID', [CraftStringHelper::class, 'UUID']),
            new TwigFilter('humanize', [CraftStringHelper::class, 'humanize']),
            new TwigFunction('slugify', [CraftStringHelper::class, 'slugify']),
            new TwigFunction('basename', [CraftStringHelper::class, 'basename']),
            new TwigFunction('titleize', [CraftStringHelper::class, 'titleize']),
            new TwigFunction('titleizeForHumans', [CraftStringHelper::class, 'titleizeForHumans']),

            // Extra String helpers
            new TwigFunction('stringify', [Stringy::class, 'create']),
            new TwigFunction('s', [Stringy::class, 'create']),

            // Template helpers
            new TwigFunction('classNames', [$this, 'classNames']),
            new TwigFunction('cx', [$this, 'classNames']),

            // SVG helpers
            new TwigFunction('inlineSvg', [SvgHelper::class, 'renderInline'], ['is_safe' => ['html']]),
            new TwigFunction('useSvgSprite', [SvgHelper::class, 'useSvgSprite'], ['is_safe' => ['html']]),
            new TwigFunction('svgSlug', [SvgHelper::class, 'svgSlug'], ['is_safe' => ['html']]),

            // Query / Collection helpers
            new TwigFunction('eagerLoad', [ToolbeltElementHelper::class, 'eagerLoad']),
            new TwigFunction('fill', [ToolbeltElementHelper::class, 'fill']),
            new TwigFunction('take', [ToolbeltElementHelper::class, 'take']),
            new TwigFunction('takeOne', [ToolbeltElementHelper::class, 'takeOne']),

            // Data helpers
            new TwigFunction('json_decode', [DataHelper::class, 'json_decode']),
        ];
    }

    public function getFilters(): array
    {
        return [
            // Debugging helpers
            new TwigFilter('d', [$this, 'dump']),
            new TwigFilter('dump', [$this, 'dump']),

            // Wrapped native PHP functions
            new TwigFilter('md5', [ToolbeltStringHelper::class, 'md5']),

            // Craft String helpers
            new TwigFilter('basename', [CraftStringHelper::class, 'basename']),
            new TwigFilter('humanize', [CraftStringHelper::class, 'humanize']),
            new TwigFilter('slugify', [CraftStringHelper::class, 'slugify']),
            new TwigFilter('titleize', [CraftStringHelper::class, 'titleize']),
            new TwigFilter('titleizeForHumans', [CraftStringHelper::class, 'titleizeForHumans']),

            // Query / Collection helpers
            new TwigFilter('take', [ToolbeltElementHelper::class, 'take']),
            new TwigFilter('takeOne', [ToolbeltElementHelper::class, 'takeOne']),

            // Extra String helpers
            new TwigFunction('stringify', [Stringy::class, 'create']),
            new TwigFunction('s', [Stringy::class, 'create']),

            // Data helpers
            new TwigFilter('json_decode', [DataHelper::class, 'json_decode']),
        ];
    }

    // Attribution: this is robbed from https://github.com/nystudio107/craft-emptycoalesce
    // thanks Andrew W
    /** @noinspection MissedFieldInspection */
    public function getOperators(): array
    {
        return [
            // Unary operators
            [],
            // Binary operators
            [
                '???' => [
                    'precedence' => 300,
                    'class' => EmptyCoalesceExpression::class,
                    'associativity' => ExpressionParser::OPERATOR_RIGHT,
                ],
            ],
        ];
    }

    /**
     * @param mixed ...$vars
     */
    public function dump(mixed ...$vars): void
    {
        foreach ($vars as $v) {
            VarDumper::dump($v);
        }
    }

    /**
     * @param mixed ...$classnames
     *
     * @see https://github.com/newridetech/php-classnames
     * @return string
     */
    public function classNames(...$classnames): string
    {
        return PhpClassnames::make(...$classnames);
    }
}
