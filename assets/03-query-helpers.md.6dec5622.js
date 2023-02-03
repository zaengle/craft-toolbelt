import{_ as s,c as n,o as a,a as l}from"./app.d333e1e5.js";const A=JSON.parse('{"title":"Query / Collection helpers","description":"","frontmatter":{},"headers":[{"level":2,"title":"take()","slug":"take","link":"#take","children":[]},{"level":2,"title":"takeOne()","slug":"takeone","link":"#takeone","children":[]},{"level":2,"title":"fill()","slug":"fill","link":"#fill","children":[]}],"relativePath":"03-query-helpers.md"}'),p={name:"03-query-helpers.md"},o=l(`<h1 id="query-collection-helpers" tabindex="-1">Query / Collection helpers <a class="header-anchor" href="#query-collection-helpers" aria-hidden="true">#</a></h1><p><code>take()</code> / <code>takeOne</code> allow your templates to indifferently consume <code>ElementQuery</code>s, <code>Collections</code>, plain <code>array</code>s, single <code>Model</code> instances and even hashes / assoc arrays, and handle them all in the same way when you want to consume them.</p><h2 id="take" tabindex="-1"><code>take()</code> <a class="header-anchor" href="#take" aria-hidden="true">#</a></h2><p><code>take()</code> accepts any of the above types and intelligently returns a Collection based on what you provided.</p><p>It also accepts an optional second <code>limit</code> parameter that will limit the quantity of items in the returned collection:</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">featuredItems</span><span style="color:#89DDFF;"> = take(</span><span style="color:#A6ACCD;">aQueryOrArrayOrCollection</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">)  %}</span></span>
<span class="line"></span></code></pre></div><p>Expanded example:</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entryQuery</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">craft</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">section</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entryQueryResult</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">craft</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">section</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).all() %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entryCollection</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">craft</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">section</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).collect() %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">singleEntry</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">craft</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">section</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).one() %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;"> in take(</span><span style="color:#A6ACCD;">entryQuery</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{{ component(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">card/news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, { </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;"> })}}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">endfor</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;"> in take(</span><span style="color:#A6ACCD;">entryQueryResult</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{{ component(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">card/news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, { </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;"> })}}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">endfor</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;"> in take(</span><span style="color:#A6ACCD;">entryCollection</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{{ component(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">card/news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, { </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;"> })}}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">endfor</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;"> in take(</span><span style="color:#A6ACCD;">singleEntry</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">{# Only one card will be output here #}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{{ component(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">card/news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, { </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">: </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;"> })}}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">endfor</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="takeone" tabindex="-1"><code>takeOne()</code> <a class="header-anchor" href="#takeone" aria-hidden="true">#</a></h2><p><code>takeOne()</code> returns the first item from a array-like set, <code>null</code> if the set was empty, or just the item itself in any other case.</p><p>That means ugly code like this:</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">imageField</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">] ?? </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">imageField</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">] ?? null %}</span></span>
<span class="line"></span></code></pre></div><p>Can be replaced with the much more expressive:</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;"> = takeOne(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">imageField</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"></span></code></pre></div><p>Expanded example:</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">{# This could be a query, or a collection for an eager loaded relation #}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">assetQuery</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">imageField</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">assetQueryResult</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">imageField</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">all</span><span style="color:#89DDFF;">() %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">singleAsset</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">imageField</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">one</span><span style="color:#89DDFF;">() %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">fakeAsset</span><span style="color:#89DDFF;"> = {</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Placeholder image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.fillmurray.com/400/300</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Unbelievabill</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">: </span><span style="color:#F78C6C;">400</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">: </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">} %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">images</span><span style="color:#89DDFF;"> = [</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">assetQuery</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">assetQueryResult</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">singleAsset</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">fakeAsset</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">] %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">images</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">{# takeOne() doesn&#39;t care #}</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{{ component(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, { </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">: takeOne(</span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;">)} ) }}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">endfor</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="fill" tabindex="-1"><code>fill()</code> <a class="header-anchor" href="#fill" aria-hidden="true">#</a></h2><p><code>fill()</code> is useful when you want to be sure to end up with a set number of list items in total, drawing from a series of sources in preferential order:</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">featuredItems</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">craft</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">section</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).isFeatured(true) %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">set</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">otherItems</span><span style="color:#89DDFF;"> = </span><span style="color:#A6ACCD;">craft</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">section</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">news</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).isFeatured(false) %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in fill(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">featuredItems</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">otherItems</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">{# This loop will run five times, outputting (say) 3 x \`featuredItems\` (all found) and then 2 x other items #}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">endfor</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span></code></pre></div>`,19),e=[o];function t(c,D,r,F,y,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
