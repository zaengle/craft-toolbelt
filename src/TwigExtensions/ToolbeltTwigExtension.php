<?php

namespace zaengle\Toolbelt\TwigExtensions;

use craft\helpers\StringHelper;
use Newride\Classnames\Classnames as PhpClassnames;
use Symfony\Component\VarDumper\VarDumper;
use Twig\ExpressionParser;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;


use zaengle\Toolbelt\Helpers\ElementHelper as ToolbeltElementHelper;
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
            // debugging
            new TwigFunction('d', [$this, 'dump']),
            new TwigFunction('dump', [$this, 'dump']),
            new TwigFunction('dd', fn(...$args) => dd(...$args)),

            // string helpers
            new TwigFunction('slugify', [StringHelper::class, 'slugify']),
            new TwigFunction('basename', [StringHelper::class, 'basename']),
            new TwigFunction('UUID', [StringHelper::class, 'UUID']),
            new TwigFunction('md5', fn($value) => md5($value)),

            // template helpers
            new TwigFunction('classNames', [$this, 'classNames']),
            new TwigFunction('cx', [$this, 'classNames']),
            new TwigFunction('parseUrl', fn(string $url) => parse_url($url), ['is_safe' => ['html']]),
            new TwigFunction('pathinfo', fn(string $path) => pathinfo($path)),

            // SVG helpers
            new TwigFunction('inlineSvg', [SvgHelper::class, 'renderInline'], ['is_safe' => ['html']]),
            new TwigFunction('useSvgSprite', [SvgHelper::class, 'useSvgSprite'], ['is_safe' => ['html']]),
            new TwigFunction('svgSlug', [SvgHelper::class, 'svgSlug'], ['is_safe' => ['html']]),

            // Query / Collection helpers
            new TwigFunction('take', [ToolbeltElementHelper::class, 'take']),
            new TwigFunction('takeOne', [ToolbeltElementHelper::class, 'takeOne']),
            new TwigFunction('fill', [ToolbeltElementHelper::class, 'fill']),
            new TwigFunction('eagerLoad', [ToolbeltElementHelper::class, 'eagerLoad']),

            // Data helpers
            new TwigFunction('json_decode', fn($value, $assoc = false, $depth = 512, $options = 0) => json_decode(html_entity_decode($value), $assoc, $depth, $options)),
        ];
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('d', [$this, 'dump']),
            new TwigFilter('dump', [$this, 'dump']),
            // Query / Collection helpers
            new TwigFilter('take', [ToolbeltElementHelper::class, 'take']),
            new TwigFilter('takeOne', [ToolbeltElementHelper::class, 'takeOne']),
            // string helpers
            new TwigFilter('slugify', [StringHelper::class, 'slugify']),
            new TwigFilter('basename', [StringHelper::class, 'basename']),
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