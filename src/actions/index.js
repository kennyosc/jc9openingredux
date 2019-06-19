//ACTION CREATOR

export const selectSong = (song) => {
    return{
        type: 'SONG_SELECTED',
        //yang akan dimasukkan ke payload adalah sebuah object dimana disini adalah data SONG dari reducer
        payload: song
    }
}

export const selectArtist = (artist) => {
    return{
        type: 'ARTIST_SELECTED',
        //yang akan dimasukkan ke payload adalah sebuah object dimana disini adalah data SONG dari reducer
        payload: artist
    }
}
