# Eager loading helpers


## `eagerLoad(Element|array $elements, array $eagerLoadingConfig)`

`eagerLoad()` provides sugar over the [somewhat verbose service method for eager loading fields on Elements](https://docs.craftcms.com/api/v3/craft-services-elements.html#method-eagerloadelements). 

This is particularly useful for adding eager loading to automatically defined route-based variables like `entry` and `category`, or to Global sets.

`eagerLoad` combines the first two parameters from the native service method into one, by inferring the classname from the passed Element(s):

```twig

{# Using the helper #}
{% do eagerLoad(entry, ['myAssetField']) %}

{# Without the helper #}
{% do craft.app.elements.eagerLoadElements(className(entry), [entry], ['myAssetField']) %}

```

