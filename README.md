# Template utility tools for CraftCMS projects

[![Latest Stable Version](http://poser.pugx.org/zaengle/craft-conventions/v)](https://packagist.org/packages/zaengle/craft-conventions) [![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/zaengle/craft-toolbelt) [![License](http://poser.pugx.org/zaengle/craft-conventions/license)](https://packagist.org/packages/zaengle/craft-conventions)

> Because logic belongs in PHP, not Twig.

## What

A collection of Twig enhancements to help you develop better, cleaner Craft CMS templates more quickly.

## Why?

Because simple templates are easier to understand, and code that is easier to understand is easier to maintain.

Craft CMS is a great tool for building websites, but it's not perfect. One of the biggest issues is that its very
power and flexibility means it's very easy to end up with a lot of logic in your templates.

## Usage

See the [docs](https://craft-toolbelt.zaengle.com/) for detailed usage information.

## What you get...

1. [Utility functions](./docs/01-utility-fns.md)
2. [String helpers](./docs/01.5-string-helpers.md)
3. [SVG helpers](./docs/02-svg-helpers.md)
4. [Query/Collection helpers](./docs/03-query-helpers.md)
5. [Eager loading helpers](./docs/04-eager-loading-helpers.md)
6. [Debugging helpers](./docs/05-debugging-helpers.md)
7. [Operators](./docs/06-operators.md)
8. [Media helpers](./docs/08-media-helpers.md)
9. [The Stash](./docs/09-stash.md)
10. [The ability to define custom/one-off helpers](./docs/07-custom.md)

## Installation

Via composer:

```bash
composer require zaengle/craft-toolbelt
php craft plugin/install toolbelt
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please note: This is primarily an internal tool, so while PRs that add features will be considered, contributions will be evaluated based on their fit with Zaengle's approach and priorities rather than other consumers. Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](./.github/SECURITY.md) on how to report security vulnerabilities.

## Credits

- [Zaengle Corp](https://github.com/zaengle)
- [Empty Coalesce / `???` lifted from the plugin of the same name by nystudio107](https://github.com/nystudio107/craft-emptycoalesce)
- [Classnames functionality based on the plugin of the same name by Viget](https://github.com/vigetlabs/craft-classnames)
- [Idea for custom helper from Twig Toolbox, but re-implemented here](https://github.com/oof-bar/craft-twig-toolbox)

## License

License: MIT
Please see [License File](LICENSE.md) for more information.




