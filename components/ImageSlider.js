const React = require('react');

class ImageSlider extends React.Component{
  constructor(props) {
  super();

  this.state = {
    currentSlideIndex: 0
  };
}

  render(){

    return(
    <div className="image-slider" ><h1>{'I am on slide '+ this.state.currentSlideIndex}</h1></div>

    )

  }

}

module.exports=ImageSlider
