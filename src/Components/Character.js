import React, { useState } from 'react'
import './character.css'

import { BsDownload } from 'react-icons/bs'

function Character({name, sounds, soundNames}) {
  const [audio] = useState(new Audio());

  const handleAudioPlay = (e) => {
    audio.src = e.target.value
    audio.play()
  }

  return (
    <div className="SoundsCon">
      <div className="NameCon">
          <h2>{name}</h2>
      </div>
      <div className="Sounds">
        {
          sounds.map((sounds, index) => {
            return <div className="SoundDownloadCon">
            <button className="SoundsBtn" value={sounds} key={index} onClick={handleAudioPlay}>{soundNames[index]}</button>
            <a href={sounds} className="DownloadCon" key={index} download > <BsDownload/> </a>
            </div>
          })
        }
        {sounds.length === 0 && <p>No Sounds Available for <span>{name}</span></p>}
      </div>
    </div>
  )
}

export default Character