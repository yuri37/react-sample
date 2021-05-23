// 結合するもの combineReducerを使うためにimport
import { combineReducers } from 'redux';
// 結合されるもの
import counter from './counter'

// combineReducerというものを使って他のreducerファイルを
// index.jsがまとめる形にしている
// 複数ある場合は[,]で区切る
export default combineReducers({counter})