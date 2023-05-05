import{_ as e,c as a,o as s,O as o}from"./chunks/framework.d7e37bdc.js";const h=JSON.parse('{"title":"Eager loading helpers","description":"","frontmatter":{},"headers":[],"relativePath":"04-eager-loading-helpers.md","filePath":"04-eager-loading-helpers.md"}'),n={name:"04-eager-loading-helpers.md"},l=o(`<h1 id="eager-loading-helpers" tabindex="-1">Eager loading helpers <a class="header-anchor" href="#eager-loading-helpers" aria-label="Permalink to &quot;Eager loading helpers&quot;">​</a></h1><h2 id="eagerload-element-array-elements-array-eagerloadingconfig" tabindex="-1"><code>eagerLoad(Element|array $elements, array $eagerLoadingConfig)</code> <a class="header-anchor" href="#eagerload-element-array-elements-array-eagerloadingconfig" aria-label="Permalink to &quot;\`eagerLoad(Element|array $elements, array $eagerLoadingConfig)\`&quot;">​</a></h2><p><code>eagerLoad()</code> provides sugar over the <a href="https://docs.craftcms.com/api/v3/craft-services-elements.html#method-eagerloadelements" target="_blank" rel="noreferrer">somewhat verbose service method for eager loading fields on Elements</a>.</p><p>This is particularly useful for adding eager loading to automatically defined route-based variables like <code>entry</code> and <code>category</code>, or to Global sets.</p><p><code>eagerLoad</code> combines the first two parameters from the native service method into one, by inferring the classname from the passed Element(s):</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">{# Using the helper #}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#89DDFF;"> eagerLoad(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">, [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myAssetField</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]) %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">{# Without the helper #}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">craft</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">elements</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">eagerLoadElements</span><span style="color:#89DDFF;">(className(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">), [</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">], [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myAssetField</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]) %}</span></span></code></pre></div>`,6),r=[l];function t(p,c,i,d,g,y){return s(),a("div",null,r)}const m=e(n,[["render",t]]);export{h as __pageData,m as default};
