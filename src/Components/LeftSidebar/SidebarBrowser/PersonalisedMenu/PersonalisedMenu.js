import React from 'react'

const PersonalisedMenu = () => {
  return (
    <div className="navigation__list">
    <div
      className="navigation__list__header"
      role="button"
      data-toggle="collapse"
      href="#yourMusic"
      aria-expanded="true"
      aria-controls="yourMusic"
    >
      Your Music
    </div>

    <div className="collapse in" id="yourMusic">
      <a href="#" className="navigation__list__item">
        <i className="ion-headphone"></i>
        <span>Songs</span>
      </a>

      <a href="#" className="navigation__list__item">
        <i className="ion-ios-musical-notes"></i>
        <span>Albums</span>
      </a>

      <a href="#" className="navigation__list__item">
        <i className="ion-person"></i>
        <span>Artists</span>
      </a>

      <a href="#" className="navigation__list__item">
        <i className="ion-document"></i>
        <span>Local Files</span>
      </a>
    </div>
  </div>
  )
}

export default PersonalisedMenu