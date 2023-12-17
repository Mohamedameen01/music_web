import axios from "axios"
import { 
    FETCH_SONG_FAILURE,
    FETCH_SONG_REQUEST,
    FETCH_SONG_SUCCESS
} from "./songTypes"
import {options} from '../index'

export const fetchSongRequest = () => {
    return{
        type: FETCH_SONG_REQUEST
    }
}

export const fetchSongSuccess = (songs) => {
    return{
        type: FETCH_SONG_SUCCESS,
        payload: songs
    }
}

export const fetchSongFailure = (error) => {
    return{
        type: FETCH_SONG_FAILURE,
        payload:error
    }
}

export const fetchSongs = () => {
    return (dispatch) => {
      dispatch(fetchSongRequest())
      axios.request(options)
      .then(response => {
        console.log(response.data);
        dispatch(fetchSongSuccess(response.data))
      })
      .catch(error => {
        console.error(error);
        dispatch(fetchSongFailure(error))
      });
    }
}