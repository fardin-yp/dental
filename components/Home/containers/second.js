import Slider from "react-slick"

const second = () => {

    var settings = {
        dots:true,
        slidesToShow:4,
        slidesToScroll:2,
        arrows:true,
        autoplay:true,
        autoplaySpeed:4500,
  };
    return (
        <div className="second-con">
            <h1>خدمات دندان پزشکی سامان</h1>
            <div className="Services">
                <div className="Services-con">
                    <div className="back">

                    </div>
                    <Slider pauseOnHover={false} {...settings}>
                      <a href="/ytre" className="s-card">
                        <img src={'/uploads/kids.jpg'} />
                        <p>خدمات تخصصی اطفال</p>
                      </a>
                      <a href="/545" className="s-card">
                        <img src={'/uploads/unnamed.jpg'} />
                        <p>مشاوره آنلاین با دندانپزشکان</p>
                      </a>
                      <a className="s-card">
                        <img src={'/uploads/beuty.jpg'} />
                        <p>خدمات تخصصی زیبایی</p>
                      </a>
                      <a className="s-card">
                        <img src={'/uploads/fak.jpg'} />
                        <p>خدمات تخصصی فک و صورت</p>
                      </a>
                      <a className="s-card">
                        <img src={'/uploads/bb.jpg'} />
                        <p>خدمات تخصصی فک و صورت</p>
                      </a>
                      <a className="s-card">
                        <img src={'/uploads/or.jpg'} />
                        <p>خدمات تخصصی اورتودنسی</p>
                      </a>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default second
