import React from 'react'
import ArtistLatestReleaseSingle from './ArtistLatestReleaseSingle/ArtistLatestReleaseSingle'
import ArtistPopularReleases from './ArtistPopularReleases/ArtistPopularReleases'

const ArtistLatestRelease = () => {
  return (
    <div className="overview__artist">
          <div className="section-title">Latest Release</div>

          <ArtistLatestReleaseSingle />

          <ArtistPopularReleases />

        </div>
  )
}

export default ArtistLatestRelease