# Media Helpers

## `parseVideoUrl(string $url): array`

`parseVideoUrl()` takes the URL to YouTube or Vimeo url and returns an array with `provider` , `videoId` , `url` string keys, as well as a `thumbnail` array key.

`thumbnail` is an array with url keys for `max`, `lg`, `md` & `sm` sizes.


> ### ⚠&nbsp;**Heads-up**
>
> As Vimeo do not have a predictable URL structure for thumbnails, this function uses the (free) vumbnail.com service to generate thumbnail URLs. It works great, but as a free third-party service, it's not necessarily guaranteed to be around forever...




