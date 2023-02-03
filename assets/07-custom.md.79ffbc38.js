import{_ as s,c as a,o as n,a as l}from"./app.d333e1e5.js";const A=JSON.parse('{"title":"Custom Helpers","description":"","frontmatter":{},"headers":[{"level":2,"title":"Choose Your Own Adventure™","slug":"choose-your-own-adventuretm","link":"#choose-your-own-adventuretm","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"Filters","slug":"filters","link":"#filters","children":[]},{"level":2,"title":"Tests","slug":"tests","link":"#tests","children":[]},{"level":2,"title":"Globals","slug":"globals","link":"#globals","children":[{"level":3,"title":"A Caveat about Globals","slug":"a-caveat-about-globals","link":"#a-caveat-about-globals","children":[]}]},{"level":2,"title":"Acknowledgements","slug":"acknowledgements","link":"#acknowledgements","children":[]}],"relativePath":"07-custom.md"}'),o={name:"07-custom.md"},e=l(`<h1 id="custom-helpers" tabindex="-1">Custom Helpers <a class="header-anchor" href="#custom-helpers" aria-hidden="true">#</a></h1><h2 id="choose-your-own-adventuretm" tabindex="-1">Choose Your Own Adventure™ <a class="header-anchor" href="#choose-your-own-adventuretm" aria-hidden="true">#</a></h2><p>Sometimes you need to define your own Twig helpers in order to abstract logic that is verbose or messy in Twig, or you want to use PHP functions that aren&#39;t available in Twig, and aren&#39;t built-n to Toolbelt. This plugin still allows you to do that too, but defining custom Twig functions, filters, tests and globals in the plugin&#39;s config file under a <code>custom</code> key.</p><p>In all cases, key names must be strings, as they will define the name of the helper, and the value should be a <a href="https://www.php.net/manual/en/language.types.callable.php" target="_blank" rel="noreferrer">callable</a>.</p><blockquote><h3 id="⚠-heads-up" tabindex="-1">⚠ <strong>Heads-up</strong> <a class="header-anchor" href="#⚠-heads-up" aria-hidden="true">#</a></h3><p>If you find yourself writing a <em>lot</em> of custom helpers, it might be a sign that you should be using a different approach to your templates, or that you should be abstracting the logic into a service or module. A plugin config file is not the best place for a lot of logic, as it can quickly become hard for a human to parse what&#39;s going on. Use your own judgement, but we recommend using this functionality reasonably sparingly. If you think you&#39;ve found a common use case that should be folded into Toolbelt core, please <a href="https://github.com/zaengle/craft-toolbelt/issues/new" target="_blank" rel="noreferrer">open an issue</a> or (even better) <a href="https://github.com/zaengle/craft-toolbelt/compare" target="_blank" rel="noreferrer">a PR</a>.</p></blockquote><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><p>Functions are defined under the <code>functions</code> key. Explicitly define any arguments you want to pass. Passing more / fewer arguments than defined will throw an error.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// config/toolbelt.php</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">functions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">double</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">float</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">price</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">float</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">price </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">{# Usage #}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ double(</span><span style="color:#F78C6C;">2.5</span><span style="color:#89DDFF;">) }}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://twig.symfony.com/doc/3.x/templates.html#functions" target="_blank" rel="noreferrer">See the Twig Functions documentation for more information</a></p><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-hidden="true">#</a></h2><p>Filters are defined under the <code>filters</code> key. They always have at least one argument, but can have any number of them.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// config/toolbelt.php</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">filters</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// PHP func name</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">reverse</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">strrev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// closure</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">verboseReverse</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">strrev</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// old skool callable array syntax</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myFilter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\\My\\Class</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myFilter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">{# Usage #}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Step on no pets</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> | </span><span style="color:#A6ACCD;">reverse</span><span style="color:#89DDFF;">)  == </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Step on no pets</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"><span style="color:#A6ACCD;">    It&#39;s a palindrome!</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">endif</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://twig.symfony.com/doc/3.x/templates.html#filters" target="_blank" rel="noreferrer">See the Twig Filters documentation for more information</a></p><h2 id="tests" tabindex="-1">Tests <a class="header-anchor" href="#tests" aria-hidden="true">#</a></h2><p>Tests are defined under the <code>tests</code> key. They always have one argument.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// config/toolbelt.php</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tests</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">even</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">number </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">{# Usage #}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;"> is </span><span style="color:#A6ACCD;">isEven</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"><span style="color:#A6ACCD;">    2 is even</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;font-style:italic;">endif</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://twig.symfony.com/doc/3.x/templates.html#tests" target="_blank" rel="noreferrer">See the Twig Tests documentation for more information</a></p><h2 id="globals" tabindex="-1">Globals <a class="header-anchor" href="#globals" aria-hidden="true">#</a></h2><p>Globals are defined under the <code>globals</code> key. They always have one argument</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// config/toolbelt.php</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">globals</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">now</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DateTime</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">{# Usage #}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ </span><span style="color:#A6ACCD;">now</span><span style="color:#89DDFF;"> }}</span></span>
<span class="line"></span></code></pre></div><h3 id="a-caveat-about-globals" tabindex="-1">A Caveat about Globals <a class="header-anchor" href="#a-caveat-about-globals" aria-hidden="true">#</a></h3><blockquote><p>⚠️<strong>Warning</strong> Be careful when assigning globals to expression values, as they are evaluated on every request. If you need to defining a global that is potentially expensive to compute, consider either using a function instead, or returning an instance of a class, and calling a method on that to get the value.</p></blockquote><p>If you just need to return a value, you should consider whether <a href="https://craftcms.com/docs/4.x/config/#custom-settings" target="_blank" rel="noreferrer">custom config settings</a> might be a better fit for your use case.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// config/toolbelt.php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExpensiveClass</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">spend</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dollar dollar bill yall</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">globals</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//           This is safe, as it is very cheap to compute (although it also already exists as a global, so don&#39;t add this too)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">now</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DateTime</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//           but if your result is expensive/slow (because it hits the database, or does a lot of work), use a function</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//           or class instead... also this would probably be better as a \`function\` definition, not a \`global\`</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">expensive</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Let&#39;s just pretend this is expensive to compute for the purposes of this example, ok?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">money</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExpensiveClass</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">{# Usage #}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ </span><span style="color:#A6ACCD;">now</span><span style="color:#89DDFF;"> }}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ expensive() }}</span></span>
<span class="line"><span style="color:#89DDFF;">{{ money.</span><span style="color:#A6ACCD;">spend</span><span style="color:#89DDFF;">() }}</span></span>
<span class="line"></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">See the Twig Globals documentation </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> more information</span><span style="color:#89DDFF;">](</span><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//twig.symfony.com/doc/3.x/templates.html#globals)</span></span>
<span class="line"></span></code></pre></div><h2 id="acknowledgements" tabindex="-1">Acknowledgements <a class="header-anchor" href="#acknowledgements" aria-hidden="true">#</a></h2><p>This functionality was inspired by the <a href="https://github.com/oof-bar/craft-twig-toolbox" target="_blank" rel="noreferrer">Craft Twig Toolbox plugin</a> but was re-written for this plugin. All credit to <a href="https://oof.studio/" target="_blank" rel="noreferrer">oof</a> for the original idea.</p>`,32),p=[e];function t(c,r,D,y,i,F){return n(),a("div",null,p)}const h=s(o,[["render",t]]);export{A as __pageData,h as default};
