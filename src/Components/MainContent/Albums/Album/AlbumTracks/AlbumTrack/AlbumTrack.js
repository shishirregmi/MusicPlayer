import React from 'react'

const AlbumTrack = (props) => {
  return (
    <div className="track">
                  <div className="track__number">{props.track.id}</div>

                  <div className="track__added">
                    <i className="ion-checkmark-round added"></i>
                  </div>

                  <div className="track__title">{props.track.name}</div>

                  <div className="track__explicit">
                    {props.track.featured1 != null?  (<span className="label">{props.track.featured1}</span>) : null}
                    {props.track.featured2 != null?  (<span className="label">{props.track.featured2}</span>) : null}
                  </div>

                  <div className="track__length">
                  {props.track.duration / 3600 >= 1? Math.floor(props.track.duration / 3600)+ "0":null}
                  {props.track.duration / 60 < 10? "0":null}{Math.floor(props.track.duration / 60)}
                  :{props.track.duration % 60 < 10? "0":null}{Math.floor(props.track.duration % 60)}
                    </div>

                  <div className="track__popularity">
                    <i className="ion-arrow-graph-up-right"></i>
                  </div>
                </div>
  )
}

export default AlbumTrack