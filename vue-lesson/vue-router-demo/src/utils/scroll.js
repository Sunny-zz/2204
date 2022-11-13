// 滚动条顶部的距离
const  getWindowScrollTop = function () {
  return document.documentElement.scrollTop
}
// 文档的高度
const getDocumentHeight = function () {
  return document.documentElement.scrollHeight
}
// 窗口的高度
const getWindowScrollHeight = function () {
  return document.documentElement.clientHeight
}

export {getDocumentHeight, getWindowScrollHeight, getWindowScrollTop}
