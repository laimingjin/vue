export const listsCounter = function ({ dispatch, state },list) {//list为调用increment方法所传的值
  dispatch('GETLIST', list)
}
export const increaseCounter = function ({ dispatch, state }) {
  dispatch('INCREASE', 1)
}
export const reduceCounter = function ({ dispatch, state }) {
  dispatch('REDUCE', 1)
}
