/**
 * 
 * @param {虚拟dom} vdom 
 */
function vdom2dom (vdom, container) {
  return vdom.vtype ? handleType[vdom.vtype](vdom, container) : handleType['TEXTNODE'](vdom, container)
}
const handleType = {
  HTMLTAG: (vdom, container) => {
    let dom = document.createElement(vdom.type)
    appendDom(vdom, dom, container)
    addAttrs(vdom, dom, container)
    return dom
  },
  TEXTNODE: (vdom) => {
    return document.createTextNode(vdom)
  },
  FUNCTIONCOMPONENT: (vdom, container) => {
    let { props } = vdom
    return vdom2dom(vdom.type(props), container)
  },
  CLASSCOMPONENT: (vdom, container) => {
    let { type, props } = vdom
    let classComponent = new type(props)
    let dom = vdom2dom(classComponent.render(), container)
    classComponent._cachePrevNode = {
      type,
      props,
      preDom: dom,
      preParent: container
    }
    return dom
  }
}
// 添加dom
function appendDom (vdom, dom, container) {
  let { children } = vdom.props
  children.forEach(child => {
    // 处理jsx中的遍历 xxx.map()
    if (Array.isArray(child)) {
      child.forEach(item => {
        dom.appendChild(vdom2dom(item, container))
      })
    } else {
      dom.appendChild(vdom2dom(child, container))
    }
  })
}
// 设置元素属性
function addAttrs (vdom, dom) {
  let { props } = vdom
  Object.keys(props).forEach(key => {
    // 不兼容自定义属性 data-xxxx
    if (key === 'className') {
      dom.setAttribute('class', props[key])
    }
    if (key === 'id') {
      dom.setAttribute('id', props[key])
    }
    if (key.slice(0, 2) === 'on') {
      dom.addEventListener('click', props[key])
    }
  })

}
export default vdom2dom
