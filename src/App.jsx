import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/img/logo.png';
import main1 from './assets/img/service-hero1.webp';
import main2 from './assets/img/service-hero2.webp';
import main3 from './assets/img/service-hero3.webp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent p-0 fixed-top sm-fixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ width: '250px' }}>
            <img src={logo} alt="Logo" className="img-fluid w-100" />
          </a>
        </div>
      </nav>

      <div className="main p-0">
        <div className="element-contain">
          <div className="most-left">
            <div className="left-inner-container">
              <div className="img-container">
                <img src={main1} alt="Service 1" />
              </div>
            </div>
            <div className="bottom-inner">
              <div className="single-img">
                <img src={main3} alt="Service 3" />
              </div>
            </div>
          </div>

          <div className="center">
            <div className="main-title">
              <h2 className="title mb-2">
                Digital <span style={{ color: '#D60000' }}>Solution</span>
              </h2>
            </div>
            <div className="main-desc">
              <div className="left">
                <div className="divider"></div>
              </div>
              <div className="text ">
                <p className='mb-5'>
                  At Brannovate, we offer a comprehensive suite of digital
                  marketing and creative services designed to elevate your brand,
                  engage your audience, and drive measurable results.
                </p>
              </div>
            </div>
          </div>

          <div className="most-right">
            <div className="single-img">
              <img src={main2} alt="Service 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;