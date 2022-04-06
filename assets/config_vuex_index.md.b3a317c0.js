import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.a7b2d798.js";const m='{"title":"vuex","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5168\u5C40\u5F15\u5165","slug":"\u5168\u5C40\u5F15\u5165"},{"level":2,"title":"\u5B9A\u4E49\u63A5\u53E3","slug":"\u5B9A\u4E49\u63A5\u53E3"},{"level":2,"title":"\u5B9A\u4E49\u6A21\u5757","slug":"\u5B9A\u4E49\u6A21\u5757"},{"level":2,"title":"\u4F7F\u7528\u6A21\u5757","slug":"\u4F7F\u7528\u6A21\u5757"}],"relativePath":"config/vuex/index.md","lastUpdated":1642591961000}',p={},e=t(`<h1 id="vuex" tabindex="-1">vuex <a class="header-anchor" href="#vuex" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u5F00\u59CB\u4E4B\u524D</p><p>\u6846\u67B6\u4E2D\u6570\u636E\u72B6\u6001\u4F7F\u7528 vuex Module \u6A21\u5757\u5316\u8FDB\u884C\u7BA1\u7406\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4E86\u89E3 <a href="https://next.vuex.vuejs.org/zh/guide/modules.html" target="_blank" rel="noopener noreferrer">vuex \u6838\u5FC3\u6982\u5FF5 Module</a></p></div><h2 id="\u5168\u5C40\u5F15\u5165" tabindex="-1">\u5168\u5C40\u5F15\u5165 <a class="header-anchor" href="#\u5168\u5C40\u5F15\u5165" aria-hidden="true">#</a></h2><blockquote><p>\u9875\u9762\u6A21\u5757\u5DF2\u505A\u5168\u5C40\u81EA\u52A8\u5F15\u5165\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF1A<code>/@/store/index.ts</code>\u3002<a href="https://vitejs.cn/guide/features.html#glob-import" target="_blank" rel="noopener noreferrer">import.<wbr>meta.globEager</a></p></blockquote><div class="language-ts"><pre><code><span class="token keyword">const</span> modulesFiles <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">&quot;./modules/*.ts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pathList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> path <span class="token keyword">in</span> modulesFiles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pathList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> modules <span class="token operator">=</span> pathList<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>modules<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> modulePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> moduleName <span class="token operator">=</span> modulePath<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.\\/modules\\/(.*)\\.\\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> modulesFiles<span class="token punctuation">[</span>modulePath<span class="token punctuation">]</span><span class="token punctuation">;</span>
    modules<span class="token punctuation">[</span>moduleName<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">.</span>default<span class="token punctuation">;</span>
    <span class="token keyword">return</span> modules<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5B9A\u4E49\u63A5\u53E3" tabindex="-1">\u5B9A\u4E49\u63A5\u53E3 <a class="header-anchor" href="#\u5B9A\u4E49\u63A5\u53E3" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001interface</p><blockquote><p><code>/@/store/interface/index.ts</code>\uFF0C\u5982\uFF1A\u8DEF\u7531\u7F13\u5B58\u5217\u8868 <code>KeepAliveNamesState</code></p></blockquote><div class="language-ts"><pre><code><span class="token comment">// \u8DEF\u7531\u7F13\u5B58\u5217\u8868</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">KeepAliveNamesState</span> <span class="token punctuation">{</span>
  keepAliveNames<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u4F7F\u7528 interface</p><blockquote><p>\u5728 <code>/@/store/modules/</code> \u65B0\u589E <code>keepAliveNames.ts</code>\uFF0C\u754C\u9762\u5199\u5165\u5982\u4E0B\u4EE3\u7801\uFF1A\u6CE8\u610F\u9700\u8981\u5F00\u542F <code>namespaced: true</code> \u6587\u4EF6\u540D\u79F0\u5373\u6A21\u5757\u540D\u79F0\u3002(<a href="https://next.vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4" target="_blank" rel="noopener noreferrer">vuex Module \u547D\u540D\u7A7A\u95F4</a>)</p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6B64\u5904\u52A0\u4E0A \`.ts\` \u540E\u7F00\u62A5\u9519\uFF0C\u5177\u4F53\u539F\u56E0\u4E0D\u8BE6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> KeepAliveNamesState<span class="token punctuation">,</span> RootStateTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/store/interface/index&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> keepAliveNamesModule<span class="token operator">:</span> Module<span class="token operator">&lt;</span>KeepAliveNamesState<span class="token punctuation">,</span> RootStateTypes<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    keepAliveNames<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u8DEF\u7531\u7F13\u5B58\uFF08name\u5B57\u6BB5\uFF09</span>
    <span class="token function">getCacheKeepAlive</span><span class="token punctuation">(</span>state<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>keepAliveNames <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u8DEF\u7531\u7F13\u5B58\uFF08name\u5B57\u6BB5\uFF09</span>
    <span class="token keyword">async</span> <span class="token function">setCacheKeepAlive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;getCacheKeepAlive&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> keepAliveNamesModule<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5B9A\u4E49\u6A21\u5757" tabindex="-1">\u5B9A\u4E49\u6A21\u5757 <a class="header-anchor" href="#\u5B9A\u4E49\u6A21\u5757" aria-hidden="true">#</a></h2><blockquote><p>\u5982\u4E0A\u6240\u793A\uFF0C\u6211\u4EEC\u5728 <code>/@/store/modules/</code> \u4E0B\u65B0\u589E\u4E86 <code>keepAliveNames.ts</code> \u6587\u4EF6\uFF0C\u5E76\u5B9A\u4E49\u4E86\u65B9\u6CD5 <code>mutations</code>\u3001<code>actions</code></p></blockquote><h2 id="\u4F7F\u7528\u6A21\u5757" tabindex="-1">\u4F7F\u7528\u6A21\u5757 <a class="header-anchor" href="#\u4F7F\u7528\u6A21\u5757" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001\u5728 .ts \u4E2D\u4F7F\u7528</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/store/index.ts&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// dispatch</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;keepAliveNames/setCacheKeepAlive&quot;</span><span class="token punctuation">,</span> cacheList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6216\u8005 commit</span>
<span class="token comment">// store.commit(&quot;keepAliveNames/getCacheKeepAlive&quot;, cacheList);</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u5728 .vue \u4E2D\u4F7F\u7528</p><div class="language-html"><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getThemeConfig.isLockScreen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5728 .vue \u4E2D\u4F7F\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/store/index&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u83B7\u53D6\u5E03\u5C40\u914D\u7F6E\u4FE1\u606F</span>
      <span class="token keyword">const</span> getThemeConfig <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>themeConfig<span class="token punctuation">.</span>themeConfig<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,19),o=[e];function c(l,u,i,k,r,d){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
