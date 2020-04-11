import Component from './component';

/**
 * 
 * @param {标签、函数组件名、类组件名} type 
 * @param {属性} config 
 * @param  {...any} children 
 */
function createElement (type, props, ...children) {
  delete props.__source
  let vtype
  if (typeof type === 'string') { // html 标签
    vtype = 'HTMLTAG'
  } else if (typeof type === 'function') {
    vtype = type.isReactComponent ? 'CLASSCOMPONENT' : 'FUNCTIONCOMPONENT'
  }
  return {
    vtype,
    type,
    props: {
      ...props,
      children
    }
  }
}
console.log('Component', Component)
export default {
  createElement,
  Component
}