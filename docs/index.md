# What you get...

1. Utility functions
2. Collection helpers
3. Debug helpers

## Utility functions

## `parseUrl()`

Wraps PHP's native [`parse_url()`](https://www.php.net/manual/en/function.parse-url.php)

## `inlineSvg()`

Injects an SVG inline in your template, specified by a path relative to `svgRoot` in the plugin's config file.

## `classNames` / `cx()`

Wraps the [`newridetech/php-classnames`](https://github.com/newridetech/php-classnames/) package for Twig allowing you to programmatically build valid class and other HTML attributes:

```twig

<div {{ attr({
  class: cx(
    'break classes up ',
    'over mutliple lines',
    'without worrying about whitespace / concatenation issues',
  )
}) }}>...</div>

{# Conditionally output classes #}
<div {{ attr({
    class: cx({
      'text-red': opts.isFeatured,
      'underline': opts.isFeatured and isCurrent,
    })
}) }}>...</div>

  
{% tag opts.tag ?? 'span' with {
  href: 
  class: cx(
    'break classes up ',
    'over mutliple lines',
    'without worrying about whitespace / concatenation issues',
  )
} %}



{% endtag %}
```


## Query / Collection helpers

`take()` / `takeOne` allow your templates to indifferently consume `ElementQuery`s, `Collections`, plain `array`s, single `Model` instances and even hashes / assoc arrays, and handle them all in the same way when you want to consime them over them.


### `take()`

`take()` accepts any of the above types and intelligently returns a Collection based on what you provided.

It also accepts an optional second `limit` parameter that will limit the quantity of items in the returned collection:

```twig
{% set featuredItems = take(aQueryOrArrayOrCollection, 4)  %}
```


Expanded example:
```twig
{% set entryQuery = craft.entries.section('news') %}
{% set entryQueryResult = craft.entries.section('news').all() %}
{% set entryCollection = craft.entries.section('news').collect() %}
{% set singleEntry = craft.entries.section('news').one() %}

...

{% for entry in take(entryQuery, 4) %}
  {{ component('card/news', { data: entry })}}
{% endfor %}

{% for entry in take(entryQueryResult, 4) %}
  {{ component('card/news', { data: entry })}}
{% endfor %}

{% for entry in take(entryCollection, 4) %}
  {{ component('card/news', { data: entry })}}
{% endfor %}

{% for entry in take(singleEntry, 4) %}
  {# Only one card will be output here #}
  {{ component('card/news', { data: entry })}}
{% endfor %}

```

### `takeOne()`

`takeOne()` returns the first item from a array-like set, `null` if the set was empty, or just the item itself in any other case.


That means ugly code like this:

```twig
{% set image = data.imageField[0] ?? data.imageField[0] ?? null %}
```

Can be replaced with the much more expressive:

```twig
{% set image = takeOne(data.imageField) %}
```

Expanded example:

 ```twig
{# This could be a query, or a collection for an eager loaded relation #}
{% set assetQuery = data.imageField %}
{% set assetQueryResult = data.imageField.all() %}
{% set singleAsset = data.imageField.one() %}
{% set fakeAsset = {
  title: 'Placeholder image',
  url: 'https://www.fillmurray.com/400/300',
  alt: 'Unbelievabill',
  width: 400,
  height: 300,
} %}

{% set images = [
  assetQuery,
  assetQueryResult,
  singleAsset,
  fakeAsset,
] %}

...
<section>
  {% for image in images %}
    {# takeOne() doesn't care #}
    {{ component('image', { data: takeOne(image)} ) }}
  {% endfor %}
</section>


```

### `fill()`

`fill()` is useful when you want to be sure to end up with a set number of list items in total, drawing from a series of sources in preferential order:

```
{% set featuredItems = craft.entries.section('news').isFeatured(true) %}
{% set otherItems = craft.entries.section('news').isFeatured(false) %}

{% for item in fill(5, featuredItems, otherItems) %}
  {# This loop will run five times, outputting (say) 3 x `featuredItems` (all found) and then 2 x other items #}
{% endfor %}
```



## Debugging helpers

Out of the box, Craft gives us a `{% dd %}` tag in addition to Twig's native `dump` filter. Both are fine, but neither are great, particularly when you want to quick modify existing code to sanity check something. This plugin adds:

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
