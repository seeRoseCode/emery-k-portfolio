import React, { Component } from 'react'
import ImageCard from '../ImageCard'
import img1 from '../../images/Vin_s Photo Shoot/1.jpg'
import img2 from '../../images/Vin_s Photo Shoot/2.jpg'
import img3 from '../../images/Vin_s Photo Shoot/3.jpg'
import img4 from '../../images/Vin_s Photo Shoot/4.jpg'
import img5 from '../../images/Vin_s Photo Shoot/5.jpg'
import img6 from '../../images/Vin_s Photo Shoot/6.jpg'
import img7 from '../../images/Vin_s Photo Shoot/7.jpg'
import img8 from '../../images/Vin_s Photo Shoot/8.jpg'
import img9 from '../../images/Vin_s Photo Shoot/9.jpg'
import img10 from '../../images/Vin_s Photo Shoot/10.jpg'


class PortfolioContainer extends Component {

  render(){
    let cat1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 ]
    let cat2 = []
    let cat3 = []
    return(
      <div>
        <div className="scrolling-wrapper images">
          CATEGORY1
            {cat1.map((img) => <ImageCard img={img} />)}
        </div>
        <div className="scrolling-wrapper images">
          <h1>CATEGORY2</h1>
          {cat2.map((img) => <ImageCard img={img} />)}
        </div>
        <div className="scrolling-wrapper">
          <h1>CATEGORY3</h1>
          {cat3.map((img) => <ImageCard img={img} />)}
        </div>
      </div>
    )
  }

}

export default PortfolioContainer;
