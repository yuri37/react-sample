// import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types';
// import React,{ Component } from 'react';
import React, { useState } from "react";

// class App extends Component {

//   // 5. メソッドとして用意する
//   // renderWithConditionメソッドは引数としてisMorningを受け取る
//   // renderWithCondition(isMorning) {
//   //   // isMorningがtrueなら
//   //   if (isMorning) {
//   //     return <span>Good morning</span>
//   //   // isMorningがfalseなら  
//   //   } else {
//   //     return <span>Hello</span>
//   //   }
//   // }

//   render() {

//     // const tasks = [
//     //   { id: 1, title: "one" },
//     //   { id: 2, title: "two" },
//     //   { id: 3, title: "three" },
//     //   { id: 4, title: "four" },
//     //   { id: 5, title: "five" },
//     // ];
  
//     //  const num = tasks.map((val, index) => { return <div>IDは{val.id}, TITLEは{ val.title }</div>})
//     // return (
//     //   <div>{ num }</div>
//     // )

//     // const result = tasks.filter((el) => {
//     //   return el.id % 2 !== 0
//     // }).map((el, index)=>{ return <div>ID:{el.id}, TITLE:{el.title}, INDEX:{index}</div> })
//     // return (
//     //   <div>{ result }</div>
//     // )

//     // 1. 即時関数を用いる(あまり使わない)

//     // let isMorning = true
//     // return (
//     //   <div>
//     //     {(() => {
//     //       if (isMorning) {
//     //         return <span>Good morning</span>
//     //       } else {
//     //         return <span>Hello</span>
//     //       }
//     //     })()}
//     //   </div>
//     // )
    
//     // 2. &&演算子を使う

//     // let isMorning = true
//     // return (
//     //   <div>
//     //     { isMorning && <span>Good morning</span> }
//     //   </div>
//     // )
  
//     // 3. 三項演算子を使う

//     // let isMorning = true
//     //   return (
//     //     <div>
//     //       { isMorning ? <span>Good morning</span> : <span>Hello</span> }
//     //     </div>
//     //   )

//     // 4. 関数でコンポーネントを表現する

//     // let isMorning = true
//     // function Greeting() {
//     //   if (isMorning) {
//     //     return <span>Good morning</span>
//     //   } else {
//     //     return <span>Hello</span>
//     //   }
//     // }
      
//     // return (
//     //   <div>
//     //     <Greeting/>
//     //   </div>
//     // )
    
//     // 5. メソッドとして用意する
//     // let isMorning = true

//     // return (
//     //   <div>
//     //     {/* renderWithConditionメソッドを呼び出す */}
//     //     { this.renderWithCondition(isMorning) }
//     //   </div>
//     // )

//     // イベント取得
//     // return (
//     //   <button onClick={() => { console.log("hoi") }}>ボタン</button>
//     // )

//     // sayHoi関数を作って呼び出す
//     // const sayHoi = () => {
//     //   console.log("hoi");
//     // }
//     // return (
//     //   <button onClick={ sayHoi }>ボタン</button>
//     // )

//     // const tasks = [
//     //   { id: 1, title: "概要作成" },
//     //   { id: 2, title: "two" },
//     //   { id: 3, title: "詳細設計作成" },
//     //   { id: 4, title: "four" },
//     //   { id: 5, title: "テスト" },
//     // ];

//     // const result = tasks.filter((el) => {
//     //   return el.id % 2 !== 0
//     // }).map((el, index) => {
//     //   return <div>
//     //     ID:{el.id}, TITLE:{el.title}, INDEX:{index}
//     //     <button onClick={() => { console.log(el.id) }}>button</button>
//     //   </div>
//     // })
//     // return (
//     //   <div>{result}</div>
//     // )

    
//     // input
//     const inputViews = (e) => {
//       console.log(e.target.previousElementSibling.value)
//     }
  

//     return (
//       <div>
//         <input type="text"/>
//         <button onClick={ inputViews }>button</button>
//       </div>
//     )
    
