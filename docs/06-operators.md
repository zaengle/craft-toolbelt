# Operators

The plugin adds the following operators to Twig:


## Empty Coalesce / `???` 

The `???` operator will return the first thing that is defined, not null, and not empty.

```twig
{% set foo = '' %}
{% set bar = 'bar' %}

{{ foo ??? bar }} {# outputs 'bar' #}
```

[This operator is lifted from the plugin of the same name by nystudio107](https://github.com/nystudio107/craft-emptycoalesce).
