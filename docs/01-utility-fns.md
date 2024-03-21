# Utility Template Functions

## `classNames` / `cx()` *

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
  Some content
{% endtag %}
```

\* This functionality is based on the [Classnames plugin by Viget](https://github.com/vigetlabs/craft-classnames)

## `viteAsset()`

Returns the path to a Vite asset within the `src/assets/` directory, allowing for the value of `import.meta.env.DEV` + asset hashing in production

```twig

```twig
<img src="{{ viteAsset('img/logo.svg') }}" >
{# Outputs this when using Vite devserver #}
<img src="https://host.name:<VITE_PORT>/src/assets/img/logo.svg") }}" >
{# But something this in prod #}
<img src="/some/path/logo-<ASSET_HASH>.svg") }}" >
```
