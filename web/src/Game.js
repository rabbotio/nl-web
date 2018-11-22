import React, { Component } from 'react'
import * as PIXI from 'pixi.js'

import CharacterScene from './scenes/CharacterScene'

class Game extends Component {
  constructor (props) {
    super(props)
    this.duck = null
    this.pixi_cnt = null
    this.app = new PIXI.Application({
      width: 600,
      height: 600,
      transparent: false
    })
  }

  setup = () => {
    this.init()
  }

  onClick = e => {
    console.log('onClick:', e.target)
    e.target.scale.x *= 1.25
    e.target.scale.y *= 1.25
  }

  init = async () => {
    const scene = new CharacterScene(this.app)
  }

  updatePixiCnt = element => {
    // the element is the DOM object that we will use as container to add pixi stage(canvas)
    this.pixi_cnt = element
    // now we are adding the application to the DOM element which we got from the Ref.
    if (this.pixi_cnt && this.pixi_cnt.children.length <= 0) {
      this.pixi_cnt.appendChild(this.app.view)
      // The setup function is a custom function that we created to add the sprites. We will this below
      this.setup()
    }
  }

  render () {
    return <div ref={this.updatePixiCnt} />
  }
}

export default Game