import React from 'react'

const FeaturedArtists = () => {
  return (
    <div className="overview__related">
    <div className="section-title">Featured Artists</div>

    <div className="related-artists">
      <a href="#" className="related-artist">
        <span className="related-artist__img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg"
            alt="Hoodie Allen"
          />
        </span>

        <span className="related-artist__name">Hoodie Allen</span>
      </a>

      <a href="#" className="related-artist">
        <span className="related-artist__img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg"
            alt="Mike Stud"
          />
        </span>

        <span className="related-artist__name">Mike Stud</span>
      </a>

      <a href="#" className="related-artist">
        <span className="related-artist__img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg"
            alt="Drake"
          />
        </span>

        <span className="related-artist__name">Drake</span>
      </a>

      <a href="#" className="related-artist">
        <span className="related-artist__img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg"
            alt="J. Cole"
          />
        </span>

        <span className="related-artist__name">J. Cole</span>
      </a>

      <a href="#" className="related-artist">
        <span className="related-artist__img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg"
            alt="Big Sean"
          />
        </span>

        <span className="related-artist__name">Big Sean</span>
      </a>

      <a href="#" className="related-artist">
        <span className="related-artist__img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg"
            alt="Wiz Khalifa"
          />
        </span>

        <span className="related-artist__name">Wiz Khalifa</span>
      </a>

      <a href="#" className="related-artist">
        <span className="related-artist__img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg"
            alt="Yonas"
          />
        </span>

        <span className="related-artist__name">Yonas</span>
      </a>
    </div>
  </div>
  )
}

export default FeaturedArtists