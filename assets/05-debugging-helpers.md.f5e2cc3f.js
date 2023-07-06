import{_ as s,c as a,o as n,O as e}from"./chunks/framework.d7e37bdc.js";const h=JSON.parse('{"title":"Debugging helpers","description":"","frontmatter":{},"headers":[],"relativePath":"05-debugging-helpers.md","filePath":"05-debugging-helpers.md"}'),l={name:"05-debugging-helpers.md"},t=e(`<h1 id="debugging-helpers" tabindex="-1">Debugging helpers <a class="header-anchor" href="#debugging-helpers" aria-label="Permalink to &quot;Debugging helpers&quot;">​</a></h1><p>Out of the box, Craft gives us a <code>{% dd %}</code> tag in addition to Twig&#39;s native <code>dump</code> filter. Both are fine, but neither are great, particularly when you want to quickly modify existing code to sanity check something.</p><h2 id="dd-d-all-the-things" tabindex="-1"><code>dd()</code> / <code>d()</code> all the things <a class="header-anchor" href="#dd-d-all-the-things" aria-label="Permalink to &quot;\`dd()\` / \`d()\` all the things&quot;">​</a></h2><p>This plugin adds:</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">{# dd as a function #}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ dd(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myField</span><span style="color:#89DDFF;">) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">{# dump as a function #}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ </span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myField</span><span style="color:#89DDFF;">) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">{# d() shorthand #}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ d(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myField</span><span style="color:#89DDFF;">) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">{# upgrade dump filter to larapack style output #}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myField</span><span style="color:#89DDFF;"> | </span><span style="color:#A6ACCD;">dump</span><span style="color:#89DDFF;"> }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">{#  | d shorthand #}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myField</span><span style="color:#89DDFF;"> | </span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;"> }}</span></span></code></pre></div>`,5),p=[t];function o(c,r,i,d,y,D){return n(),a("div",null,p)}const F=s(l,[["render",o]]);export{h as __pageData,F as default};