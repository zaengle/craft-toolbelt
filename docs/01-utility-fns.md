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

## `parseVideoUrl()`

Parses a YouTube or Vimeo URL to extract its video ID, provider name and an array of thumbnail image URLs.

```twig
{# YouTube #}
{{ dump(extractVideoIdFromUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')) }}
{# returns
    {
        "provider": "youtube",
        "videoId": "dQw4w9WgXcQ",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "thumbnail": {
            "max": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            "lg": "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
            "md": "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
            "sm": "https://img.youtube.com/vi/dQw4w9WgXcQ/sddefault.jpg"
        }
    }
#}
{# Vimeo #}
{{ dump(extractVideoIdFromUrl('https://vimeo.com/783453584')) }}
{# returns
    {
        "provider": "vimeo",
        "videoId": "783453584",
        "url": "https://vimeo.com/783453584",
        "thumbnail": {
            "max": "https://vumbnail.com/783453584.jpg",
            "lg": "https://vumbnail.com/783453584_large.jpg",
            "md": "https://vumbnail.com/783453584_medium.jpg",
            "sm": "https://vumbnail.com/783453584_small.jpg"
        }
    }
#}
```
If the URL is not a valid YouTube or Vimeo URL, `null` is returned, unless `devMode` is enabled, in which case an
exception is thrown.

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
