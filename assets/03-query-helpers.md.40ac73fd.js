import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19f61efe.js";const F=JSON.parse('{"title":"Query & Collection Helpers","description":"","frontmatter":{},"headers":[],"relativePath":"03-query-helpers.md","filePath":"03-query-helpers.md"}'),e={name:"03-query-helpers.md"},p=l(`<h1 id="query-collection-helpers" tabindex="-1">Query &amp; Collection Helpers <a class="header-anchor" href="#query-collection-helpers" aria-label="Permalink to &quot;Query &amp; Collection Helpers&quot;">​</a></h1><p><code>take()</code> / <code>takeOne</code> allow your templates to indifferently consume <code>ElementQuery</code>s, <code>Collections</code>, plain <code>array</code>s, single <code>Model</code> instances and even hashes / assoc arrays, and handle them all in the same way when you want to consume them.</p><h2 id="take" tabindex="-1"><code>take()</code> <a class="header-anchor" href="#take" aria-label="Permalink to &quot;\`take()\`&quot;">​</a></h2><p><code>take()</code> accepts any of the above types and intelligently returns a Collection based on what you provided.</p><p>It also accepts an optional second <code>limit</code> parameter that will limit the quantity of items in the returned collection.</p><p>It is available as both a Twig function and a filter.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> featuredItems </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> take(aQueryOrArrayOrCollection, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)  %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> featuredItems </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> take(aQueryOrArrayOrCollection, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)  %}</span></span></code></pre></div><p>Expanded example:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> entryQuery </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> craft.entries.section(</span><span style="color:#9ECBFF;">&#39;news&#39;</span><span style="color:#E1E4E8;">) %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> entryQueryResult </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> craft.entries.section(</span><span style="color:#9ECBFF;">&#39;news&#39;</span><span style="color:#E1E4E8;">).all() %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> entryCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> craft.entries.section(</span><span style="color:#9ECBFF;">&#39;news&#39;</span><span style="color:#E1E4E8;">).collect() %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> singleEntry </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> craft.entries.section(</span><span style="color:#9ECBFF;">&#39;news&#39;</span><span style="color:#E1E4E8;">).one() %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> entry </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> take(entryQuery, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">) %}</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ component(</span><span style="color:#9ECBFF;">&#39;card/news&#39;</span><span style="color:#E1E4E8;">, { data: entry })}}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">endfor</span><span style="color:#E1E4E8;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> entry </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> take(entryQueryResult, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">) %}</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ component(</span><span style="color:#9ECBFF;">&#39;card/news&#39;</span><span style="color:#E1E4E8;">, { data: entry })}}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">endfor</span><span style="color:#E1E4E8;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> entry </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> take(entryCollection, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">) %}</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ component(</span><span style="color:#9ECBFF;">&#39;card/news&#39;</span><span style="color:#E1E4E8;">, { data: entry })}}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">endfor</span><span style="color:#E1E4E8;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> entry </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> take(singleEntry, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">) %}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">{# Only one card will be output here #}</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ component(</span><span style="color:#9ECBFF;">&#39;card/news&#39;</span><span style="color:#E1E4E8;">, { data: entry })}}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">endfor</span><span style="color:#E1E4E8;"> %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> entryQuery </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> craft.entries.section(</span><span style="color:#032F62;">&#39;news&#39;</span><span style="color:#24292E;">) %}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> entryQueryResult </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> craft.entries.section(</span><span style="color:#032F62;">&#39;news&#39;</span><span style="color:#24292E;">).all() %}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> entryCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> craft.entries.section(</span><span style="color:#032F62;">&#39;news&#39;</span><span style="color:#24292E;">).collect() %}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> singleEntry </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> craft.entries.section(</span><span style="color:#032F62;">&#39;news&#39;</span><span style="color:#24292E;">).one() %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> entry </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> take(entryQuery, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">) %}</span></span>
<span class="line"><span style="color:#24292E;">  {{ component(</span><span style="color:#032F62;">&#39;card/news&#39;</span><span style="color:#24292E;">, { data: entry })}}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">endfor</span><span style="color:#24292E;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> entry </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> take(entryQueryResult, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">) %}</span></span>
<span class="line"><span style="color:#24292E;">  {{ component(</span><span style="color:#032F62;">&#39;card/news&#39;</span><span style="color:#24292E;">, { data: entry })}}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">endfor</span><span style="color:#24292E;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> entry </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> take(entryCollection, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">) %}</span></span>
<span class="line"><span style="color:#24292E;">  {{ component(</span><span style="color:#032F62;">&#39;card/news&#39;</span><span style="color:#24292E;">, { data: entry })}}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">endfor</span><span style="color:#24292E;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> entry </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> take(singleEntry, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">) %}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">{# Only one card will be output here #}</span></span>
<span class="line"><span style="color:#24292E;">  {{ component(</span><span style="color:#032F62;">&#39;card/news&#39;</span><span style="color:#24292E;">, { data: entry })}}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">endfor</span><span style="color:#24292E;"> %}</span></span></code></pre></div><h2 id="takeone" tabindex="-1"><code>takeOne()</code> <a class="header-anchor" href="#takeone" aria-label="Permalink to &quot;\`takeOne()\`&quot;">​</a></h2><p><code>takeOne()</code> returns the first item from a array-like set, <code>null</code> if the set was empty, or just the item itself in any other case. It is available as both a Twig function and a filter.</p><p>That means ugly code like this:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> image </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.imageField[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] ?? data.imageField[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] ?? </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> image </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.imageField[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] ?? data.imageField[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] ?? </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> %}</span></span></code></pre></div><p>Can be replaced with the much more expressive:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> image </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> takeOne(data.imageField) %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> image </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> takeOne(data.imageField) %}</span></span></code></pre></div><p>Expanded example:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">{# This could be a query, or a collection for an eager loaded relation #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> assetQuery </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.imageField %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> assetQueryResult </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.imageField.all() %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> singleAsset </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data.imageField.one() %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> fakeAsset </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> title: </span><span style="color:#9ECBFF;">&#39;Placeholder image&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> url: </span><span style="color:#9ECBFF;">&#39;https://www.fillmurray.com/400/300&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> alt: </span><span style="color:#9ECBFF;">&#39;Unbelievabill&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> width: </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> height: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">} %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> images </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;"> assetQuery,</span></span>
<span class="line"><span style="color:#E1E4E8;"> assetQueryResult,</span></span>
<span class="line"><span style="color:#E1E4E8;"> singleAsset,</span></span>
<span class="line"><span style="color:#E1E4E8;"> fakeAsset,</span></span>
<span class="line"><span style="color:#E1E4E8;">] %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> {% </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> image </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> images %}</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">{# takeOne() doesn&#39;t care #}</span></span>
<span class="line"><span style="color:#E1E4E8;">   {{ component(</span><span style="color:#9ECBFF;">&#39;image&#39;</span><span style="color:#E1E4E8;">, { data: takeOne(image)} ) }}</span></span>
<span class="line"><span style="color:#E1E4E8;"> {% </span><span style="color:#F97583;">endfor</span><span style="color:#E1E4E8;"> %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">{# This could be a query, or a collection for an eager loaded relation #}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> assetQuery </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.imageField %}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> assetQueryResult </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.imageField.all() %}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> singleAsset </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.imageField.one() %}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> fakeAsset </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;"> title: </span><span style="color:#032F62;">&#39;Placeholder image&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> url: </span><span style="color:#032F62;">&#39;https://www.fillmurray.com/400/300&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> alt: </span><span style="color:#032F62;">&#39;Unbelievabill&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> width: </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> height: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">} %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> images </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;"> assetQuery,</span></span>
<span class="line"><span style="color:#24292E;"> assetQueryResult,</span></span>
<span class="line"><span style="color:#24292E;"> singleAsset,</span></span>
<span class="line"><span style="color:#24292E;"> fakeAsset,</span></span>
<span class="line"><span style="color:#24292E;">] %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> {% </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> image </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> images %}</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">{# takeOne() doesn&#39;t care #}</span></span>
<span class="line"><span style="color:#24292E;">   {{ component(</span><span style="color:#032F62;">&#39;image&#39;</span><span style="color:#24292E;">, { data: takeOne(image)} ) }}</span></span>
<span class="line"><span style="color:#24292E;"> {% </span><span style="color:#D73A49;">endfor</span><span style="color:#24292E;"> %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="fill" tabindex="-1"><code>fill()</code> <a class="header-anchor" href="#fill" aria-label="Permalink to &quot;\`fill()\`&quot;">​</a></h2><p><code>fill()</code> is useful when you want to be sure to end up with a set number of list items in total, drawing from a series of sources in preferential order. It is available as a Twig function.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> featuredItems </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> craft.entries.section(</span><span style="color:#9ECBFF;">&#39;news&#39;</span><span style="color:#E1E4E8;">).isFeatured(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> otherItems </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> craft.entries.section(</span><span style="color:#9ECBFF;">&#39;news&#39;</span><span style="color:#E1E4E8;">).isFeatured(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">) %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> fill(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, featuredItems, otherItems) %}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">{# This loop will run five times, outputting (say) 3 x \`featuredItems\` (all found) and then 2 x other items #}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% </span><span style="color:#F97583;">endfor</span><span style="color:#E1E4E8;"> %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> featuredItems </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> craft.entries.section(</span><span style="color:#032F62;">&#39;news&#39;</span><span style="color:#24292E;">).isFeatured(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) %}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> otherItems </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> craft.entries.section(</span><span style="color:#032F62;">&#39;news&#39;</span><span style="color:#24292E;">).isFeatured(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">) %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> fill(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, featuredItems, otherItems) %}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">{# This loop will run five times, outputting (say) 3 x \`featuredItems\` (all found) and then 2 x other items #}</span></span>
<span class="line"><span style="color:#24292E;">{% </span><span style="color:#D73A49;">endfor</span><span style="color:#24292E;"> %}</span></span></code></pre></div>`,20),o=[p];function t(c,r,E,y,i,d){return n(),a("div",null,o)}const h=s(e,[["render",t]]);export{F as __pageData,h as default};
