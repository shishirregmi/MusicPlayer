import React from 'react'

const ArtistLatestReleaseSingle = () => {
  return (
    <div className="latest-release">
            <div className="latest-release__art">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
                alt="When It's Dark Out"
              />
            </div>

            <div className="latest-release__song">
              <div className="latest-release__song__title">
                Drifting (Track Commentary)
              </div>

              <div className="latest-release__song__date">
                <span className="day">4</span>

                <span className="month">December</span>

                <span className="year">2015</span>
              </div>
            </div>
          </div>
  )
}

export default ArtistLatestReleaseSingle