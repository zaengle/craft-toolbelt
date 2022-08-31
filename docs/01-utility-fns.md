# Utility functions

## `parseUrl()`

Wraps PHP's native [`parse_url()`](https://www.php.net/manual/en/function.parse-url.php)

## `inlineSvg()`

Injects an SVG inline in your template, specified by a path relative to `svgRoot` in the plugin's config file.

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
