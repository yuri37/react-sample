import { COUNTPLUS, COUNTMINUS } from '../actions'

const initialState = { val: 0 }
// 一番最初にstateが呼ばれるタイミングではstateは空(何も入っていない:undefined)なので、デフォルト引数が呼ばれる必要がある。それがinitialState(名前はなんでもいい)。
// 2回目以降はinitialStateではない
// reduxはまとめてstateを定義するところがないからここで定義？

const switchEvents = (state = initialState, action) => {
  switch (action.type) {
    case COUNTPLUS:
      return { val: state.val + 1 }
    case COUNTMINUS:
      return { val: state.val - 1 }
    default:
      return state
  }
}

export default switchEvents