import { PUSH_PAGE, CHANGE_DATA, SET_CUR_ID, SET_REQUEST } from '../actions';

function changeData(store, data) {
  const { curId } = store;
  const newPageData = { ...store[curId], data };
  return Object.assign({}, store, { [curId]: newPageData })
}

function setRequestStatus(store, {id, status}) {
  const newPageData = { ...store[id], requestStatus: status };
  return Object.assign({}, store, { [id]: newPageData });
}

export function myView(state = {}, action) {
  switch (action.type) {
    case PUSH_PAGE:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    case CHANGE_DATA:
      return changeData(state, action.data);
    case SET_CUR_ID:
      return Object.assign({}, state, { curId: action.id });
    case SET_REQUEST:
      return setRequestStatus(state, action);
    default:
      return state;
  }
}