import {
  faArrowAltCircleRight,
  faBowlFood,
  faBowlRice,
  faHome,
  faSearch,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <Link className='navbar-brand mx-4' to='/'>
            <FontAwesomeIcon icon={faBowlFood} className='fontIcons' /> Fiery
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <form className='d-flex search-form' role='search'>
            <input
              className='form-control search-text mx-5 me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn search-btn' type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <div
            className='collapse navbar-collapse mx-2'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-3 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  <FontAwesomeIcon icon={faHome} className='fontIcons' /> Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' href='#'>
                  <FontAwesomeIcon
                    icon={faBowlRice}
                    className='fontIcons'
                    style={{ marginRight: '4px' }}
                  />
                  Recepies
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' aria-disabled='true'>
                  <FontAwesomeIcon icon={faTrophy} className='fontIcons' /> Top
                  Recipes
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' to='/login'>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className='fontIcons'
                  />{' '}
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
