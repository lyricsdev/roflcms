<template>
  <div class="home_container">
    <!-- Hero Section
    ================================================== -->

    <header
      class="headerbotron bg-inverse text-xs-center center-vertically"
      role="banner"
    >
      <div class="header">

        <div class="inner-header flex">
          <svg
            class="logoR"
            xmlns="http://www.w3.org/2000/svg"
            data-name="logoBBG"
            height="100"
            viewBox="0 -20 511.5 551.5"
            width="100"
          >
            <defs>
              <linearGradient
                gradientTransform="rotate(-45 1731.212 -686.091)"
                gradientUnits="userSpaceOnUse"
                id="a"
                x1="-238.14"
                x2="225.02"
                y1="-601.61"
                y2="-601.61"
              >
                <stop offset="0" stop-color="#008dff" />
                <stop offset="1" stop-color="#ac00af" />
              </linearGradient>
              <linearGradient
                gradientTransform="rotate(-45 1731.212 -686.091)"
                gradientUnits="userSpaceOnUse"
                id="b"
                x1="-238.36"
                x2="273.12"
                y1="-728.35"
                y2="-728.35"
              >
                <stop offset="0" stop-color="#0000b1" />
                <stop offset=".02" stop-color="#0003b2" />
                <stop offset=".28" stop-color="#0041c7" />
                <stop offset=".51" stop-color="#0072d8" />
                <stop offset=".72" stop-color="#0096e4" />
                <stop offset=".89" stop-color="#00abeb" />
                <stop offset="1" stop-color="#00b3ee" />
              </linearGradient>
            </defs>
            <path
              d="M594.4,396.9c-55.7.4-99.6,24.8-126,44a108,108,0,0,1,164.9,78.8,111,111,0,0,1-.8,31h0c-5.3,26-22,90.4-79.2,134.6-53.5,41.3-127.2,53.4-200.5,35.3,100.4,92.4,256.7,90,354-7.4a254.5,254.5,0,0,0,72.1-142.9,259.6,259.6,0,0,0,.1-75.2C731.4,433.4,663.8,396.5,594.4,396.9Z"
              fill="url(#a)"
              transform="translate(-270.2 -276.6)"
            />
            <path
              d="M706.8,351.5c-99.9-99.8-261.8-99.8-361.7,0C261.9,434.7,248,561,303.5,658.6a256.4,256.4,0,0,0,41.6,54.6l7.7,7.4c73.3,18.1,147,6,200.5-35.3,57.2-44.2,73.9-108.6,79.2-134.6h0A108.1,108.1,0,0,1,451,610.2l-1.5-1.4a107.9,107.9,0,0,1,18.9-167.9c26.4-19.2,70.3-43.6,126-44,69.4-.4,137,36.5,184.6,98.2A255.2,255.2,0,0,0,706.8,351.5Z"
              fill="url(#b)"
              transform="translate(-270.2 -276.6)"
            />
          </svg>
          <div class="stack" style="--stacks: 1;">
            <span style="--index: 0;"
              >EdgeCMS - it so wonderful </span
            >
          </div>
        </div>

        <div>
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </header>
    <section class="section-features text-xs-center">
      <div class="subcontainer">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-block">
                <span class="icon-pen display-1"></span>
                <h4 class="card-title">250</h4>
                <h6 class="card-subtitle text-muted">UI Elements</h6>
                <p class="card-text">
                  Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl
                  cras eu adipiscing ac cras at sem cras per senectus eu
                  parturient quam.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-block">
                <span class="icon-thunderbolt display-1"></span>
                <h4 class="card-title">Ultra</h4>
                <h6 class="card-subtitle text-muted">Modern design</h6>
                <p class="card-text">
                  Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl
                  cras eu adipiscing ac cras at sem cras per senectus eu
                  parturient quam.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card m-b-0">
              <div class="card-block">
                <span class="icon-heart display-1"></span>
                <h4 class="card-title">Free</h4>
                <h6 class="card-subtitle text-muted">Forever and ever</h6>
                <p class="card-text">
                  Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl
                  cras eu adipiscing ac cras at sem cras per senectus eu
                  parturient quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing
    ================================================== -->

    <section class="section-pricing bg-faded text-xs-center">
      <div class="subcontainer">
        <h3>Manage your subscriptions</h3>
        <div class="row p-y-3">
          <div class="col-md-4 p-t-md wp wp-5">
            <div class="card pricing-box">
              <div class="card-header text-uppercase">
                Personal
              </div>
              <div class="card-block">
                <p class="card-title">
                  Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl
                  cras.
                </p>
                <h4 class="card-text">
                  <sup class="pricing-box-currency">$</sup>
                  <span class="pricing-box-price">19</span>
                  <small class="text-muted text-uppercase">/month</small>
                </h4>
              </div>
              <ul class="list-group list-group-flush p-x">
                <li class="list-group-item">Sed risus feugiat</li>
                <li class="list-group-item">Sed risus feugiat fusce eu sit</li>
                <li class="list-group-item">Sed risus feugiat fusce</li>
              </ul>
              <a href="#" class="btn btn-primary-outline">Get Started</a>
            </div>
          </div>
          <div class="col-md-4 stacking-top">
            <div class="card pricing-box pricing-best p-x-0">
              <div class="card-header text-uppercase">
                Professional
              </div>
              <div class="card-block">
                <p class="card-title">
                  Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl
                  cras.
                </p>
                <h4 class="card-text">
                  <sup class="pricing-box-currency">$</sup>
                  <span class="pricing-box-price">49</span>
                  <small class="text-muted text-uppercase">/month</small>
                </h4>
              </div>
              <ul class="list-group list-group-flush p-x">
                <li class="list-group-item">Sed risus feugiat</li>
                <li class="list-group-item">Sed risus feugiat fusce eu sit</li>
                <li class="list-group-item">Sed risus feugiat fusce</li>
                <li class="list-group-item">Sed risus feugiat</li>
              </ul>
              <a href="#" class="btn btn-primary">Get Started</a>
            </div>
          </div>
          <div class="col-md-4 p-t-md wp wp-6">
            <div class="card pricing-box">
              <div class="card-header text-uppercase">
                Enterprise
              </div>
              <div class="card-block">
                <p class="card-title">
                  Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl
                  cras.
                </p>
                <h4 class="card-text">
                  <sup class="pricing-box-currency">$</sup>
                  <span class="pricing-box-price">99</span>
                  <small class="text-muted text-uppercase">/month</small>
                </h4>
              </div>
              <ul class="list-group list-group-flush p-x">
                <li class="list-group-item">Sed risus feugiat</li>
                <li class="list-group-item">Sed risus feugiat fusce eu sit</li>
                <li class="list-group-item">Sed risus feugiat fusce</li>
              </ul>
              <a href="#" class="btn btn-primary-outline">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials
    ================================================== -->

    <section class="section-testimonials text-xs-center bg-inverse">
      <div class="subcontainer">
        <h3 class="sr-only">Testimonials</h3>
        <div
          id="carousel-testimonials"
          class="carousel slide"
          data-ride="carousel"
          data-interval="0"
        >
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <blockquote class="blockquote">
                <img
                  src="img/face1.jpg"
                  height="80"
                  width="80"
                  alt="Avatar"
                  class="img-circle"
                />
                <p class="h3">
                  Good design at the front-end suggests that everything is in
                  order at the back-end, whether or not that is the case.
                </p>
                <footer>Dmitry Fadeyev</footer>
              </blockquote>
            </div>
            <div class="carousel-item">
              <blockquote class="blockquote">
                <img
                  src="img/face2.jpg"
                  height="80"
                  width="80"
                  alt="Avatar"
                  class="img-circle"
                />
                <p class="h3">
                  It’s not about knowing all the gimmicks and photo tricks. If
                  you haven’t got the eye, no program will give it to you.
                </p>
                <footer>David Carson</footer>
              </blockquote>
            </div>
            <div class="carousel-item">
              <blockquote class="blockquote">
                <img
                  src="img/face3.jpg"
                  height="80"
                  width="80"
                  alt="Avatar"
                  class="img-circle"
                />
                <p class="h3">
                  There’s a point when you’re done simplifying. Otherwise,
                  things get really complicated.
                </p>
                <footer>Frank Chimero</footer>
              </blockquote>
            </div>
            <div class="carousel-item">
              <blockquote class="blockquote">
                <img
                  src="img/face4.jpg"
                  height="80"
                  width="80"
                  alt="Avatar"
                  class="img-circle"
                />
                <p class="h3">
                  Designing for clients that don’t appreciate the value of
                  design is like buying new tires for a rental car.
                </p>
                <footer>Joel Fisher</footer>
              </blockquote>
            </div>
            <div class="carousel-item">
              <blockquote class="blockquote">
                <img
                  src="img/face5.jpg"
                  height="80"
                  width="80"
                  alt="Avatar"
                  class="img-circle"
                />
                <p class="h3">
                  Every picture owes more to other pictures painted before than
                  it owes to nature.
                </p>
                <footer>E.H. Gombrich</footer>
              </blockquote>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li class="active">
              <img
                src="img/face1.jpg"
                alt="Navigation avatar"
                data-target="#carousel-testimonials"
                data-slide-to="0"
                class="img-fluid img-circle"
              />
            </li>
            <li>
              <img
                src="img/face2.jpg"
                alt="Navigation avatar"
                data-target="#carousel-testimonials"
                data-slide-to="1"
                class="img-fluid img-circle"
              />
            </li>
            <li>
              <img
                src="img/face3.jpg"
                alt="Navigation avatar"
                data-target="#carousel-testimonials"
                data-slide-to="2"
                class="img-fluid img-circle"
              />
            </li>
            <li>
              <img
                src="img/face4.jpg"
                alt="Navigation avatar"
                data-target="#carousel-testimonials"
                data-slide-to="3"
                class="img-fluid img-circle"
              />
            </li>
            <li>
              <img
                src="img/face5.jpg"
                alt="Navigation avatar"
                data-target="#carousel-testimonials"
                data-slide-to="4"
                class="img-fluid img-circle"
              />
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- News
    ================================================== -->

    <section class="section-news">
      <div class="subcontainer">
        <h3 class="sr-only">News</h3>
        <div class="bg-inverse">
          <div class="row">
            <div class="col-md-6 p-r-0">
              <figure class="has-light-mask m-b-0 image-effect">
                <img
                  src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?q=80&fm=jpg&w=1080&fit=max"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-6 p-l-0">
              <article class="center-block">
                <span class="label label-info">Featured article</span>
                <br />
                <h5>
                  <a href="#"
                    >Design studio with product designer Peter Finlan
                    <span class="icon-arrow-right"></span
                  ></a>
                </h5>
                <p class="m-b-0">
                  <a href="#"
                    ><span class="label label-default text-uppercase"
                      ><span class="icon-tag"></span> Design Studio</span
                    ></a
                  >
                  <a href="#"
                    ><span class="label label-default text-uppercase"
                      ><span class="icon-time"></span> 1 Hour Ago</span
                    ></a
                  >
                </p>
              </article>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-md-push-6 p-l-0">
              <figure class="has-light-mask m-b-0 image-effect">
                <img
                  src="https://images.unsplash.com/photo-1434394673726-e8232a5903b4?q=80&fm=jpg&w=1080&fit=max"
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-6 col-md-pull-6 p-r-0">
              <article class="center-block">
                <span class="label label-info">Featured article</span>
                <br />
                <h5>
                  <a href="#"
                    >How bold, emotive imagery can connect with your audience
                    <span class="icon-arrow-right"></span
                  ></a>
                </h5>
                <p class="m-b-0">
                  <a href="#"
                    ><span class="label label-default text-uppercase"
                      ><span class="icon-tag"></span> Design Studio</span
                    ></a
                  >
                  <a href="#"
                    ><span class="label label-default text-uppercase"
                      ><span class="icon-time"></span> 1 Hour Ago</span
                    ></a
                  >
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sign Up
    ================================================== -->

    <section class="section-signup bg-faded">
      <div class="subcontainer">
        <h3 class="text-xs-center m-b-3">
          Sign up to receive free updates as soon as they hit!
        </h3>
        <form>
          <div class="row">
            <div class="col-md-6 col-xl-3">
              <div class="form-group has-icon-left form-control-name">
                <label class="sr-only" for="inputName">Your name</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="inputName"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="form-group has-icon-left form-control-email">
                <label class="sr-only" for="inputEmail">Email address</label>
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="inputEmail"
                  placeholder="Email address"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="form-group has-icon-left form-control-password">
                <label class="sr-only" for="inputPassword"
                  >Enter a password</label
                >
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="inputPassword"
                  placeholder="Enter a password"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign up for free!
                </button>
              </div>
            </div>
          </div>
          <label class="c-input c-checkbox">
            <input type="checkbox" checked />
            <span class="c-indicator"></span> I agree to Land.io’s
            <a href="#">terms of service</a>
          </label>
        </form>
      </div>
    </section>

    <!-- Footer
    ================================================== -->

    <footer class="section-footer bg-inverse" role="contentinfo">
      <div class="subcontainer">
        <div class="row">
          <div class="col-md-6 col-lg-5">
            <div class="media">
              <div class="media-left">
                <span class="media-object icon-logo display-1"></span>
              </div>
              <small class="media-body media-bottom">
                Designed IgnI. Developer havin Fun.
              </small>
            </div>
          </div>
          <div class="col-md-6 col-lg-7">
            <ul class="nav nav-inline">
              <li class="nav-item">
                <!--тут можно ссылку на что-то. Игни, не забудь, вдруг надо. Отъебись, не забуду-->
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://github.com/lyricsdev/roflcms"
                  target="_blank"
                  >GitHub</a
                >
              </li>
              <!--тут можно ещё намутить-->
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import api from "../services/api";
import $ from "jquery";
import servers from "./servers.vue";

export default {
  components: { servers },

  name: "Home",
  data() {
    return {
      news: null,
      servers: null,
    };
  },
  async mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
    await this.getnews();
    await this.getservers();
  },
  methods: {
    async getnews() {
      try {
        const response = await api.post("/getnews", {});
        console.log(JSON.stringify(response.data));
        return (this.news = JSON.stringify(response.data));
      } catch (error) {}
    },
    async getservers() {
      try {
        const response = await api.post("/getservers", {});
        return (this.servers = JSON.stringify(response.data));
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss">
</style>
