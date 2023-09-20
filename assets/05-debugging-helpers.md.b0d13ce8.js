import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.19f61efe.js";const u=JSON.parse('{"title":"Debugging helpers","description":"","frontmatter":{},"headers":[],"relativePath":"05-debugging-helpers.md","filePath":"05-debugging-helpers.md"}'),l={name:"05-debugging-helpers.md"},p=e(`<h1 id="debugging-helpers" tabindex="-1">Debugging helpers <a class="header-anchor" href="#debugging-helpers" aria-label="Permalink to &quot;Debugging helpers&quot;">​</a></h1><p>Out of the box, Craft gives us a <code>{% dd %}</code> tag in addition to Twig&#39;s native <code>dump</code> filter. Both are fine, but neither are great, particularly when you want to quickly modify existing code to sanity check something.</p><h2 id="dd-d-all-the-things" tabindex="-1"><code>dd()</code> / <code>d()</code> all the things <a class="header-anchor" href="#dd-d-all-the-things" aria-label="Permalink to &quot;\`dd()\` / \`d()\` all the things&quot;">​</a></h2><p>This plugin adds:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">{# dd as a function #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ dd(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{# dump as a function #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ </span><span style="color:#79B8FF;">dump</span><span style="color:#E1E4E8;">(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{# d() shorthand #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ d(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{# upgrade dump filter to larapack style output #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ entry.myField | dump }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{#  | d shorthand #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ entry.myField | d }}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">{# dd as a function #}</span></span>
<span class="line"><span style="color:#24292E;">{{ dd(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{# dump as a function #}</span></span>
<span class="line"><span style="color:#24292E;">{{ </span><span style="color:#005CC5;">dump</span><span style="color:#24292E;">(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{# d() shorthand #}</span></span>
<span class="line"><span style="color:#24292E;">{{ d(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{# upgrade dump filter to larapack style output #}</span></span>
<span class="line"><span style="color:#24292E;">{{ entry.myField | dump }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">{#  | d shorthand #}</span></span>
<span class="line"><span style="color:#24292E;">{{ entry.myField | d }}</span></span></code></pre></div>`,5),t=[p];function o(i,c,d,r,h,y){return n(),a("div",null,t)}const m=s(l,[["render",o]]);export{u as __pageData,m as default};
