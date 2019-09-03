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
import img11 from '../../images/Stephen_s Shoot/11.jpg'
import img12 from '../../images/Stephen_s Shoot/12.jpg'
import img13 from '../../images/Stephen_s Shoot/13.jpg'
import img14 from '../../images/Stephen_s Shoot/14.jpg'
import img15 from '../../images/Stephen_s Shoot/15.jpg'
import img16 from '../../images/Stephen_s Shoot/16.jpg'
import img17 from '../../images/Sky_s Photo Shoot/17.jpg'
import img18 from '../../images/Sky_s Photo Shoot/18.jpg'
import img19 from '../../images/Sky_s Photo Shoot/19.jpg'
import img20 from '../../images/Sky_s Photo Shoot/20.jpg'
import img21 from '../../images/Sky_s Photo Shoot/21.jpg'
import img22 from '../../images/Sky_s Photo Shoot/22.jpg'




class PortfolioContainer extends Component {

  render(){
    let cat1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 ]
    let cat2 = [img11, img12, img13, img14, img16]
    let cat3 = [img17, img18, img19, img20, img21, img22]
    return(
      <div>
      <h1>CATEGORY1</h1>
        <div className="scrolling-wrapper">
            {cat1.map((img) => <ImageCard img={img} />)}
        </div>
        <h1>CATEGORY2</h1>
        <div className="scrolling-wrapper">
          {cat2.map((img) => <ImageCard img={img} />)}
        </div>
        <h1>CATEGORY3</h1>
        <div className="scrolling-wrapper">
          {cat3.map((img) => <ImageCard img={img} />)}
        </div>
      </div>
    )
  }

}

export default PortfolioContainer;
