/* global PIXI:false */

// import './guide-intro'
import './line-drawing'

if (window.__PIXI_INSPECTOR_GLOBAL_HOOK__) {
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI })
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.decline()
}
