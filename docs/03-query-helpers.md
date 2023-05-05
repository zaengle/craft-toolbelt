# Query & Collection Helpers

`take()` / `takeOne` allow your templates to indifferently consume `ElementQuery`s, `Collections`, plain `array`s, single `Model` instances and even hashes / assoc arrays, and handle them all in the same way when you want to consume them.

## `take()`

`take()` accepts any of the above types and intelligently returns a Collection based on what you provided.

It also accepts an optional second `limit` parameter that will limit the quantity of items in the returned collection.

It is available as both a Twig function and a filter.

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

## `takeOne()`

`takeOne()` returns the first item from a array-like set, `null` if the set was empty, or just the item itself in any other case. It is available as both a Twig function and a filter.

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

## `fill()`

`fill()` is useful when you want to be sure to end up with a set number of list items in total, drawing from a series of sources in preferential order. It is available as a Twig function.

```twig
{% set featuredItems = craft.entries.section('news').isFeatured(true) %}
{% set otherItems = craft.entries.section('news').isFeatured(false) %}

{% for item in fill(5, featuredItems, otherItems) %}
  {# This loop will run five times, outputting (say) 3 x `featuredItems` (all found) and then 2 x other items #}
{% endfor %}
```

