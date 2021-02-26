import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Balance from "./Balance";
import Recent from "./Recent";
import monica from "../assets/monica.jpg";
import joseph from "../assets/joseph.jpg";
import sofia from "../assets/sofia.jpg";

const Transaction = () => {
  return (
    <div className="transaction">
      <h3 className="transaction--color">Quick transaction</h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="carousel"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="slider__mg__left"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="slider__box__manual">
          <div>
            <i class="far fa-address-card manual__logo"></i>
            <p className="manual__text">Manual</p>
          </div>
        </div>
        <div className="slider__box">
          <div>
            <img className="profile__pic" src={monica} alt="placeholder" />
            <p className="manual__text">Monica</p>
          </div>
        </div>
        <div className="slider__box">
          <div>
            <img className="profile__pic" src={joseph} alt="placeholder" />
            <p className="manual__text">Joseph</p>
          </div>
        </div>
        <div className="slider__box">
          <div>
            <img className="profile__pic" src={sofia} alt="placeholder" />
            <p className="manual__text">Sofia</p>
          </div>
        </div>
      </Carousel>
      <Balance />
      <Recent />
    </div>
  );
};

export default Transaction;
