import phoneImg from "../../img/app-iPhone.png";
import appStoreImg from "../../img/download-app.svg";
import androidStoreImg from "../../img/download-app-android.png";

const SectionSteps = () => {
  return (
    <section id="works">
      <div className="row">
        <h2 className="title__secondary">
          How it works{" "}
          <span className="steps__heading">- Simple as 1, 2, 3</span>
        </h2>
      </div>
      <div className="wrapper">
        <div className="flex__container__steps">
          <div className="container__phone">
            <img
              src={phoneImg}
              alt="Omnifood app on iPhone"
              className="img__phone"
            />
          </div>
          <div className="container__section--preview">
            <div className="container__steps">
              <div className="container__steps--num">1</div>
              <p className="content__base">
                Choose the subscription plan that best fits your needs and sign
                up today.
              </p>
            </div>
            <div className="container__steps">
              <div className="container__steps--num">2</div>
              <p className="content__base">
                Order your delicious meal using our mobile app or website. Or
                you can even call us!
              </p>
            </div>
            <div className="container__steps">
              <div className="container__steps--num">3</div>
              <p className="content__base">
                Enjoy your meal after less than 20 minutes. See you the next
                time!
              </p>
            </div>
            <div className="container__apps--OS">
              <a href="#p" className="btn-app">
                <img
                  className="img__app--OS"
                  src={appStoreImg}
                  alt="App Store Button"
                />
              </a>
              <a href="#k" className="btn-app">
                <img
                  className="img__app--OS"
                  src={androidStoreImg}
                  alt="Play Store Button"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSteps;
