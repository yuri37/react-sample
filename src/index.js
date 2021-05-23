import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// storeを作るために必要
import { Provider } from 'react-redux';
// storeがどこからでも（子コンポーネントからでも）アクセスできるために必要
import reducer from './reducers';
// reducerをcreateStoreの引数にするためimport
import './index.css';
import App from './components/App';
// App.jsのディレクトリを移動したので変更
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer)
// createStoreでstoreを作成し、作成したReducerを登録

ReactDOM.render(
  // <React.StrictMode>
  <Provider store = { store }>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
// storeのアクセスがどこからでも可能なように設定をしています。
// ルートの階層になっているAppコンポーネントをProvidorのstore属性でラップ(包む)してあげることで、
// それ以下のコンポーネントで利用できるようにしている

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
