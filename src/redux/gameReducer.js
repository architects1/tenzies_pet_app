import { START_GAME } from "./types";

const initialState = {
  isGameStarted : false
}


const gameReducer = (state = initialState, action) => {
  switch(action.type){
      case START_GAME : {
        return {
          ...state,
          isGameStarted : action.payload
        }
      }

      default : 
        return state;
    }
}

export default gameReducer