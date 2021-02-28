import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React,{ Component } from 'react';
import Image1 from "./CV2TWYpd-fs.jpg";
import Image2 from "./V4jeDiK-fh4.jpg";
import Image3 from "./ahxOyoXkBTI.jpg";
import Image4 from "./ix5qaeuUfXU.jpg";
import Image5 from "./oBHiOcQe9IY.jpg";


export default class MyCarousel extends Component {
  constructor() {
    super()
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
    <div>
      <input
        type="number"
        value={this.state.value}
        onChange={e => this.onChange(parseInt(e.target.value || 0))}
      />
      <Carousel
        value={this.state.value}
        onChange={this.onChange}
        slides={[
          (<img style={{ width: "250px"}} src={Image1} />),
          (<img style={{ width: "250px"}} src={Image2} />),
          (<img style={{ width: "250px"}} src={Image3} />),
        ]}
        plugins={[
          'arrows',
          'clickToChange'
        ]}
      />
    </div>
    );
  }
}