// import React from 'react'
// import ReactDOM from 'react-dom';
import './index.css'
import React from './react1'
import ReactDOM from './react-dom'
function FuncCmp (props) {
  return <div>{props.name}</div>
}
class ClassCmp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: ['javascript', 'https', 'node'],
      counter: 0
    }
  }
  handleClick = () => {
    console.log('handleclick')
    this.setState({
      counter: this.state.counter + 1
    }, () => {
      console.log(this.state)
    })
  }
  render () {
    let { books, counter } = this.state
    return <div className='titel' id='replace'>
      <p>{this.props.name}</p>
      {
        books.map(item => {
          return <div>{item}</div>
        })
      }
      <div>{counter}</div>
      <button onClick={this.handleClick}>点击</button>
    </div>
  }
}
let ele = <div id='root'>
  <h2 className="title" id='title'>react-simple</h2>
  <FuncCmp name='function-component' />
  <ClassCmp name='class-component' />

</div>

ReactDOM.render(ele, document.getElementById('root'))