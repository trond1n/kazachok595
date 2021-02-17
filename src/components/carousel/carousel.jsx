import React, { Component } from "react";
import Image1 from "./CV2TWYpd-fs.jpg";
import Image2 from "./V4jeDiK-fh4.jpg";
import Image3 from "./ahxOyoXkBTI.jpg";
import Image4 from "./ix5qaeuUfXU.jpg";
import Image5 from "./oBHiOcQe9IY.jpg";
import Slider from "./Slider";

export default class ImageCarousel extends Component {
  state = {
    images: [Image1, Image2, Image3, Image4, Image5],
  };
  render() {
    return (
      <div style={{ width: '80%'}}>
        <div style={{ display: "flex", justifyContent: "space-between" }} />
        <Slider
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            adaptiveHeight: true,
          }}
        >
          {this.state.images.map((image, index) => (
            <div
              style={{ width: "80%", height: "400px", margin: "0 0.5em" }}
              key={index}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
