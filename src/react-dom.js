import vdom2dom from './virtual-dom'

/**
 * 
 * @param {虚拟dom} vnode  createElement函数： jsx => vnode
 * @param {容器} container 
 */
function render (vnode, container) {
  /**
   * 1. 将vnode解析成dom
   * 2. 将dom添加到页面容器
   */

  // vnode => dom
  let dom = vdom2dom(vnode, container)
  // 添加dom到页面
  container.appendChild(dom)
}
export default {
  render
}