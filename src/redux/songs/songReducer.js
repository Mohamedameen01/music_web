import { 
  FETCH_SONG_FAILURE,
  FETCH_SONG_REQUEST,
  FETCH_SONG_SUCCESS, 
  PLAY_PAUSE_SONG,
  SET_ACTIVE_SONG
} from "./songTypes"

const initialState = {
    loading: false,
    songs: [],
    error: '',
    isActive: false,
    isPlaying: false,
    activeSong: {}
}

const songReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SONG_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SONG_SUCCESS:
      return {
        loading: false,
        songs: action.payload,
        error: ''
      }
    case FETCH_SONG_FAILURE:
      return {
        loading: false,
        songs: [],
        error: action.payload
      }
    case PLAY_PAUSE_SONG:
      return {
        ...state,
        isPlaying: action.payload
      }
    case SET_ACTIVE_SONG:
      return {
        ...state,
        activeSong: action.payload
      }
    default: return state    
  }
}

export default songReducer;