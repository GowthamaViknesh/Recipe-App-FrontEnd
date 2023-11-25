import Banner from '../assets/opening Banner.png';
import PromotionBanner from '../assets/PromotionBanner.png';
import GrandBanner from '../assets/GrandBanner.png';
const HomePage = () => {
  return (
    <>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
        data-bs-interval='5000'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={Banner} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={PromotionBanner} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={GrandBanner} className='d-block w-100' alt='...' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
};

export default HomePage;
