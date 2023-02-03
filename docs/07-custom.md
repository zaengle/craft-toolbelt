# Custom Helpers

## Choose Your Own Adventure™

Sometimes you need to define your own Twig helpers in order to abstract logic that is verbose or messy in Twig, or you
want to use PHP functions that aren't available in Twig, and aren't built-n to Toolbelt. This plugin still allows you to
do that too, but defining custom Twig functions, filters, tests and globals in the plugin's config file under a `custom` key.

In all cases, key names must be strings, as they will define the name of the helper, and the value should be a 
[callable](https://www.php.net/manual/en/language.types.callable.php).

> ### ⚠&nbsp;**Heads-up** 
> 
> If you find yourself writing a _lot_ of custom helpers, it might be a sign that you should be using
> a different approach to your templates, or that you should be abstracting the logic into a service or module. A plugin
> config file is not the best place for a lot of logic, as it can quickly become hard for a human to parse what's going 
> on. Use your own judgement, but we recommend using this functionality reasonably sparingly. If you think you've found a
> common use case that should be folded into Toolbelt core, please [open an issue](https://github.com/zaengle/craft-toolbelt/issues/new) 
> or (even better) [a PR](https://github.com/zaengle/craft-toolbelt/compare).


## Functions

Functions are defined under the `functions` key. Explicitly define any arguments you want to pass. Passing more / fewer
arguments than defined will throw an error.

```php
<?php
// config/toolbelt.php
return [
    ...
    'custom' => 
        'functions' => [
            'double' => fn (float $price): float => $price * 2,
        ],
    ]
];
```


```twig
{# Usage #}
{{ double(2.5) }}
```

[See the Twig Functions documentation for more information](https://twig.symfony.com/doc/3.x/templates.html#functions)


## Filters

Filters are defined under the `filters` key. They always have at least one argument, but can have any number of them.

```php
<?php
// config/toolbelt.php
return [
    ...
    'custom' => 
        'filters' => [
            // PHP func name
            'reverse' => 'strrev',
            // closure
            'verboseReverse' => fn (string $str): string => strrev($str),
            // old skool callable array syntax
            'myFilter' => ['\My\Class', 'myFilter'],
        ],
    ]
];
```

```twig
{# Usage #}
{% if ('Step on no pets' | reverse)  == 'Step on no pets' %}
    It's a palindrome!
{% endif %}
```

[See the Twig Filters documentation for more information](https://twig.symfony.com/doc/3.x/templates.html#filters)

## Tests

Tests are defined under the `tests` key. They always have one argument.

```php
<?php
// config/toolbelt.php
return [
    ...
    'custom' => 
        'tests' => [
            'even' => static fn (int $number): bool => $number % 2 === 0,
        ],
    ]
];
```

```twig
{# Usage #}
{% if 2 is isEven %}
    2 is even
{% endif %}
```

[See the Twig Tests documentation for more information](https://twig.symfony.com/doc/3.x/templates.html#tests)

## Globals

Globals are defined under the `globals` key. They always have one argument

```php
<?php
// config/toolbelt.php
return [
    ...
    'custom' => 
        'globals' => [
            'now' => new DateTime(),
        ],
    ]
];
```


```twig
{# Usage #}
{{ now }}
```


### A Caveat about Globals

> ⚠️**Warning** Be careful when assigning globals to expression values, as they are evaluated on every request. 
> If you need to defining a global that is potentially expensive to compute, consider either using a function instead, or
> returning an instance of a class, and calling a method on that to get the value. 

If you just need to return a value, you should consider whether [custom config settings](https://craftcms.com/docs/4.x/config/#custom-settings) 
might be a better fit for your use case.

```php
<?php
// config/toolbelt.php

class ExpensiveClass {
    public function spend(): string {
        sleep(30);
        return 'Dollar dollar bill yall';
    }
}

return [
    ...
    'custom' => 
        'globals' => [
//           This is safe, as it is very cheap to compute (although it also already exists as a global, so don't add this too)
            'now' => new DateTime(),
//           but if your result is expensive/slow (because it hits the database, or does a lot of work), use a function
//           or class instead... also this would probably be better as a `function` definition, not a `global`
            'expensive' => fn (): string => "Let's just pretend this is expensive to compute for the purposes of this example, ok?",
            'money' => new ExpensiveClass(),
        ],
    ]
];
```

```twig
{# Usage #}
{{ now }}
{{ expensive() }}
{{ money.spend() }}
```


```php


[See the Twig Globals documentation for more information](https://twig.symfony.com/doc/3.x/templates.html#globals)
```


## Acknowledgements

This functionality was inspired by the [Craft Twig Toolbox plugin](https://github.com/oof-bar/craft-twig-toolbox) but 
was re-written for this plugin. All credit to [oof](https://oof.studio/) for the original idea. 
