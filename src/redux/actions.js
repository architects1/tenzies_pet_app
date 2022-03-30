import { START_GAME } from "./types";

export function startGame(){
  return {
    type: START_GAME,
    payload: true
  }
}