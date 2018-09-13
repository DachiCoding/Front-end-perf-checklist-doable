// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/src/pages/page-2.js")),
  "component---src-pages-page-3-js": preferDefault(require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/src/pages/page-3.js"))
}

exports.json = {
  "layout-index.json": require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/json/404.json"),
  "about.json": require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/json/about.json"),
  "index.json": require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/json/index.json"),
  "page-2.json": require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/json/page-2.json"),
  "page-3.json": require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/json/page-3.json"),
  "404-html.json": require("/Users/xudachi/Documents/workspace/projects/front-end-perf-checklist/.cache/json/404-html.json")
}