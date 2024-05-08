import{_ as s,c as i,o as a,a1 as t}from"./chunks/framework.biRBrEtS.js";const c=JSON.parse('{"title":"SVG helpers","description":"","frontmatter":{},"headers":[],"relativePath":"02-svg-helpers.md","filePath":"02-svg-helpers.md"}'),e={name:"02-svg-helpers.md"},n=t(`<h1 id="svg-helpers" tabindex="-1">SVG helpers <a class="header-anchor" href="#svg-helpers" aria-label="Permalink to &quot;SVG helpers&quot;">​</a></h1><p>Toolbelt adds two new options for working with SVG files in your templates.</p><h2 id="inlinesvg-string-asset-file" tabindex="-1"><code>inlineSvg(string|Asset $file)</code> <a class="header-anchor" href="#inlinesvg-string-asset-file" aria-label="Permalink to &quot;\`inlineSvg(string|Asset $file)\`&quot;">​</a></h2><p>Output an SVG image inline in your template. String paths are resolved relative to <code>svgRoot</code> as set in <code>config/toolbelt.php</code>, or pass an <code>Asset</code>.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# if &#39;svgRoot&#39; =&gt; &#39;@root/assets/svg&#39; is set in config/toolbelt.php #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ inlineSvg(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;email&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# Will inline the SVG file found at \`@root/assets/svg/email\` #}</span></span></code></pre></div><h2 id="usesvgsprite-string-svgslug-array-attrs-array-opts" tabindex="-1"><code>useSvgSprite(string $svgSlug, array $attrs = [], array $opts = [])</code> <a class="header-anchor" href="#usesvgsprite-string-svgslug-array-attrs-array-opts" aria-label="Permalink to &quot;\`useSvgSprite(string $svgSlug, array $attrs = [], array $opts = [])\`&quot;">​</a></h2><p>Output an <code>&lt;svg&gt;</code> that references a symbol in an SVG sprite via <code>&lt;use xlink:href=&quot;#{symbolId}&quot;&gt;</code>. Example (using default options):</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# This... #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ useSvgSprite(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;email&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { class: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;w-40&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, { title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Email icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) }}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# ...will output... #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;w-40&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 32 32&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Email Icon&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xlink:href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#sprite-email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><br><h4 id="_1-svgslug-string-required" tabindex="-1">1. <code>$svgSlug &lt;string&gt;</code> (required) <a class="header-anchor" href="#_1-svgslug-string-required" aria-label="Permalink to &quot;1. \`$svgSlug &lt;string&gt;\` (required)&quot;">​</a></h4><p>The handle for the SVG symbol that you want to display. This will often be the same as the filename of the SVG prior to it being added to the sprite. If your sprite symbols have a shared prefix, set that via the <code>svgSpriteIdPrefix</code> config setting (see below) and omit it here</p><h4 id="_2-attrs-array-optional" tabindex="-1">2. <code>$attrs &lt;array&gt;</code> (optional) <a class="header-anchor" href="#_2-attrs-array-optional" aria-label="Permalink to &quot;2. \`$attrs &lt;array&gt;\` (optional)&quot;">​</a></h4><p>An array of HTML attribute key / value pairs to apply to the injected <code>&lt;svg&gt;</code> elemment. Will be merged with any <code>svgSpriteDefaultAttrs</code> set in <code>config/toolbelt.php</code>, before being passed to Craft&#39;s <a href="https://craftcms.com/docs/4.x/dev/functions.html#attr" target="_blank" rel="noreferrer"><code>attr()</code></a> Twig function.</p><p>See <a href="#configuration-templating">below for defaults</a>.</p><h4 id="_3-opts-array-optional" tabindex="-1">3. <code>$opts &lt;array&gt;</code> (optional) <a class="header-anchor" href="#_3-opts-array-optional" aria-label="Permalink to &quot;3. \`$opts &lt;array&gt;\` (optional)&quot;">​</a></h4><p>Additional options to pass to the template. Will be merged with <code>svgSpriteDefaultOpts</code> from <code>config/toolbelt.php</code>. The bundled template supports:</p><ul><li><code>opts.viewBox &lt;string&gt;</code>: define the viewBox for the SVG, if omitted it will be generated from <code>opts.width</code> + <code>opts.height</code></li><li><code>opts.width &lt;int&gt;</code>: define the width of the SVG viewBox, defaults to <code>32</code>, can be overriden in <code>config/toolbelt.php</code></li><li><code>opts.height &lt;int&gt;</code>: define the height of the SVG viewBox, defaults to the value of <code>opts.height</code> (i.e assumes square SVG artboards)</li><li><code>opts.title &lt;string&gt;</code>: (optional) contents of a <code>&lt;title&gt;</code> element inside the SVG</li></ul><p>See <a href="#configuration-templating">below for defaults</a>.</p><h3 id="configuration-templating" tabindex="-1">Configuration &amp; Templating <a class="header-anchor" href="#configuration-templating" aria-label="Permalink to &quot;Configuration &amp; Templating&quot;">​</a></h3><p>The following config settings are available for this helper:</p><ol><li><code>svgSpriteIdPrefix &lt;string&gt;</code></li></ol><p>Configure this to match the prefix (if any) applied to symbol IDs in your sprite:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // match this to the symbol ID prefix applied by your front end build process</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;svgSpriteIdPrefix&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;icon-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><ol start="2"><li><code>svgSpriteDefaultAttrs &lt;array&gt;</code></li></ol><p>Specify HTML attributes that should be included on every <code>&lt;svg&gt;</code> element output by the helper. Defaults to:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;aria-hidden&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p><strong>Note:</strong> You can override any keys from <code>svgSpriteDefaultAttrs</code> via the <code>$attrs</code> parameter when calling <code>useSvgSprite()</code>.</p><ol start="3"><li><code>svgSpriteDefaultOpts &lt;array&gt;</code></li></ol><p>Provide default options to the template. Configure this to match the <code>width</code> and <code>height</code> of the SVGs that are compiled into the sprite:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // e.g. for SVG icons that are on 50x50 artboards</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;width&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;height&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><ol start="4"><li><code>svgUseSpriteTemplate &lt;string&gt;</code></li></ol><p>Overide the built-in output template if it doesn&#39;t meet your needs by providing a path to a new one:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // resolved within your site&#39;s templates/ directory</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;svgUseSpriteTemplate&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;_special/useSvgSprite&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p>See <a href="https://github.com/zaengle/craft-toolbelt/blob/main/src/templates/useSvgSprite.twig" target="_blank" rel="noreferrer">the bundled template</a> as a starting point</p><h3 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h3><ul><li>Toolbelt does not handle creating an SVG sprite for you. You should do that via your front end build process. This method just helps with consuming/using SVG sprites in your templates.</li><li>You will also need to inject your SVG sprite into your template somewhere. You can do this with <code>inlineSvg()</code> above, or using ajax/<code>fetch()</code> (preferable as then the sprite can be cached across pageloads).</li></ul><p>Example using <code>fetch()</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">argument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/path-to/sprite.svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sprite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> div</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;div&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    div.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hidden&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    div.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;aria-hidden&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    div.innerHTML </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sprite;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(div, document.body.childNodes[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div>`,39),l=[n];function h(p,r,o,k,d,g){return a(),i("div",null,l)}const y=s(e,[["render",h]]);export{c as __pageData,y as default};