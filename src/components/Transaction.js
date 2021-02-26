import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Balance from "./Balance";
import Recent from "./Recent";
const Transaction = () => {
  return (
    <div className="transaction">
      <h3>Quick transaction</h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 1024,
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
        <div className="slider__box slider__mg__left">
          <div>
            <img src="https://via.placeholder.com/50x50" alt="placeholder" />
            <p className="manual__text">Monica. A</p>
          </div>
        </div>
        <div className="slider__box slider__mg__left">
          <div>
            <img src="https://via.placeholder.com/50x50" alt="placeholder" />
            <p className="manual__text">Monica. A</p>
          </div>
        </div>
        <div className="slider__box slider__mg__left">
          <div>
            <img src="https://via.placeholder.com/50x50" alt="placeholder" />
            <p className="manual__text">Monica. A</p>
          </div>
        </div>
      </Carousel>
      <Balance />
      <Recent />
    </div>
  );
};

export default Transaction;
