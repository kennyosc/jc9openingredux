import React from 'react'
import { connect } from 'react-redux';

class ArtistDetail extends React.Component{
    showArtist(){
        return(
            <div>
                <b>Artist: </b>{this.props.selectArtist.artist}
            </div>
        )
    }
    
    render(){
        return(
            <div className="col-6 col-xs-12">
                <h1 className="display-1">Select Artist</h1>
                {this.showArtist()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        selectArtist : state.selectedArtist
    }
}

export default connect(mapStateToProps)(ArtistDetail)