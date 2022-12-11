import React from 'react'
import AddPlaylist from './AddPlaylist/AddPlaylist'
import NowPlaying from './NowPlaying/NowPlaying'
import SideBrowser from './SidebarBrowser/SideBrowser'

const LeftSidebar = () => {
  return (
    <div className="content__left">
          <SideBrowser />

          <AddPlaylist />

          <NowPlaying />
        </div>
  )
}

export default LeftSidebar