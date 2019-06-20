import React from 'react'
import { connect } from 'react-redux'

class SongDetail extends React.Component{
    showSongDetail(){
        if(this.props.selectSong === null){
            return(
                <div>
                </div>
            )
        } else{
            return(
                <div>
                    <div>
                        <b>Title: </b>{this.props.selectSong.title}
                    </div>
                    <div>
                        <b>Duration: </b>{this.props.selectSong.duration}
                    </div>
                </div>
            )
        }
    }
    
    render(){
        return(
            <div className="col-6 col-xs-12">
                <h1 className="display-1">Select Songs</h1>
                {this.showSongDetail()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        selectSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)