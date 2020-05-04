import { getRenderer } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { zoomOnFormula } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/formula/zoom-on-formula.js';zoomOnFormula();
import { reloadOnChange } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { ToCToggle } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/Users/mustaphabenchaaben/Code/coding-blog/test-blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  's7Ms3dMpUdEZwNao1O2Iuw==': ToCPrevNext,
  'ziYLRI1MFJuJ8jjR8O7PDQ==': ToCToggle,
  'pJ7knRvg2nFlxXM1A8IvdA==': DarkModeSwitch,
  'P/2Ye4/AFP5oa0yWJ50w5w==': ConfigTransport,
  'V34DOMH0Z5NsAgsnQdH+XA==': TabSelector,
  'gASRSiUZiubQ1DZihBt94Q==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
