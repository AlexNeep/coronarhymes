import React from "react";

const Nav = () => {
  return (
    <section className="white">
      <nav className="navbar navbar-expand">
        <a className="navbar-brand" href="#">
          Corona Rhymes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr">
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.amazon.co.uk/Corona-Times-Rhymes-Verses-ebook/dp/B086S9TZ9V/ref=sr_1_1?dchild=1&keywords=corona+times+rhymes&qid=1586168307&sr=8-1"
              >
                <button className="support-nav-btn">Support Now</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
export default Nav;
