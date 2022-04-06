import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.a7b2d798.js";const g='{"title":"\u8DEF\u7531\u53C2\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u666E\u901A\u8DEF\u7531","slug":"\u666E\u901A\u8DEF\u7531"},{"level":2,"title":"\u52A8\u6001\u8DEF\u7531","slug":"\u52A8\u6001\u8DEF\u7531"}],"relativePath":"config/route/index.md","lastUpdated":1642591961000}',p={},o=t(`<h1 id="\u8DEF\u7531\u53C2\u6570" tabindex="-1">\u8DEF\u7531\u53C2\u6570 <a class="header-anchor" href="#\u8DEF\u7531\u53C2\u6570" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u5F00\u59CB\u4E4B\u524D</p><p>\u60A8\u53EF\u80FD\u9700\u8981\u4E86\u89E3 <a href="https://next.router.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">Vue Router</a> \u7684\u52A8\u6001\u8DEF\u7531\u5339\u914D\u3001\u8DEF\u7531\u7684\u5339\u914D\u8BED\u6CD5\u3002\u6B64\u6F14\u793A\u754C\u9762\u5173\u8054 tagsView \u6807\u7B7E\u9875\u90E8\u5206\u903B\u8F91\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF1A<code>/@/layout/navBars/tagsView/tagsView.vue</code></p></div><h2 id="\u666E\u901A\u8DEF\u7531" tabindex="-1">\u666E\u901A\u8DEF\u7531 <a class="header-anchor" href="#\u666E\u901A\u8DEF\u7531" aria-hidden="true">#</a></h2><blockquote><p><a href="https://lyt-top.gitee.io/vue-next-admin-preview/#/params/common" target="_blank" rel="noopener noreferrer">\u8DEF\u7531\u53C2\u6570-\u666E\u901A\u8DEF\u7531\u9875\u9762\u6F14\u793A\u5730\u5740</a>\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF1A<code>/@/views/params/common</code></p></blockquote><p style="font-weight:bold;">\u4E00\u3001\u914D\u7F6E\u8DEF\u7531</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/params&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;paramsIndex&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/routerView/parent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/params/common&#39;</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params/common&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;paramsCommon&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/params/common/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params/common/details&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;paramsCommonDetails&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/params/common/details.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u9875\u9762\u8DF3\u8F6C</p><div class="language-ts"><pre><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&quot;/params/common/details&quot;</span><span class="token punctuation">,</span>
  query<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;vue-next-admin&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p style="font-weight:bold;">\u4E09\u3001\u53C2\u6570\u83B7\u53D6</p><blockquote><p>\u60A8\u53EF\u80FD\u9700\u8981\u4E86\u89E3 <a href="https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html" target="_blank" rel="noopener noreferrer">\u52A8\u6001\u8DEF\u7531\u5339\u914D</a>\u3002<code>route.query</code></p></blockquote><div class="language-html"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;paramsCommonDetails&quot;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u9875\u9762\u52A0\u8F7D\u65F6</span>
      <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53C2\u6570\uFF1Aquery: { &quot;id&quot;: &quot;111&quot;, &quot;name&quot;: &quot;vue-next-admin&quot; }</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u52A8\u6001\u8DEF\u7531" tabindex="-1">\u52A8\u6001\u8DEF\u7531 <a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a></h2><blockquote><p><a href="https://lyt-top.gitee.io/vue-next-admin-preview/#/params/dynamic" target="_blank" rel="noopener noreferrer">\u8DEF\u7531\u53C2\u6570-\u52A8\u6001\u8DEF\u7531\u9875\u9762\u6F14\u793A\u5730\u5740</a>\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF1A<code>/@/views/params/dynamic</code></p></blockquote><p style="font-weight:bold;">\u4E00\u3001\u914D\u7F6E\u8DEF\u7531</p><blockquote><p>\u6CE8\u610F <code>/params/dynamic/details/:t/:id</code> \u4E2D\u7684 <code>/:t/:id</code>\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4E86\u89E3 <a href="https://next.router.vuejs.org/zh/guide/essentials/route-matching-syntax.html" target="_blank" rel="noopener noreferrer">\u8DEF\u7531\u7684\u5339\u914D\u8BED\u6CD5</a></p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/params&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;paramsIndex&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/routerView/parent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/params/dynamic&#39;</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params/dynamic&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;paramsDynamic&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/params/dynamic/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params/dynamic/details/:t/:id&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;paramsDynamicDetails&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/params/dynamic/details.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u9875\u9762\u8DF3\u8F6C</p><blockquote><p>\u6CE8\u610F\u8FD9\u91CC\u7528 <code>name</code> \u8DF3\u8F6C\uFF0C\u53C2\u6570\u7528 <code>params</code></p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token comment">// name \u503C\u4E3A\u8DEF\u7531\u4E2D\u7684 name</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;paramsDynamicDetails&quot;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    t<span class="token operator">:</span> <span class="token string">&quot;vue-next-admin&quot;</span><span class="token punctuation">,</span>
    id<span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p style="font-weight:bold;">\u4E09\u3001\u53C2\u6570\u83B7\u53D6</p><blockquote><p>\u60A8\u53EF\u80FD\u9700\u8981\u4E86\u89E3 <a href="https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html" target="_blank" rel="noopener noreferrer">\u52A8\u6001\u8DEF\u7531\u5339\u914D</a>\u3002<code>route.params</code></p></blockquote><div class="language-html"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;paramsDynamicDetails&quot;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u9875\u9762\u52A0\u8F7D\u65F6</span>
      <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53C2\u6570\uFF1Aparams: { &quot;t&quot;: &quot;vue-next-admin&quot;, &quot;id&quot;: &quot;111&quot; }</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,22),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var b=n(p,[["render",c]]);export{g as __pageData,b as default};
