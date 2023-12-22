import { 
  FETCH_SONG_FAILURE,
  FETCH_SONG_REQUEST,
  FETCH_SONG_SUCCESS, 
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG, 
  PLAY_PAUSE_SONG,
  SET_ACTIVE_SONG
} from "./songTypes"

const initialState = {
  loading: false,
  songs: [],
  error: '',
  isActive: false,
  isPlaying: false,
  activeSong: {},
  currentIndex: 0
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
        activeSong: action.payload.song,
        isActive: true,
        currentIndex: action.payload.i
      }
    case PLAY_NEXT_SONG:
      return {
        ...state,
        activeSong: state.songs[action.payload],
        currentIndex: action.payload,
        isActive: true
      }
    case PLAY_PREV_SONG:
      return {
        ...state,
        activeSong: state.songs[action.payload],
        currentIndex: action.payload,
        isActive: true
      }
    default: return state    
  }
}

export default songReducer;