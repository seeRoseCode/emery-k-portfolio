import React, { Component } from 'react'
import { Image, Container } from 'semantic-ui-react'
import mainImage from '../../images/emery/main.jpg'

class HomeContainer extends Component {

  render(){
    console.log(mainImage)
    return(
      <Container>
        <Image src={mainImage} size='small'/>
      </Container>
    )
  }

}

export default HomeContainer;
