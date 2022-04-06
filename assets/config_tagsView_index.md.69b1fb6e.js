import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.a7b2d798.js";const g='{"title":"\u6807\u7B7E\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53F3\u952E\u83DC\u5355","slug":"\u53F3\u952E\u83DC\u5355"},{"level":2,"title":"\u5F53\u524D\u9875\u64CD\u4F5C","slug":"\u5F53\u524D\u9875\u64CD\u4F5C"},{"level":2,"title":"\u6EDA\u52A8\u65B9\u5F0F","slug":"\u6EDA\u52A8\u65B9\u5F0F"},{"level":2,"title":"\u5E03\u5C40\u63A7\u5236","slug":"\u5E03\u5C40\u63A7\u5236"}],"relativePath":"config/tagsView/index.md","lastUpdated":1642591961000}',p={},o=t(`<h1 id="\u6807\u7B7E\u9875" tabindex="-1">\u6807\u7B7E\u9875 <a class="header-anchor" href="#\u6807\u7B7E\u9875" aria-hidden="true">#</a></h1><blockquote><p>\u4EE3\u7801\u8DEF\u5F84\uFF1A<code>/@/layout/navBars/tagsView</code>\uFF0CtagsView \u56FD\u9645\u5316\u79FB\u6B65 <a href="/config/i18n/#tagsview-\u6807\u7B7E\u9875">\u56FD\u9645\u5316-tagsview-\u6807\u7B7E\u9875</a></p></blockquote><h2 id="\u53F3\u952E\u83DC\u5355" tabindex="-1">\u53F3\u952E\u83DC\u5355 <a class="header-anchor" href="#\u53F3\u952E\u83DC\u5355" aria-hidden="true">#</a></h2><blockquote><p>\u4EE3\u7801\u8DEF\u5F84\uFF1A<code>/@/layout/navBars/tagsView/contextmenu.vue</code>\uFF0C\u53F3\u952E\u83DC\u5355\u4E0E <a href="/config/tagsView/#\u5F53\u524D\u9875\u64CD\u4F5C">\u5F53\u524D\u9875\u64CD\u4F5C</a> \u4E00\u6837\uFF0C\u5305\u542B 0 \u5237\u65B0\u5F53\u524D\uFF0C1 \u5173\u95ED\u5F53\u524D\uFF0C2 \u5173\u95ED\u5176\u5B83\uFF0C3 \u5173\u95ED\u5168\u90E8 4 \u5F53\u524D\u9875\u5168\u5C4F\u3002\u5177\u4F53\u53EF\u67E5\u770B\u4EE3\u7801 <code>/@/layout/navBars/tagsView/tagsView.vue</code> \u4E2D\u7684 <code>onCurrentContextmenuClick</code> \u65B9\u6CD5</p></blockquote><div class="language-ts"><pre><code><span class="token comment">// \u5F53\u524D\u9879\u53F3\u952E\u83DC\u5355\u70B9\u51FB</span>
<span class="token keyword">const</span> <span class="token function-variable function">onCurrentContextmenuClick</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cParams <span class="token operator">=</span> item<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>isDynamic <span class="token operator">?</span> item<span class="token punctuation">.</span>params <span class="token operator">:</span> item<span class="token punctuation">.</span>query<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">getCurrentRouteItem</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>path<span class="token punctuation">,</span> cParams<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u6B63\u786E\u8F93\u5165\u8DEF\u5F84\u53CA\u5B8C\u6574\u53C2\u6570\uFF08query\u3001params\uFF09&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> path<span class="token punctuation">,</span> name<span class="token punctuation">,</span> params<span class="token punctuation">,</span> query<span class="token punctuation">,</span> meta<span class="token punctuation">,</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentRouteItem</span><span class="token punctuation">(</span>
    item<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
    cParams
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>contextMenuClickId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
      <span class="token comment">// \u5237\u65B0\u5F53\u524D</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>meta<span class="token punctuation">.</span>isDynamic<span class="token punctuation">)</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token punctuation">,</span> query <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">refreshCurrentTagsView</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>fullPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
      <span class="token comment">// \u5173\u95ED\u5F53\u524D</span>
      <span class="token function">closeCurrentTagsView</span><span class="token punctuation">(</span>getThemeConfig<span class="token punctuation">.</span>value<span class="token punctuation">.</span>isShareTagsView <span class="token operator">?</span> path <span class="token operator">:</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
      <span class="token comment">// \u5173\u95ED\u5176\u5B83</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>meta<span class="token punctuation">.</span>isDynamic<span class="token punctuation">)</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token punctuation">,</span> query <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">closeOtherTagsView</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
      <span class="token comment">// \u5173\u95ED\u5168\u90E8</span>
      <span class="token function">closeAllTagsView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
      <span class="token comment">// \u5F00\u542F\u5F53\u524D\u9875\u9762\u5168\u5C4F</span>
      <span class="token function">openCurrenFullscreen</span><span class="token punctuation">(</span>getThemeConfig<span class="token punctuation">.</span>value<span class="token punctuation">.</span>isShareTagsView <span class="token operator">?</span> path <span class="token operator">:</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5F53\u524D\u9875\u64CD\u4F5C" tabindex="-1">\u5F53\u524D\u9875\u64CD\u4F5C <a class="header-anchor" href="#\u5F53\u524D\u9875\u64CD\u4F5C" aria-hidden="true">#</a></h2><blockquote><p>\u53C2\u6570\u8BF4\u660E\uFF1A0 \u5237\u65B0\u5F53\u524D\uFF0C1 \u5173\u95ED\u5F53\u524D\uFF0C2 \u5173\u95ED\u5176\u5B83\uFF0C3 \u5173\u95ED\u5168\u90E8 4 \u5F53\u524D\u9875\u5168\u5C4F\u3002tagsView \u53EA\u652F\u6301\u5BF9\u5F53\u524D\u9875\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8BF7\u770B\u9AD8\u4EAE\u90E8\u5206\u4EE3\u7801\u3002\u67E5\u770B\u6F14\u793A <a href="https://lyt-top.gitee.io/vue-next-admin-preview/#/fun/tagsView" target="_blank" rel="noopener noreferrer">tagsView \u64CD\u4F5C</a></p></blockquote><p style="font-weight:bold;">\u4E00\u3001\u5237\u65B0</p><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token comment">// \u83B7\u53D6\u8DEF\u7531\u4FE1\u606F</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 0\u3001\u5237\u65B0\u5F53\u524D tagsView</span>
<span class="token keyword">const</span> <span class="token function-variable function">refreshCurrentTagsView</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> contextMenuClickId<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">...</span>route <span class="token punctuation">}</span><span class="token punctuation">;</span>
  proxy<span class="token punctuation">.</span>mittBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;onCurrentContextmenuClick&quot;</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u5173\u95ED</p><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token comment">// \u83B7\u53D6\u8DEF\u7531\u4FE1\u606F</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1\u3001\u5173\u95ED\u5F53\u524D tagsView</span>
<span class="token keyword">const</span> <span class="token function-variable function">closeCurrentTagsView</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> contextMenuClickId<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span>route <span class="token punctuation">}</span><span class="token punctuation">;</span>
  proxy<span class="token punctuation">.</span>mittBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;onCurrentContextmenuClick&quot;</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p style="font-weight:bold;">\u4E09\u3001\u5173\u95ED\u5176\u5B83</p><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token comment">// \u83B7\u53D6\u8DEF\u7531\u4FE1\u606F</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2\u3001\u5173\u95ED\u5176\u5B83 tagsView</span>
<span class="token keyword">const</span> <span class="token function-variable function">closeOtherTagsView</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> contextMenuClickId<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">...</span>route <span class="token punctuation">}</span><span class="token punctuation">;</span>
  proxy<span class="token punctuation">.</span>mittBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;onCurrentContextmenuClick&quot;</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p style="font-weight:bold;">\u56DB\u3001\u5168\u90E8\u5173\u95ED</p><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token comment">// \u83B7\u53D6\u8DEF\u7531\u4FE1\u606F</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3\u3001\u5173\u95ED\u5168\u90E8 tagsView</span>
<span class="token keyword">const</span> <span class="token function-variable function">closeAllTagsView</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> contextMenuClickId<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">...</span>route <span class="token punctuation">}</span><span class="token punctuation">;</span>
  proxy<span class="token punctuation">.</span>mittBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;onCurrentContextmenuClick&quot;</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p style="font-weight:bold;">\u4E94\u3001\u5F53\u524D\u9875\u5168\u5C4F</p><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token comment">// \u83B7\u53D6\u8DEF\u7531\u4FE1\u606F</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4\u3001\u5F00\u542F\u5F53\u524D\u9875\u9762\u5168\u5C4F</span>
<span class="token keyword">const</span> <span class="token function-variable function">openCurrenFullscreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> contextMenuClickId<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">...</span>route <span class="token punctuation">}</span><span class="token punctuation">;</span>
  proxy<span class="token punctuation">.</span>mittBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;onCurrentContextmenuClick&quot;</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6EDA\u52A8\u65B9\u5F0F" tabindex="-1">\u6EDA\u52A8\u65B9\u5F0F <a class="header-anchor" href="#\u6EDA\u52A8\u65B9\u5F0F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u5185\u5BB9\u6EA2\u51FA\u65F6\uFF0C\u9F20\u6807\u6EDA\u8F6E + \u9F20\u6807\u5DE6\u952E</p><ul><li><p>1\u3001\u79FB\u5165\u5230 tagsView \u6807\u7B7E\u9875\u4E2D\uFF0C\u53EF\u901A\u8FC7\u9F20\u6807\u6EDA\u8F6E\uFF08\u4E2D\u952E\uFF09\u8FDB\u884C\u67E5\u770B</p></li><li><p>2\u3001\u79FB\u5165\u5230 tagsView \u6807\u7B7E\u9875\u4E2D\uFF0C\u62D6\u52A8\u6EDA\u52A8\u6761\u8FDB\u884C\u6EDA\u52A8</p></li><li><p>3\u3001\u79FB\u52A8\u7AEF\uFF1A\u5E38\u89C4\u64CD\u4F5C\u5373\u53EF</p></li></ul></div><h2 id="\u5E03\u5C40\u63A7\u5236" tabindex="-1">\u5E03\u5C40\u63A7\u5236 <a class="header-anchor" href="#\u5E03\u5C40\u63A7\u5236" aria-hidden="true">#</a></h2><blockquote><p>\u8BE6\u7EC6\u4ECB\u7ECD\u79FB\u6B65 <a href="/config/layoutConfig/">\u5E03\u5C40\u914D\u7F6E</a></p></blockquote>`,21),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
