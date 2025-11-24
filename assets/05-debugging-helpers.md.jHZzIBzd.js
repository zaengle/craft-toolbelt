import{_ as a,c as e,o as i,ae as n}from"./chunks/framework.BQlYxExx.js";const c=JSON.parse('{"title":"Debugging helpers","description":"","frontmatter":{},"headers":[],"relativePath":"05-debugging-helpers.md","filePath":"05-debugging-helpers.md"}'),t={name:"05-debugging-helpers.md"};function l(p,s,d,h,r,g){return i(),e("div",null,[...s[0]||(s[0]=[n(`<h1 id="debugging-helpers" tabindex="-1">Debugging helpers <a class="header-anchor" href="#debugging-helpers" aria-label="Permalink to &quot;Debugging helpers&quot;">​</a></h1><p>Out of the box, Craft gives us a <code>{% dd %}</code> tag in addition to Twig&#39;s native <code>dump</code> filter. Both are fine, but neither are great, particularly when you want to quickly modify existing code to sanity check something.</p><h2 id="dd-d-all-the-things" tabindex="-1"><code>dd()</code> / <code>d()</code> all the things <a class="header-anchor" href="#dd-d-all-the-things" aria-label="Permalink to &quot;\`dd()\` / \`d()\` all the things&quot;">​</a></h2><p>This plugin adds:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# dd as a function #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ dd(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# dump as a function #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# d() shorthand #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ d(entry.myField) }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# upgrade dump filter to larapack style output #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ entry.myField | dump }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{#  | d shorthand #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ entry.myField | d }}</span></span></code></pre></div>`,5)])])}const k=a(t,[["render",l]]);export{c as __pageData,k as default};
