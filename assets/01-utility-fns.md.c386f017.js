import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19f61efe.js";const q=JSON.parse('{"title":"Utility Template Functions","description":"","frontmatter":{},"headers":[],"relativePath":"01-utility-fns.md","filePath":"01-utility-fns.md"}'),p={name:"01-utility-fns.md"},o=l(`<h1 id="utility-template-functions" tabindex="-1">Utility Template Functions <a class="header-anchor" href="#utility-template-functions" aria-label="Permalink to &quot;Utility Template Functions&quot;">​</a></h1><h2 id="classnames-cx" tabindex="-1"><code>classNames</code> / <code>cx()</code> * <a class="header-anchor" href="#classnames-cx" aria-label="Permalink to &quot;\`classNames\` / \`cx()\` *&quot;">​</a></h2><p>Wraps the <a href="https://github.com/newridetech/php-classnames/" target="_blank" rel="noreferrer"><code>newridetech/php-classnames</code></a> package for Twig allowing you to programmatically build valid class and other HTML attributes:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {{ attr({</span></span>
<span class="line"><span style="color:#E1E4E8;">  class: cx(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;break classes up &#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;over mutliple lines&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;without worrying about whitespace / concatenation issues&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}) }}&gt;...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{# Conditionally output classes #}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {{ attr({</span></span>
<span class="line"><span style="color:#E1E4E8;">    class: cx({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;text-red&#39;</span><span style="color:#E1E4E8;">: opts.isFeatured,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;underline&#39;</span><span style="color:#E1E4E8;">: opts.isFeatured and isCurrent,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}) }}&gt;...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">{% tag opts.tag ?? </span><span style="color:#9ECBFF;">&#39;span&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  href: </span></span>
<span class="line"><span style="color:#E1E4E8;">  class: cx(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;break classes up &#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;over mutliple lines&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;without worrying about whitespace / concatenation issues&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">} %}</span></span>
<span class="line"><span style="color:#E1E4E8;">  Some content</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endtag %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {{ attr({</span></span>
<span class="line"><span style="color:#24292E;">  class: cx(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;break classes up &#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;over mutliple lines&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;without worrying about whitespace / concatenation issues&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">}) }}&gt;...&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{# Conditionally output classes #}</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {{ attr({</span></span>
<span class="line"><span style="color:#24292E;">    class: cx({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;text-red&#39;</span><span style="color:#24292E;">: opts.isFeatured,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;underline&#39;</span><span style="color:#24292E;">: opts.isFeatured and isCurrent,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}) }}&gt;...&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">{% tag opts.tag ?? </span><span style="color:#032F62;">&#39;span&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  href: </span></span>
<span class="line"><span style="color:#24292E;">  class: cx(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;break classes up &#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;over mutliple lines&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;without worrying about whitespace / concatenation issues&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">} %}</span></span>
<span class="line"><span style="color:#24292E;">  Some content</span></span>
<span class="line"><span style="color:#24292E;">{% endtag %}</span></span></code></pre></div><p>* This functionality is based on the <a href="https://github.com/vigetlabs/craft-classnames" target="_blank" rel="noreferrer">Classnames plugin by Viget</a></p><h2 id="parsevideourl" tabindex="-1"><code>parseVideoUrl()</code> <a class="header-anchor" href="#parsevideourl" aria-label="Permalink to &quot;\`parseVideoUrl()\`&quot;">​</a></h2><p>Parses a YouTube or Vimeo URL to extract its video ID, provider name and an array of thumbnail image URLs.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">{# YouTube #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ </span><span style="color:#79B8FF;">dump</span><span style="color:#E1E4E8;">(extractVideoIdFromUrl(</span><span style="color:#9ECBFF;">&#39;https://www.youtube.com/watch?v=dQw4w9WgXcQ&#39;</span><span style="color:#E1E4E8;">)) }}</span></span>
<span class="line"><span style="color:#6A737D;">{# returns</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;provider&quot;: &quot;youtube&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;videoId&quot;: &quot;dQw4w9WgXcQ&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;url&quot;: &quot;https://www.youtube.com/watch?v=dQw4w9WgXcQ&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;thumbnail&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;max&quot;: &quot;https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;lg&quot;: &quot;https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;md&quot;: &quot;https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;sm&quot;: &quot;https://img.youtube.com/vi/dQw4w9WgXcQ/sddefault.jpg&quot;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#6A737D;">{# Vimeo #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ </span><span style="color:#79B8FF;">dump</span><span style="color:#E1E4E8;">(extractVideoIdFromUrl(</span><span style="color:#9ECBFF;">&#39;https://vimeo.com/783453584&#39;</span><span style="color:#E1E4E8;">)) }}</span></span>
<span class="line"><span style="color:#6A737D;">{# returns</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;provider&quot;: &quot;vimeo&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;videoId&quot;: &quot;783453584&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;url&quot;: &quot;https://vimeo.com/783453584&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;thumbnail&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;max&quot;: &quot;https://vumbnail.com/783453584.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;lg&quot;: &quot;https://vumbnail.com/783453584_large.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;md&quot;: &quot;https://vumbnail.com/783453584_medium.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;sm&quot;: &quot;https://vumbnail.com/783453584_small.jpg&quot;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">#}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">{# YouTube #}</span></span>
<span class="line"><span style="color:#24292E;">{{ </span><span style="color:#005CC5;">dump</span><span style="color:#24292E;">(extractVideoIdFromUrl(</span><span style="color:#032F62;">&#39;https://www.youtube.com/watch?v=dQw4w9WgXcQ&#39;</span><span style="color:#24292E;">)) }}</span></span>
<span class="line"><span style="color:#6A737D;">{# returns</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;provider&quot;: &quot;youtube&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;videoId&quot;: &quot;dQw4w9WgXcQ&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;url&quot;: &quot;https://www.youtube.com/watch?v=dQw4w9WgXcQ&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;thumbnail&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;max&quot;: &quot;https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;lg&quot;: &quot;https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;md&quot;: &quot;https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;sm&quot;: &quot;https://img.youtube.com/vi/dQw4w9WgXcQ/sddefault.jpg&quot;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#6A737D;">{# Vimeo #}</span></span>
<span class="line"><span style="color:#24292E;">{{ </span><span style="color:#005CC5;">dump</span><span style="color:#24292E;">(extractVideoIdFromUrl(</span><span style="color:#032F62;">&#39;https://vimeo.com/783453584&#39;</span><span style="color:#24292E;">)) }}</span></span>
<span class="line"><span style="color:#6A737D;">{# returns</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;provider&quot;: &quot;vimeo&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;videoId&quot;: &quot;783453584&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;url&quot;: &quot;https://vimeo.com/783453584&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;thumbnail&quot;: {</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;max&quot;: &quot;https://vumbnail.com/783453584.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;lg&quot;: &quot;https://vumbnail.com/783453584_large.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;md&quot;: &quot;https://vumbnail.com/783453584_medium.jpg&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">            &quot;sm&quot;: &quot;https://vumbnail.com/783453584_small.jpg&quot;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">#}</span></span></code></pre></div><p>If the URL is not a valid YouTube or Vimeo URL, <code>null</code> is returned, unless <code>devMode</code> is enabled, in which case an exception is thrown.</p><h2 id="viteasset" tabindex="-1"><code>viteAsset()</code> <a class="header-anchor" href="#viteasset" aria-label="Permalink to &quot;\`viteAsset()\`&quot;">​</a></h2><p>Returns the path to a Vite asset within the <code>src/assets/</code> directory, allowing for the value of <code>i<wbr>mport.meta.env.DEV</code> + asset hashing in production</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`twig</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{ viteAsset(&#39;img/logo.svg&#39;) }}&quot;</span><span style="color:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="color:#6A737D;">{# Outputs this when using Vite devserver #}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://host.name:&lt;VITE_PORT&gt;/src/assets/img/logo.svg&quot;</span><span style="color:#E1E4E8;">) }}</span><span style="color:#9ECBFF;">&quot; &gt;</span></span>
<span class="line"><span style="color:#6A737D;">{# But something this in prod #}</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;img src=&quot;</span><span style="color:#E1E4E8;">/</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">/</span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">/</span><span style="color:#B392F0;">logo-</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">ASSET</span><span style="color:#E1E4E8;">_HASH&gt;.svg&quot;) }}&quot; &gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`twig</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{ viteAsset(&#39;img/logo.svg&#39;) }}&quot;</span><span style="color:#24292E;"> &gt;</span></span>
<span class="line"><span style="color:#6A737D;">{# Outputs this when using Vite devserver #}</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://host.name:&lt;VITE_PORT&gt;/src/assets/img/logo.svg&quot;</span><span style="color:#24292E;">) }}</span><span style="color:#032F62;">&quot; &gt;</span></span>
<span class="line"><span style="color:#6A737D;">{# But something this in prod #}</span></span>
<span class="line"><span style="color:#032F62;">&lt;img src=&quot;</span><span style="color:#24292E;">/</span><span style="color:#6F42C1;">some</span><span style="color:#24292E;">/</span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">/</span><span style="color:#6F42C1;">logo-</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">ASSET</span><span style="color:#24292E;">_HASH&gt;.svg&quot;) }}&quot; &gt;</span></span></code></pre></div>`,12),t=[o];function e(c,r,i,u,y,E){return n(),a("div",null,t)}const m=s(p,[["render",e]]);export{q as __pageData,m as default};
