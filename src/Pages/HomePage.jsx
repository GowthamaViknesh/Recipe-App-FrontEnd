import Banner from '../assets/opening Banner.png';
import PromotionBanner from '../assets/PromotionBanner.png';
import GrandBanner from '../assets/GrandBanner.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitchenSet, faTrophy } from '@fortawesome/free-solid-svg-icons';
const HomePage = () => {
  const [rec, setRec] = useState([]);

  const ShowRecepies = async () => {
    try {
      const data = await axios.get('/recpie/allrecpies');
      setRec(data.data);
    } catch (error) {
      toast('Something Went Wrong', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  useEffect(() => {
    ShowRecepies();
  }, []);

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
      <br />
      <div className='container mt-4'>
        <h1 className='text-center'>
          <FontAwesomeIcon icon={faTrophy} /> Top Recipes
        </h1>
        <div className='row mt-5'>
          {rec.map((item, index) => (
            <div className='col-md-3' key={index}>
              <div className='card'>
                <img
                  src={item.imageUrl}
                  alt={`Recipe ${index}`}
                  className='card-image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                  <a href='#' className='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='container mt-5'>
        <h3 className='text-center'>
          <FontAwesomeIcon icon={faKitchenSet} /> Recipes Creators
        </h3>
        <section class='articles'>
          <article>
            <div class='article-wrapper'>
              <figure>
                <img src='https://picsum.photos/id/1011/800/450' alt='' />
              </figure>
              <div class='article-body'>
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <a href='#' class='read-more'>
                  Read more{' '}
                  <span class='sr-only'>about this is some title</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='icon'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class='article-wrapper'>
              <figure>
                <img src='https://picsum.photos/id/1005/800/450' alt='' />
              </figure>
              <div class='article-body'>
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <a href='#' class='read-more'>
                  Read more{' '}
                  <span class='sr-only'>about this is some title</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='icon'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class='article-wrapper'>
              <figure>
                <img src='https://picsum.photos/id/103/800/450' alt='' />
              </figure>
              <div class='article-body'>
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <a href='#' class='read-more'>
                  Read more{' '}
                  <span class='sr-only'>about this is some title</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='icon'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default HomePage;
