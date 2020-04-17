
import React, { Component } from 'react'
import '../css/home.scss'

export default function Home () {
  return (
    <div className="home">
      <div className='main'>
        <div className='greeting'>
          <h1>hey, i’m haley.</h1>
          <h2>i’m a <span>frontend engineer</span> at blacklane.</h2>
        </div>
        <div className='get-excited'>
          <h3>i get excited about</h3>
          <div className='list'>
            <p>accessibility,</p>
            <p>react.js,</p>
            <p>html + css,</p>
            <p>sass,</p>
            <p>typescript,</p>
            <p>javascript,</p>
            <p>figma,</p>
            <p>npm,</p>
            <p>git,</p>
            <p>downshift,</p>
            <p>agile,</p>
            <p>svelte.js</p>
          </div>
        </div>
      </div>
      <div className='cta'>
        <a href="">see some of my work -></a>
      </div>
    </div>
  )
}