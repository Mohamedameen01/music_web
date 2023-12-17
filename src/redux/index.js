export { 
    fetchSongRequest,
    fetchSongSuccess,
    fetchSongFailure,
    fetchSongs
} from "./songs/songActions";

export const options = {
    method: 'GET',
    url: 'https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world',
    headers: {
      'X-RapidAPI-Key': 'e60a4d344amsh48fcd881e00c07bp134c2fjsn773ad6911989',
      'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
    }
};
