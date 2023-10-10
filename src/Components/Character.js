import React, { useState } from 'react'
import './character.css'

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
          sounds.map((sound, index) => {
            return <button className="SoundsBtn" value={sound} key={index} onClick={handleAudioPlay}>{soundNames[index]}</button>
          })
        }
        {sounds.length === 0 && <p>No Sounds Available for <span>{name}</span></p>}
      </div>
    </div>
  )
}

export default Character