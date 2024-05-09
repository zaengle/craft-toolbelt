import{_ as s,c as a,o as i,a1 as e}from"./chunks/framework.biRBrEtS.js";const g=JSON.parse('{"title":"The Stash","description":"","frontmatter":{},"headers":[],"relativePath":"09-stash.md","filePath":"09-stash.md"}'),t={name:"09-stash.md"},n=e(`<h1 id="the-stash" tabindex="-1">The Stash <a class="header-anchor" href="#the-stash" aria-label="Permalink to &quot;The Stash&quot;">​</a></h1><p>Stash provides a simple and efficient way to store and retrieve data in memory over the course of a request. It&#39;s useful for storing data that needs to be accessed multiple times in a single request, without having to re-fetch it each time from the DB, or drill it down through props / params passed to includes or other component patterns.</p><h2 id="using-the-stash" tabindex="-1">Using the Stash <a class="header-anchor" href="#using-the-stash" aria-label="Permalink to &quot;Using the Stash&quot;">​</a></h2><p>The Stash is accessible either via the global <code>stash</code> object in Twig, or via the <code>craft.toolbelt.stash()</code> template variable. Both are references to the same service, and provide the same API.</p><h3 id="quick-api-reference" tabindex="-1">Quick API reference <a class="header-anchor" href="#quick-api-reference" aria-label="Permalink to &quot;Quick API reference&quot;">​</a></h3><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.set(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key.optionaly.in.dot.notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key.optionaly.in.dot.notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, optionalDefaultValue) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.push(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key.optionaly.in.dot.notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value2) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.pop(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key.optionaly.in.dot.notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.has(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key.optionaly.in.dot.notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.drop(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key.optionaly.in.dot.notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.clear() }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.getAll() }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.getKeys() }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.getValues() }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.getCount() }}</span></span></code></pre></div><p>See below for more detailed information on each method.</p><h2 id="stashing-and-retrieving-values" tabindex="-1">Stashing and retrieving values <a class="header-anchor" href="#stashing-and-retrieving-values" aria-label="Permalink to &quot;Stashing and retrieving values&quot;">​</a></h2><p>Values can be added to the stash using the <code>set()</code> method and retrieved using <code>get()</code>. The value can be any valid PHP value, though it&#39;s safest to stick to primitive values and instances / collections of models. Stashing something like a singleton service instance is probably a bad idea and may lead to unexpected effects. It also really shouldn&#39;t ever be necessary.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.set(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;areApplesNice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# then later, in some other template... #}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stash.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;areApplesNice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) }}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# \`true\` #}</span></span></code></pre></div><h3 id="default-values" tabindex="-1">Default values <a class="header-anchor" href="#default-values" aria-label="Permalink to &quot;Default values&quot;">​</a></h3><p>The <code>get()</code> method also accepts an optional second argument, which will be returned if the key does not exist in the stash. This can be useful for providing a default value for a key that may or may not be set.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stash.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;keyThatDoesntExist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;default value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) }}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# \`default value\` #}</span></span></code></pre></div><h2 id="pushing-and-popping-values" tabindex="-1">Pushing and popping values <a class="header-anchor" href="#pushing-and-popping-values" aria-label="Permalink to &quot;Pushing and popping values&quot;">​</a></h2><p>The stash also supports a stack-like interface, allowing you to <code>push()</code> and <code>pop()</code> values onto and off of a named stack. This can be useful for storing and retrieving values in collection that you will want to manipulate or iterate over later.</p><h3 id="push-pop-example" tabindex="-1">Push / pop example: <a class="header-anchor" href="#push-pop-example" aria-label="Permalink to &quot;Push / pop example:&quot;">​</a></h3><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.push(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;first&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.push(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;second&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.push(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;third&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stash.pop(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) }}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# \`third\` #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stash.pop(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) }}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# \`second\` #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stash.pop(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) }}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# \`first\` #}</span></span></code></pre></div><p>Stacks are created on demand, so you don&#39;t need to worry about creating them before you use them. If you <code>push()</code> to a stack that doesn&#39;t exist, it will be created for you using a Laravel Collection. If you initialise a stack with an empty array using <code>set()</code> first, that array will be used as the initial/return value. Attempting to <code>push()</code> or <code>pop()</code> to a previously initialized non-array or non-Collection value will throw an exception.</p><h3 id="push-then-iterate-example" tabindex="-1">Push-then-iterate example <a class="header-anchor" href="#push-then-iterate-example" aria-label="Permalink to &quot;Push-then-iterate example&quot;">​</a></h3><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.push(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Phil&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, hasGoodHair: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.push(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Patrick&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, goodHair: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.push(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Tom&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, hasGoodHair: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# stash.get(&#39;myStack&#39;) is automatically created as a collection, so we can use collection methods on it, as well as iterate over it #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stash.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myStack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).filter((person) =&gt; person.hasGoodHair </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{ person.name }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endfor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">{# \`Phil\` \`Tom\`  #}</span></span></code></pre></div><h2 id="deleting-values-and-clearing-the-stash" tabindex="-1">Deleting values and clearing the stash <a class="header-anchor" href="#deleting-values-and-clearing-the-stash" aria-label="Permalink to &quot;Deleting values and clearing the stash&quot;">​</a></h2><p>Values can be removed from the stash using the <code>drop()</code> method, which will remove the value at the specified key. The <code>clear()</code> method will remove all values from the stash.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.drop(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.clear() }}</span></span></code></pre></div><h2 id="checking-for-the-existence-of-a-value" tabindex="-1">Checking for the existence of a value <a class="header-anchor" href="#checking-for-the-existence-of-a-value" aria-label="Permalink to &quot;Checking for the existence of a value&quot;">​</a></h2><p>You can check if a value exists in the stash using the <code>has()</code> method. This will return <code>true</code> if the value exists, and <code>false</code> if it does not.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.has(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span></code></pre></div><h2 id="getting-everything-all-keys-values-and-the-count" tabindex="-1">Getting everything, all keys, values, and the count <a class="header-anchor" href="#getting-everything-all-keys-values-and-the-count" aria-label="Permalink to &quot;Getting everything, all keys, values, and the count&quot;">​</a></h2><p>You can get a shallow array copy of the current stash state, of all keys, or of all values, or the count of values in the stash using the <code>getAll()</code>, <code>getKeys()</code>, <code>getValues()</code>, and <code>getCount()</code> methods respectively:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.getAll() }} / {{ stash.all }} - returns a shallow copy of the current stash state</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.getKeys() }} / {{ stash.keys }} - returns an array of all keys in the stash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.getValues() }} / {{ stash.values }} - returns an array of all values in the stash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.getCount() }} / {{ stash.count }} - returns the number of values in the stash</span></span></code></pre></div><h2 id="dot-notation" tabindex="-1">Dot notation <a class="header-anchor" href="#dot-notation" aria-label="Permalink to &quot;Dot notation&quot;">​</a></h2><p>The following methods all support dot notation for keys:</p><ul><li><code>set()</code></li><li><code>get()</code></li><li><code>push()</code></li><li><code>drop()</code></li><li><code>has()</code></li></ul><p>This allows you to store and retrieve nested values in the stash. For example:</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.set(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key.optionaly.in.dot.notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ stash.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key.optionaly.in.dot.notation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span></code></pre></div><p>Setting a deeply nested value will create the necessary intermediate arrays or collections as needed. Attempting to <code>get()</code> a deeply nested value that doesn&#39;t exist will return <code>null</code>. Setting a deeply nested value using an intermediate key that is not an array or collection will throw an exception.</p><h2 id="caveats-limitations-and-internals" tabindex="-1">Caveats, limitations and internals <a class="header-anchor" href="#caveats-limitations-and-internals" aria-label="Permalink to &quot;Caveats, limitations and internals&quot;">​</a></h2><p>The stash is deliberately simple by design. It is in-memory only, so it&#39;s not suitable for storing data that needs to persist between requests. It&#39;s also not shared between requests, so you can&#39;t use it to store data that needs to be shared between different requests.</p><p>The stash works because Craft/Yii modules and their component services are singletons, and thus are shared for a single request. It&#39;s not a replacement for proper query caching or other more robust caching strategies, but a compliment to them to be used sparingly. It may electrocute your dog if you try to use it for something it&#39;s not designed for.</p><p>Internally the Stash uses Laravel Collections by default, along with Laravel&#39;s robust <code>Illuminate\\Support\\Arr</code> helper functions to support features like dot notation.</p><h2 id="tests" tabindex="-1">Tests <a class="header-anchor" href="#tests" aria-label="Permalink to &quot;Tests&quot;">​</a></h2><p>Are written using <a href="https://pestphp.com/" target="_blank" rel="noreferrer">Pest</a> and are located in <code>tests/Unit/StashTest.php</code>.</p>`,41),h=[n];function l(p,o,r,k,d,c){return i(),a("div",null,h)}const u=s(t,[["render",l]]);export{g as __pageData,u as default};
