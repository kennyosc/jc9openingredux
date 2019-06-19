import React from 'react'
//redux yang membuat STOREnya, react-redux yang menghubungkan antara react dengan redux
import {connect} from 'react-redux'

class SongList extends React.Component{
    render(){
        return(
            <div>
                <h1>SongList Component</h1>
                {this.props.lagu.length}
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