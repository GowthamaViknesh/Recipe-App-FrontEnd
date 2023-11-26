import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='container mt-5'>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
          <p className='col-md-4 mb-0 text-body-secondary'>
            © Fiery Company, Inc
          </p>

          <Link
            href='/'
            className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'
          >
            <FontAwesomeIcon icon={faCookieBite} style={{ fontSize: '70px' }} />
          </Link>

          <ul className='nav col-md-4 justify-content-end'>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-body-secondary'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-body-secondary'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-body-secondary'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-body-secondary'>
                FAQs
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-body-secondary'>
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;