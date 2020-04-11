import diff from './diff';

class Component {
  static isReactComponent = {}
  constructor(props) {
    this.props = props
    this._cachePrevNode = {}
    this.state = {}
  }

  setState = (val) => {
    this.state = {
      ...this.state,
      ...val
    }
    this.forceUpdate()
  }
  forceUpdate = () => {
    const { _cachePrevNode } = this
    const newVnode = this.render()
    let dom = diff(_cachePrevNode, newVnode)

  }
}

export default Component
