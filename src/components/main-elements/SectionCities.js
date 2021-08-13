import { citiData } from "../../data";
import { IoPersonSharp, IoStarSharp, IoLogoTwitter } from "react-icons/io5";

const citiInfo = citiData;

const SectionCities = () => {
  return (
    <section className="section-cities" id="cities">
      <div className="wrapper">
        <div className="row">
          <h2 className="title__secondary">We're currently in these cities</h2>
        </div>
        <div className="flex__container">
          {citiInfo.map(({ id, img, city, review1, review2, link }) => (
            <div key={id} className="grid__col--3 omni-city">
              <img src={img} alt="Lisbon" />
              <h3 className="title__tertiary">{city}</h3>
              <div className="city-feature content__base">
                <IoPersonSharp className="icon__city" />
                {review1}
              </div>
              <div className="city-feature content__base">
                <IoStarSharp className="icon__city" />
                {review2}
              </div>
              <div className="city-feature">
                <IoLogoTwitter className="icon__city" />
                <a style={{ color: "#17cf45" }} href="#g">
                  {link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCities;