//   }
// }

// export default App;

// 20210518

// // コンポーネントの名前は先頭大文字
// // 親
// const App = () => {
//   return <div>
//     {/* 処理が1行なら=>の後の{}は省略可 */}
//     <button onClick={() => console.log("hoi")}>ボタン</button>
//     <Huga />    
//   </div>
// }

// // 子
// const Huga = () => {
//   return <div>
//     <div>hugahugahuga</div>
//     <Hoge />
//   </div>
// }

// // 孫
// const Hoge = () => {
//   return <div>
//     <div>hogehogehoge</div>
//     { piyo() }
//   </div>
// }

// // 孫の中で使う関数
// const piyo = () => {
//   console.log('hiyoko')
//   return 'piyopiyo'
// }

// const App = () => {
//   return (
//     <div>
//       <Member name={"taro"} age={28} />
//       <Member name={"kuro"} age={26} />
//     </div>
//   )
// }

// const Member = (props) => {
//   return <div>I'm {props.name}, age is { props.age }</div>
// }

// const Members = [
//   { id: 1, name: "taro" },
//   { id: 2, name: "jiro", age: 11},
//   { id: 3, name: "saburo", age: 10 },  
// ]

// const App = () => {
//   return (
//     <div>
//       {
//         // Member配列に対して新しい配列を作成
//         Members.map((men, index) => {
//           // 配列の数だけ子コンポーネントを繰り返し表示する
//           return <Member key={index} id={men.id} name={men.name} age={men.age} />
//         })
//       }
//       <Parent />
//     </div>
//   )
// }

// // 子コンポーネント
// const Member = (props) => {
//   return <div>
//     ID:{ props.id } I'm {props.name}, age is {props.age}
//   </div>
// }

// // ここでデフォルト値を設定してあげれば、なんかしらの値が入っていることになるから
// // undefinedにはならない
// Member.defaultProps = {
//   age: 100
// }

// // コンポーネント.propTypesと小文字にする必要がある(キャメルケースにする)
// // propTypesの名前はなんでもいい
// Member.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

// //子コンポーネント
// const Child = props => {
//   return<span>{ props.children }</span>
// }

// //親コンポーネント
// const Parent = () => {
  
//   return <Child>
//     ここの内容が表示される
//   </Child>
// }


// state クラスコンポーネントを使う

// class App extends Component {
//   // Reactのコンポーネントを初期化
//   constructor(props) {
//     // クラスコンポーネントを使うときのお決まりの書き方
//     super(props)
//     this.state = {
//       // クラスでは、コンストラクタ内で、this.stateの初期値をセット
//       // stateを使うには初期化が必要
//       count: 0
//     }
//   }
//   // クラスコンポーネントでは必ずrenderが必要
//   render() {
//     // returnの中にJSXを書く
//     return (
//       <React.Fragment>
//         <p>現在の数字は {this.state.count} です</p>
//           {/*ボタンをクリックした時に、this.setState()を呼ぶことでcountステートを更新 */}
//           {/* このクラスのstateのcount */}
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>+ 1</button>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>- 1</button>
//         <button onClick={() => this.setState({ count: 0 })}>0</button>
//       </React.Fragment>
//     )
//   }
// }

// state 関数コンポーネントを使う

const App = () => {
// count という名前の state 変数を宣言、初期値 0 をセット
// これがフック。
const [count, setCount] = useState(0)
  return (
    <>
      <p>現在の数字は{count}です!</p>
      {/* setCount()は、countを更新するための関数。countを引数で受け取ることも出来る */}
      {/* <button onClick={() => setCount(count + 1)}>+ 1</button> */}
      <button onClick={() => setCount(prevState => prevState + 1)}>+ 1</button>
      {/* <button onClick={() => setCount(count - 1)}>- 1</button> */}
      <button onClick={() => setCount(prevState => prevState - 1)}>- 1</button>
      <button onClick={() => setCount(0)}>0</button>
    </>
  )
}

export default App;
