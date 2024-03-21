import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.19f61efe.js";const y=JSON.parse('{"title":"Media Helpers","description":"","frontmatter":{},"headers":[],"relativePath":"08-media-helpers.md","filePath":"08-media-helpers.md"}'),t={name:"08-media-helpers.md"},p=o(`<h1 id="media-helpers" tabindex="-1">Media Helpers <a class="header-anchor" href="#media-helpers" aria-label="Permalink to &quot;Media Helpers&quot;">​</a></h1><h2 id="parsevideourl-string-url-array" tabindex="-1"><code>parseVideoUrl(string $url): array</code> <a class="header-anchor" href="#parsevideourl-string-url-array" aria-label="Permalink to &quot;\`parseVideoUrl(string $url): array\`&quot;">​</a></h2><p>Parses a YouTube or Vimeo URL to extract its video ID, provider name and an array of thumbnail image URLs.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">{# YouTube #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ </span><span style="color:#79B8FF;">dump</span><span style="color:#E1E4E8;">(parseVideoUrl(</span><span style="color:#9ECBFF;">&#39;https://www.youtube.com/watch?v=dQw4w9WgXcQ&#39;</span><span style="color:#E1E4E8;">)) }}</span></span>
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
<span class="line"><span style="color:#24292E;">{{ </span><span style="color:#005CC5;">dump</span><span style="color:#24292E;">(parseVideoUrl(</span><span style="color:#032F62;">&#39;https://www.youtube.com/watch?v=dQw4w9WgXcQ&#39;</span><span style="color:#24292E;">)) }}</span></span>
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
<span class="line"><span style="color:#6A737D;">#}</span></span></code></pre></div><p>If the URL is not a valid YouTube or Vimeo URL, <code>null</code> is returned, unless <code>devMode</code> is enabled, in which case an exception is thrown.</p><blockquote><h3 id="⚠-heads-up" tabindex="-1">⚠ <strong>Heads-up</strong> <a class="header-anchor" href="#⚠-heads-up" aria-label="Permalink to &quot;⚠&amp;nbsp;**Heads-up**&quot;">​</a></h3><p>As Vimeo do not have a predictable URL structure for thumbnails, this function uses the (free) vumbnail.com service to generate thumbnail URLs. It works great, but as a free third-party service, it&#39;s not necessarily guaranteed to be around forever...</p></blockquote>`,6),l=[p];function e(c,u,r,i,q,d){return a(),n("div",null,l)}const h=s(t,[["render",e]]);export{y as __pageData,h as default};
