import { SAVE_POSITION } from '../actons/actionTypes';

const initialState = {
  positions: [
    //{id: "123", "title":"456465465464654","department":"65465465465","description":"hghgjhgjhgj","status":"default","date":"2020-03-06"}
  ],
};

export default function positionsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_POSITION:
      return {
        ...state, positions: [...state.positions, action.position],
      };
    default:
      return state;
  }
}
