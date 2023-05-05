# Debugging helpers

Out of the box, Craft gives us a `{% dd %}` tag in addition to Twig's native `dump` filter. Both are fine, but neither are great, particularly when you want to quickly modify existing code to sanity check something.

## `dd()` / `d()` all the things

This plugin adds:

```twig
{# dd as a function #}
{{ dd(entry.myField) }}

{# dump as a function #}
{{ dump(entry.myField) }}

{# d() shorthand #}
{{ d(entry.myField) }}

{# upgrade dump filter to larapack style output #}
{{ entry.myField | dump }}

{#  | d shorthand #}
{{ entry.myField | d }}
```
