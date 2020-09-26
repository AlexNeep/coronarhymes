import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";

import AmazonBuy from "./images/amazon-button.png";
import corona_ryhmes_cover from "./images/Corona Times Rhymes - Cover.png";
import instagram_icon from "./images/instagram.svg";
import book from "./images/Corona Times Rhymes Book.png";
import charity from "./images/drs+wo+borders+logo.png";
import fb_icon from "./images/facebook - light Blue.svg";
import twitter_icon from "./images/twitter (1).svg";
import share_icon from "./images/plane.svg";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <section className="blue p-5">
          <div className="container">
            <div className="row">
              <div className="col-md text-center">
                <h1 className="hero-h1">Verses vs Corona</h1>
                <h2 className="hero-h2">
                  100% of profits are donated to help our fight against
                  Coronavirus
                </h2>
                <div className="mb-5">
                  <a href="#about">
                    <button className="yel-btn">Learn More</button>
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.amazon.co.uk/Corona-Times-Rhymes-Verses-ebook/dp/B086S9TZ9V/ref=sr_1_1?dchild=1&keywords=corona+times+rhymes&qid=1586168307&sr=8-1"
                  >
                    <img
                      className="hero-amazon-btn"
                      src={AmazonBuy}
                      alt="Buy on Amazon"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md text-center">
                <img
                  id="cover-img"
                  className="img-col"
                  src={corona_ryhmes_cover}
                  alt="Example of the book"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="white p-5">
          <div className="container">
            <div className="row">
              <div className="col-md text-center mb-5">
                <h2 className="">What is Corona Times Rhymes?</h2>
                <div className="dark-card">
                  I have published a book called
                  <br />
                  'Corona Times Rhymes',
                  <br />
                  It’s awfully funny.
                  <br />
                  <br />
                  To cheer us up in hard times,
                  <br />
                  100% of the profits,
                  <br />
                  Won’t see my own pockets.
                  <br />
                  <br />
                  <strong>MEDECINES SANS FRONTIERES,</strong>
                  <br />
                  Are working day and night,
                  <br />
                  Helping people in this desperate plight.
                  <br />
                  If you buy my book,
                  <br />
                  we can make lots of zeros,
                  <br />
                  On the sum we donate to these heros.
                  <br />
                </div>
              </div>
              <div className="col-md text-center">
                <h2 className="mb-5">Want a Free Poem?</h2>
                <h4 className="mb-5">Check out my Instagram!</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/kingdomherrmann/?hl=en"
                >
                  <img className="icon" src={instagram_icon} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="blue p-5">
          <div className="cotainer">
            <div className="row">
              <div className="col-md text-center mb-5">
                <h2 className="green mb-5">
                  Support international doctors,
                  <br />
                  whilst enjoying a great read.
                </h2>
                <h4 className="mb-5 yellow">
                  eBook & paperback formats avaliable!
                </h4>
                <a
                  href="https://www.amazon.co.uk/Corona-Times-Rhymes-Verses-ebook/dp/B086S9TZ9V/ref=sr_1_1?dchild=1&keywords=corona+times+rhymes&qid=1586168307&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="hero-amazon-btn"
                    src={AmazonBuy}
                    alt="Buy on Amazon"
                  />
                </a>
              </div>
              <div className="col-md text-center">
                <img className="img-col" src={book} alt="Book Cover" />
              </div>
            </div>
          </div>
        </section>
        <section className="white p-5">
          <div className="container">
            <div className="row text-center">
              <div className="col text-center">
                <h2>Donate Directly</h2>

                <div>
                  <img
                    className="img-small"
                    src={charity}
                    alt="doctors without borders"
                  />
                </div>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://stories.msf.org.uk/urgent-appeal/"
                >
                  <button className="green-btn">Donate Now</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="blue p-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="green">Can't donate?</h2>
              <h4 className="yellow">Your share = Your donation</h4>
            </div>

            <div className="row text-center">
              <div className="col-md text-center mb-5">
                <div className="white-card">
                  I wrote these poems because I care,
                  <br />
                  so I would appreciate it, if you‘d share,
                  <br />
                  <br />
                  Together we really ought,
                  <br />
                  To increase this book's R nought.
                  <br />
                  <br />
                  Think of all the help you‘d do,
                  <br />
                  Even only sharing with two.
                  <br />
                  <br />
                  With a rate that would double,
                  <br />
                  We could help fight this trouble!
                  <br />
                  <br />
                  And every penny that we see,
                  <br />
                  Goes straight to charity
                  <br />
                </div>
              </div>
              <div className="col-md text-center">
                <h4 className="green mb-5">
                  Your share leads to more donations
                </h4>
                <div>
                  <img className="icon" src={fb_icon} alt="facebook" />
                  <img className="icon" src={twitter_icon} alt="twitter" />
                  <img className="icon" src={share_icon} alt="share" />
                </div>
                <h2 className="green mt-5">www.CoronaRhymes.Org</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
