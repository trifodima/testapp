import {SAVE_POSITION} from './actionTypes';

export function savePositions(position) {
  return {
    type: SAVE_POSITION,
    position
  };
}
