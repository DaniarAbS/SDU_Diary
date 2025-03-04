import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  const ShowHeader = () => {
    setShowHeader(true);
  };

  const CloseHeader = () => {
    setShowHeader(false);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user_data'));
    console.log('storedData', storedData);

    if (storedData) {
      setData(storedData);
    }
  }, []);

  console.log('data', data);

  return (
    <div style={{ width: '100%', position: 'absolute', top: '0', left: '0' }}>
      {!showHeader ? (
        <div className={styles.collapse} id="navbarHeader">
          <div className="container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-x-lg"
              color="white"
              viewBox="0 0 16 16"
              onClick={ShowHeader}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            <div className="row">
              <div className="col-sm py-4">
                <ul
                  className={`${styles.hidden_list} list-unstyled d-flex flex-column align-items-center`}
                >
                  <li>
                    <Link to="/" className="text-white text-decoration-none">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-white text-decoration-none">
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-decoration-none">
                      SDU ALUMNI
                    </Link>
                  </li>
                  <li>
                    <Link to="/clubs" className="text-white text-decoration-none">
                      CLUBS
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-decoration-none">
                      CONTACTS
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white text-decoration-none">
                      QUOTE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.headerContainer} border-bottom`}>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
            <div className={`navbar ${styles.hidden_navbar} navbar-dark`}>
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={CloseHeader}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>

            <div className="d-flex">
              <Link to="/">
                <img className={styles.headerLogo} src="src/assets/Logo.png" alt="" />
              </Link>
            </div>

            <ul
              className={`nav ${styles.items_visibility} col-12 col-lg-auto mb-2 justify-content-center mb-md-0`}
            >
              <Link className="nav-link px-2 link-secondary" to="/">
                HOME
              </Link>
              <Link className="nav-link text-white" to="/about">
                ABOUT US
              </Link>
              <Link className="nav-link text-white" to="/sdu_alumni">
                SDU ALUMNI
              </Link>
              <Link className="nav-link text-white" to="/clubs">
                CLUBS
              </Link>
              <Link className="nav-link text-white" to="/contacts">
                CONTACTS
              </Link>
              <Link className="nav-link text-white" to="/quote">
                QUOTE
              </Link>
            </ul>

            <div className={`${styles.signSearch} text-end`}>
              <form className={`${styles.search_form}`} role="search">
                <button type="button" className={`btn ${styles.btn_search_icon}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`${styles.bi} bi-search`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>

                <input
                  type="search"
                  className={`form-control ${styles.search_input}`}
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              <div>
                {data ? (
                  <div>
                    <Link to="/adminPage" className={styles.email}>
                      {data.email}
                    </Link>
                  </div>
                ) : (
                  <Link style={{ textDecoration: 'none', color: 'white', margin: '0' }} to="/sign">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
