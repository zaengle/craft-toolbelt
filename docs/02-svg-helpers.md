# SVG helpers

Toolbelt adds two new options for working with SVG files in your templates.

## `inlineSvg(string|Asset $file)`

Output an SVG image inline in your template. String paths are resolved relative to `svgRoot` as set in `config/toolbelt.php`, or pass an `Asset`.

```twig
{# if 'svgRoot' => '@root/assets/svg' is set in config/toolbelt.php #}
{{ inlineSvg('email') }}
{# Will inline the SVG file found at `@root/assets/svg/email` #}
```

## `useSvgSprite(string $svgSlug, array $attrs = [], array $opts = [])`

Output an `<svg>` that references a symbol in an SVG sprite via `<use xlink:href="#{symbolId}">`. Example (using default options):

```twig
{# This... #}
{{ useSvgSprite('email', { class: 'w-40'}, { title: "Email icon" }) }}
{# ...will output... #}
<svg class="w-40" viewBox="0 0 32 32" aria-hidden="true">
    <title>Email Icon</title>
    <use xlink:href="#sprite-email"></use>
</svg>

```

### Parameters

<br>

#### 1. `$svgSlug <string>` (required)
The handle for the SVG symbol that you want to display. This will often be the same as the filename of the SVG prior to it being added to the sprite. If your sprite symbols have a shared prefix, set that via the `svgSpriteIdPrefix` config setting (see below) and omit it here

#### 2. `$attrs <array>` (optional)
An array of HTML attribute key / value pairs to apply to the injected `<svg>` elemment. Will be merged with any `svgSpriteDefaultAttrs` set in `config/toolbelt.php`, before being passed to Craft's [`attr()`](https://craftcms.com/docs/4.x/dev/functions.html#attr) Twig function.

See [below for defaults](#configuration-templating).

#### 3. `$opts <array>` (optional)
Additional options to pass to the template. Will be merged with `svgSpriteDefaultOpts` from `config/toolbelt.php`. The bundled template supports:

- `opts.viewBox <string>`: define the viewBox for the SVG, if omitted it will be generated from `opts.width` + `opts.height`
- `opts.width <int>`: define the width of the SVG viewBox, defaults to `32`, can be overriden in `config/toolbelt.php`
- `opts.height <int>`: define the height of the SVG viewBox, defaults to the value of `opts.height` (i.e assumes square SVG artboards)
- `opts.title <string>`: (optional) contents of a `<title>` element inside the SVG

See [below for defaults](#configuration-templating).


### Configuration & Templating 

The following config settings are available for this helper:

1. `svgSpriteIdPrefix <string>`

Configure this to match the prefix (if any) applied to symbol IDs in your sprite:

```php
return [
    // match this to the symbol ID prefix applied by your front end build process
    'svgSpriteIdPrefix' => 'icon-',
];
```

2. `svgSpriteDefaultAttrs <array>`

Specify HTML attributes that should be included on every `<svg>` element output by the helper. Defaults to:

```php
[
    'aria-hidden' => 'true',
]
```

**Note:** You can override any keys from `svgSpriteDefaultAttrs` via the `$attrs` parameter when calling `useSvgSprite()`.

3. `svgSpriteDefaultOpts <array>`

Provide default options to the template. Configure this to match the `width` and `height` of the SVGs that are compiled into the sprite:

```php
return [
    // e.g. for SVG icons that are on 50x50 artboards
    'width' => 50,
    'height' => 50,
];
```


4. `svgUseSpriteTemplate <string>`

Overide the built-in output template if it doesn't meet your needs by providing a path to a new one:

```php
return [
    // resolved within your site's templates/ directory
    'svgUseSpriteTemplate' => '_special/useSvgSprite',
];
```

See [the bundled template](https://github.com/zaengle/craft-toolbelt/blob/main/src/templates/useSvgSprite.twig) as a starting point

### Notes

- Toolbelt does not handle creating an SVG sprite for you. You should do that via your front end build process. This method just helps with consuming/using SVG sprites in your templates.
- You will also need to inject your SVG sprite into your template somewhere. You can do this with `inlineSvg()` above, or using ajax/`fetch()` (preferable as then the sprite can be cached across pageloads). 

Example using `fetch()`:

```js
(function(argument) {
  fetch('/path-to/sprite.svg')
  .then((response) => response.text())
  .then((sprite) => {
    const div = document.createElement("div");
    div.setAttribute('hidden', '');
    div.setAttribute('aria-hidden', 'true');
    div.innerHTML = sprite;
    document.body.insertBefore(div, document.body.childNodes[0]);
  });
})();
```
