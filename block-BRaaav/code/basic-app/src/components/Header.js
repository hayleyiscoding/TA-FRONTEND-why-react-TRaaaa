import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Header() {
  return (
    <>
      <header className='navbar'>
        <div className='container flex'>
          <div className='flex'>
            <a className='brand' href={"#1"}>
              <strong>Hydro</strong>
            </a>
            <nav>
              <ul className='flex nav-menu nav-menu-primary'>
                <li>
                  <a href='#1'>Home</a>
                </li>
                <li>
                  <a href='#1'>About</a>
                </li>
                <li>
                  <a href='#1'>Blog</a>
                </li>
                <li>
                  <a href='#1'>Our Work</a>
                </li>
                <li>
                  <a href='#1'>Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul className='flex nav-menu nav-menu-secondary'>
              <li className='social-media-item'>
                <a href='#1'>
                  <FaFacebookSquare />
                </a>
              </li>
              <li className='social-media-item'>
                <a href='#1'>
                  <FaTwitterSquare />
                </a>
              </li>
              <li className='social-media-item'>
                <a href='#1'>
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a className='btn btn-primary' href='#1'>
                  {" "}
                  Sign in / Join{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className='hero'>
        <div className='container flex'>
          <div className='flex-48 hero-content'>
            <h1 className='hero-heading'>
              We make beautiful websites for all people
            </h1>
            <div className='flex justify-start'>
              <a className='btn btn-secondary' href='#1'>
                Start a project
              </a>
              <p className='enquiry'>
                CALL US (+66) 010-020-0340 <br />
                for any enquiry
              </p>
            </div>
          </div>
          <figure className='flex-48'>
            <iframe
              style={{ width: "100%", height: "400px" }}
              src='https://www.youtube.com/embed/AqcjdkPMPJA'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              title='video'
            ></iframe>
          </figure>
        </div>
      </section>
    </>
  );
}

export default Header;
