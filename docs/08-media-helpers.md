# Media Helpers

## `parseVideoUrl(string $url): array`

Parses a YouTube or Vimeo URL to extract its video ID, provider name and an array of thumbnail image URLs.

```twig
{# YouTube #}
{{ dump(parseVideoUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')) }}
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

> ### ⚠&nbsp;**Heads-up**
>
> As Vimeo do not have a predictable URL structure for thumbnails, this function uses the (free) vumbnail.com service to generate thumbnail URLs. It works great, but as a free third-party service, it's not necessarily guaranteed to be around forever...




