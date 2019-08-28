import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class ImageCard extends Component {
  render(){
    return(
      <div className="indiv image-card mover">
          <Image src={this.props.img} size="medium" className="image-card"/>
      </div>
    )
  }
}


export default ImageCard;
