import React from 'react'

//import function selectSong dari actions
import {selectSong} from '../actions/index.js'
import {selectArtist} from '../actions/index.js'

//redux yang membuat STOREnya, react-redux yang menghubungkan antara react dengan redux
import {connect} from 'react-redux'



class SongList extends React.Component{

    showTitle(){
        var judul = this.props.lagu.map((val)=>{
            return(
                //key itu membuat setiap data menjadi unik
                <div key={val.title} className="p-3">
                    <div className="d-inline pl-5">
                        {val.title}
                    </div>
                    <div className="d-inline float-right pr-5">
                        <button className="btn btn-md btn-outline-primary mr-2" onClick={()=>this.props.selectSong(val)}>Select Song</button>
                        <button className="btn btn-md btn-outline-primary" onClick={()=>this.props.selectArtist(val)}>Select Artist</button>
                    </div>
                </div>
            )
        })
        return judul
    }

    render(){
        return(
            <div>
                {this.showTitle()}
            </div>
        )
    }
}

//ini untuk mengubah data yang dari State menjadi property si SongList
//hal ini karena, component SongList.js akan mengambil data dari State(ini dapat diakses karena store dari redux) yang sudah disediakan dari app.js(main dari SongList), dan reducer(tempat datanya berada)
//(state) itu contentnya adalah 1 kotak state yang dari index.js
const mapStateToProps = (state) => {
    return{
        //cara akses lagunya adalah dengan cara this.props.lagu
        lagu:state.songs
    }
}

//yang kanan itu file dari sini yang mau di export, dan yang kiri itu function2 yang mau di connect dengan yang lain
export default connect(mapStateToProps, {selectSong,selectArtist})(SongList)