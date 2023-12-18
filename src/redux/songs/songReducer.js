import { 
  FETCH_SONG_FAILURE,
  FETCH_SONG_REQUEST,
  FETCH_SONG_SUCCESS 
} from "./songTypes"

const initialState = {
    loading: false,
    songs: [],
    error: ''
}

const songReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SONG_REQUEST:
      return{
        ...state,
        loading: true
      }
    case FETCH_SONG_SUCCESS:
      return{
        loading: false,
        songs: action.payload,
        error: ''
      }
    case FETCH_SONG_FAILURE:
      return{
        loading: false,
        songs: [],
        error: action.payload
      }
    default: return state    
  }
}

export default songReducer;