//menggabungkan semua REDUCERS menjadi 1
import {combineReducers} from 'redux'

//Reducer ini adalah yang divisi2 yang akan menerima form data dari Dispatch (officer (bank))

//REDUCER : pada dasarnya adalah sebuah function

//songsReducer adalah reducer untuk DATA
//ingat di dalam ilustrasi bahwa nanti REDUCER akan menerima 2 hal, yaitu ACTION dan DATA LAMA
//ini Reducer untuk generate data awal
const songsReducer = () => {
    return [
        {
            title: 'Forever Young',
            artist: 'Black Pink',
            duration: '4:05',
            personnel: ['Lisa', 'Kim Jennie', 'Kim Ji', 'Rose']
        },
        {
            title: 'Lucid Dream',
            artist: "Monogram" ,
            duration: '3:09',
            personnel: ["Kevin", "Riwon"] 
        },
        {
            title: 'Let\'s not fall in love',
            artist: "Big-Bang" ,
            duration: '4:20',
            personnel: ["Seungri", "Taeyang", "Daesung", "G-Dragon", "T.O.P"]
        },
        {
            title: 'Save Me',
            artist: "BTS" ,
            duration: '2:12',
            personnel: ["V", "Jung-Kook", "Ji-Min", "Suga", "Jin", "RM", "J-Hope"]
        },
        {
            title: 'Blood, Sweat, and Tears',
            artist: "Bangtan Boys" ,
            duration: '5:15',
            personnel: ["V", "Jung-Kook", "Ji-Min", "Suga", "Jin", "RM", "J-Hope"]
        }
    ]
}

//ini Reducer untuk handle pemilihan lagu (select song)
//ini adalah function untuk memberikan REDUCER sebuah ACTION dan DATA LAMA
const selectSong = (data,action) => {
    if(action.type == 'SONG_SELECTED'){
        return action.payload
    }

    return data
}

//synthax nya adalah combineReducers akan menerima sebuah object
//combineReducers adalah object storagenya. dimana nanti akan menghasilkan sebuah STATE
//export default combineReducers akan mempermudah combineReducers untuk di export langsung
export default combineReducers({
    //synthax adalah key(nama tempat penyimpanan) : namaReducer
    songs:songsReducer
})