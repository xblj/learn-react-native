export const PUSH_PAGE = 'PUSH_PAGE';
export const CHANGE_DATA = 'CHANGE_DATA';
export const SET_CUR_ID = 'SET_CUR_ID';
export const SET_REQUEST = 'SET_REQUEST';

export function fetchData(pageId) {
  return function (dispatch) {
    dispatch(setRequest('start'));
    setTimeout(() => {
      dispatch(pushPage({ pageId, data: Date.now(), loading: false }));
      dispatch(setRequest('end'));
    }, 2000);
  }
}

export function setRequest(status) {
  return { type: SET_REQUEST, status }
}

export function pushPage({ pageId: id, data, loading }) {
  return { type: PUSH_PAGE, payload: { id, data, loading } };
}

export function changeData(data) {
  return { type: CHANGE_DATA, data };
}

export function setCurId(id) {
  return { type: SET_CUR_ID, id }
}