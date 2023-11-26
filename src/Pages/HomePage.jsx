import Banner from '../assets/opening Banner.png';
import PromotionBanner from '../assets/PromotionBanner.png';
import GrandBanner from '../assets/GrandBanner.png';
import CookingVideo from '../assets/video.mp4';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faBowlFood,
  faBowlRice,
  faCookieBite,
  faKitchenSet,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

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
      <div className='container mt-5' style={{ marginBottom: '15px' }}>
        <h3 className='text-center'>
          <FontAwesomeIcon icon={faTrophy} /> Top Recipes
        </h3>
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
                  <h5 className='card-title text-center mt-2'>{item.name}</h5>
                  <Link to='/recepies' className='btn mt-4 mx-5'>
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='container rec-cont'>
        <h3 className='text-center'>
          <FontAwesomeIcon icon={faKitchenSet} /> Recipes Creators
        </h3>
        <div className='row' style={{ marginTop: '50px' }}>
          <div className='col-md-4'>
            <div className='card-container'>
              <div className='img-container'>
                <img
                  src='https://tajdining.com/uploads/chefs/small/53_small_2022_07_26_03_37_47.jpg'
                  alt=''
                />
              </div>
              <ul className='social-media'>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className='fa fa-facebook'
                      style={{ color: '#0866FF' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className='fa fa-twitter'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className='fa fa-google-plus'
                      style={{ color: '#E94B55' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faGooglePlus}
                      className='fa fa-linkedin'
                      style={{ color: '#D54D41' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className='fa fa-instagram'
                      style={{ color: '#0077B5' }}
                    />
                  </a>
                </li>
              </ul>
              <div className='user-info'>
                <h2>Aniket Singh</h2>
                <span>
                  <FontAwesomeIcon
                    icon={faCookieBite}
                    style={{ color: '#A9774B' }}
                  />{' '}
                  Junior Chef
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card-container'>
              <div className='img-container'>
                <img
                  src='https://img.freepik.com/premium-photo/handsome-chef-presenting-meal_107420-17688.jpg'
                  alt=''
                />
              </div>
              <ul className='social-media'>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className='fa fa-facebook'
                      style={{ color: '#0866FF' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className='fa fa-twitter'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className='fa fa-google-plus'
                      style={{ color: '#E94B55' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faGooglePlus}
                      className='fa fa-linkedin'
                      style={{ color: '#D54D41' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className='fa fa-instagram'
                      style={{ color: '#0077B5' }}
                    />
                  </a>
                </li>
              </ul>
              <div className='user-info'>
                <h2>Sam Jordan</h2>
                <span>
                  <FontAwesomeIcon
                    icon={faCookieBite}
                    style={{ color: '#A9774B' }}
                  />{' '}
                  Senior Chef
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card-container'>
              <div className='img-container'>
                <img
                  src='https://img.freepik.com/free-photo/medium-shot-chef-showing-approval_23-2148723254.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=ais'
                  alt=''
                />
              </div>
              <ul className='social-media'>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className='fa fa-facebook'
                      style={{ color: '#0866FF' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className='fa fa-twitter'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className='fa fa-google-plus'
                      style={{ color: '#E94B55' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faGooglePlus}
                      className='fa fa-linkedin'
                      style={{ color: '#D54D41' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className='fa fa-instagram'
                      style={{ color: '#0077B5' }}
                    />
                  </a>
                </li>
              </ul>
              <div className='user-info'>
                <h2>Andreson</h2>
                <span>
                  <FontAwesomeIcon
                    icon={faCookieBite}
                    style={{ color: '#A9774B' }}
                  />{' '}
                  Head Chief Chef
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container rec-cont'>
        <h3 className='text-center'>
          <FontAwesomeIcon icon={faBowlRice} />
          {'  '}
          Create your Own Recepie
        </h3>
        <div className='row'>
          <div className='col-md-6 video-container'>
            <video className='video-dope mt-5' autoPlay loop>
              <source src={CookingVideo} type='video/mp4'></source>
            </video>
          </div>
          <div className='col-md-6 video-container'>
            <h4 className='text-center text-cont'>
              Create a <FontAwesomeIcon icon={faBowlFood} /> Recpie on Own
            </h4>
            <p className='text-center'>
              You can create a own recpie and make a post on our website and
              gain follwers become a chef master{' '}
            </p>
            <h5 className='text-center'>
              <span>Dont Wait!!</span>
            </h5>
            <Link to='/login' className='text-center link'>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                style={{ marginTop: '4px', marginRight: '5px' }}
              />
              Create your Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
