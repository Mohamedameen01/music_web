export { 
    fetchSongRequest,
    fetchSongSuccess,
    fetchSongFailure,
    fetchSongs,
    playPause,
    setActiveSong
} from "./songs/songActions";

export const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  headers: {
    'X-RapidAPI-Key': 'e60a4d344amsh48fcd881e00c07bp134c2fjsn773ad6911989',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

