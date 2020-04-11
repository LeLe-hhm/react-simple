
import vdom2dom from './virtual-dom';
function diff (preVnode, vnode) {
  let { preDom, preParent } = preVnode
  let newDom = vdom2dom(vnode, preParent)
  preParent.replaceChild(newDom, preDom)
  return newDom
}

export default diff