<?php

/**
 * Closure for Craft CMS
 *
 * Allows you to use arrow function closures in Twig
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2022 nystudio107
 */

namespace zaengle\Toolbelt\Twig\Parsers;

use Twig\ExpressionParser;

/**
 * @author    nystudio107
 * @package   Closure
 * @since     1.0.0
 */
class ClosureExpressionParser extends ExpressionParser
{
    /**
     * @inerhitdoc
     * @phpstan-ignore-next-line
     */
    public function parseExpression($precedence = 0, $allowArrow = true)
    {
        return parent::parseExpression($precedence, $allowArrow);
    }

    /**
     * @param bool $namedArguments
     * @param bool $definition
     * @param bool $allowArrow
     * @return \Twig\Node\Node
     */
    public function parseArguments($namedArguments = false, $definition = false, $allowArrow = true)
    {
        return parent::parseArguments($namedArguments, $definition, $allowArrow);
    }
}
