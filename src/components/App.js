import React, { Component } from 'react';
import { connect } from 'react-redux'
import { countPlus, countMinus } from '../actions';

class App extends Component { 
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <p>現在の数字は { props.val } です</p>
        <button onClick={ props.countPlus }>+ 1</button>
        <button onClick={ props.countMinus }>- 1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  val: state.counter.val
})

const mapDispatchToProps = dispatch => ({
  countPlus:() => dispatch(countPlus()),
  countMinus:() => dispatch(countMinus())
})

// state 関数コンポーネントを使う

// const App = () => {
// // count という名前の state 変数を宣言、初期値 0 をセット
// // これがフック。
// const [count, setCount] = useState(0)
//   return (
//     <>
//       <p>現在の数字は{count}です!</p>
//       {/* setCount()は、countを更新するための関数。countを引数で受け取ることも出来る */}
//       {/* <button onClick={() => setCount(count + 1)}>+ 1</button> */}
//       <button onClick={() => setCount(prevState => prevState + 1)}>+ 1</button>
//       {/* <button onClick={() => setCount(count - 1)}>- 1</button> */}
//       <button onClick={() => setCount(prevState => prevState - 1)}>- 1</button>
//       <button onClick={() => setCount(0)}>0</button>
//     </>
//   )
// }

export default connect (mapStateToProps, mapDispatchToProps) (App);
