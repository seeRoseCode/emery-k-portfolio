import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class ImageCard extends Component {
  render(){
    return(
      <div className="indiv">
          <Image src={this.props.img} size="medium" className="image-card" fluid/>
      </div>
    )
  }
}


export default ImageCard;
