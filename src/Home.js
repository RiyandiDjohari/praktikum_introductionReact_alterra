import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home-background">
        <header>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="alterra">
                  <a href="index.html">
                    <img class="logo-atas" src="asset/img/logo-ALTA@2x.png" alt="logo-alta" />
                  </a>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="container">
                  <div class="row align-items-center navig">
                    <div class=" nav-item col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right px-0">
                      <a href="index.html" class="aktif">
                        HOME
                      </a>
                    </div>
                    <div class=" nav-item col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center px-0">
                      <a href="about.html">ABOUT</a>
                    </div>
                    <div class=" nav-item col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center px-0">
                      <a href="/">EXPERIENCE</a>
                    </div>
                    <div class=" nav-item col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right px-0">
                      <a href="form.html">CONTACT</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="container h-100">
          <div class="row align-items-center isi-home">
            <div class="col-lg-4 col-md-12 col-sm-12  col-12">
              <img id="foto-profil" src="asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" alt="profil" />
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12 col-12">
              <div class="main-p">
                <p class="sapaan">Hi, my name is </p>
                <p class="nama">Anne Sullivan</p>
                <p class="hobi">I build things for the web</p>
                <p class="tombol">
                  <a href="about.html">Get In Touch</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
