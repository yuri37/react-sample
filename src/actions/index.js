// 他のファイルでも使えるようにexportして宣言
export const COUNTPLUS = 'countPlus'
export const COUNTMINUS = 'countMinus'

// ActionCreator(Actionオブジェクトを返却する関数)を定義

export const countPlus = () => ({
  type: COUNTPLUS
})
 
export const countMinus = () => ({
  type: COUNTMINUS
})

