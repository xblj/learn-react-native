export const PUSH_PAGE = 'PUSH_PAGE';
export const CHANGE_DATA = 'CHANGE_DATA';
export const SET_CUR_ID = 'SET_CUR_ID';
export const SET_REQUEST = 'SET_REQUEST';

export function fetchData(pageId) {
  return function (dispatch) {
    dispatch(setRequest(pageId, 'start'));
    setTimeout(() => {
      dispatch(pushPage({ pageId, data: Date.now(), loading: false }));
      dispatch(setRequest(pageId, 'end'));
    }, 2000);
  }
}

/**
 * 
 * 更改页面数据时尽量采用传入id的方式，而不是直接取store里面curId,因为curId更新可能会有延迟，会在页面
 * 完全聚焦时才会更改
 * @param {number|string} id 页面id
 * @param {string} status 请求状态 start|end
 */
export function setRequest(id, status) {
  return { type: SET_REQUEST, id, status }
}

export function pushPage({ pageId: id, data, loading }) {
  return { type: PUSH_PAGE, payload: { id, data, loading } };
}

/**
 * 这里没有从页面传id过来，是因为这里更改页面数据是用户的点击行为，用户都能点击了，所以页面肯定已经聚焦
 * 所以可以从store中去curId
 * @param {string} data 
 */
export function changeData(data) {
  return { type: CHANGE_DATA, data };
}

export function setCurId(id) {
  return { type: SET_CUR_ID, id }
}