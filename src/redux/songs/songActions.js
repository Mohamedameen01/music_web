import axios from "axios"
import { 
    FETCH_SONG_FAILURE,
    FETCH_SONG_REQUEST,
    FETCH_SONG_SUCCESS,
    PLAY_NEXT_SONG,
    PLAY_PAUSE_SONG,
    PLAY_PREV_SONG,
    SET_ACTIVE_SONG,
    
} from "./songTypes"
import {options} from '../index'

export const fetchSongRequest = () => {
  return {
    type: FETCH_SONG_REQUEST
  }
}

export const fetchSongSuccess = (songs) => {
  return {
    type: FETCH_SONG_SUCCESS,
    payload: songs
  }
}

export const fetchSongFailure = (error) => {
  return {
    type: FETCH_SONG_FAILURE,
    payload:error
  }
}

export const playPause = (status) => {
  return {
    type: PLAY_PAUSE_SONG,
    payload: status
  }
}

export const setActiveSong = ({song, i}) => {
  return {
    type: SET_ACTIVE_SONG,
    payload: {
        song,
        i
    }
  }
}

export const playNextSong = (i) => {
  return {
    type: PLAY_NEXT_SONG,
    payload: i
  }
}

export const playPrevSong = (i) => {
    return {
      type: PLAY_PREV_SONG,
      payload: i
    }
}

export const fetchSongs = () => {
  return (dispatch) => {
    dispatch(fetchSongRequest())
    axios.request(options)
    .then(response => {
      console.log(response.data)
      dispatch(fetchSongSuccess(response.data.tracks))
    })
    .catch(error => {
      console.error(error);
      dispatch(fetchSongFailure(error))
    });
  }
}