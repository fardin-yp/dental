import Tooth from '../../../public/uploads/Tooth.png'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import Image1 from '../../../public/uploads/image1.jpeg'
import Image2 from '../../../public/uploads/image2.jpg'
import Image3 from '../../../public/uploads/image3.jpg'
import Image4 from '../../../public/uploads/image4.jpg'

const first = () => {

    var settings = {
        dots:false,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
  };
    return (
        <div className="first-con">
          <div className="first-left">
            <div className="slider">
            <Slider {...settings}>
               <img src='/uploads/image1.jpeg' />
               <img src='/uploads/image2.jpg'  />
               <img src='/uploads/image3.jpg'  />
               <img src='/uploads/image4.jpg'  />
           </Slider>
            </div>
          </div>

            <div className="first-right">
              <Image src={Tooth} width={300} height={350} />
              <div className="title">
              <h1>کلینیک تخصصی سامان</h1>
              <p>ارائه دهنده تمامی خدمات زیبایی و درمانی در  مجرب ترین کلینیک ایران</p>
               <div>
                 <a href="/jghetr"> مشاوره </a> 
                 <a href="/gew" style={{backgroundColor:"#0d2040"}}> نوبت گیری </a>
               </div>
              </div>
            </div>
        </div>
    )
}

export default first
