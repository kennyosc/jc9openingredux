import React from 'react'
//redux yang membuat STOREnya, react-redux yang menghubungkan antara react dengan redux
import {connect} from 'react-redux'

class SongList extends React.Component{
    pilihLagu = () => {
        return 
    }

    showTitle(){
        var judul = this.props.lagu.map((val)=>{
            return(
                //key itu membuat setiap data menjadi unik
                <div key={val.title} className="p-3">
                    <div className="d-inline pl-5">
                        {val.title}
                    </div>
                    <div className="d-inline float-right pr-5">
                        <button className="btn btn-md btn-outline-primary mr-2" onClick={this.pilihLagu}>Select Song</button>
                        <button className="btn btn-md btn-outline-primary">Select Artist</button>
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

export default connect(mapStateToProps)(SongList)