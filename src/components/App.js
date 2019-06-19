import React from 'react'

import SongList from './SongList'
import SongDetail from './SongDetail'
import ArtistDetail from './ArtistDetail'

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div>
                    <SongList/>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <SongDetail/>
                    <ArtistDetail/>
                </div>
            </div>
        )
    }
}

export default App