import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Image1 from "./CV2TWYpd-fs.jpg";
import Image2 from "./V4jeDiK-fh4.jpg";
import Image3 from "./ahxOyoXkBTI.jpg";
import Image4 from "./ix5qaeuUfXU.jpg";
import Image5 from "./oBHiOcQe9IY.jpg";
import React from 'react'


const SimpleCarousel = props =>{
    return <div>
<Carousel
  slidesPerPage={1}
  arrows
  infinite
  autoPlay={5000}
  animationSpeed={1000}
  centered
>
  <img style={{ width: "250px"}} src={Image1} />
  <img style={{ width: "250px"}} src={Image2} />
  <img style={{ width: "250px"}} src={Image3} />
</Carousel>
    </div>
}
export default SimpleCarousel