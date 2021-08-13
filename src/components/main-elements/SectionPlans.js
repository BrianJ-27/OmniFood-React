import { planInfo } from "../../data";
import { IoCheckmarkSharp } from "react-icons/io5";

const SectionPlans = () => {
  return (
    <section id="plans">
      <div className="wrapper">
        <div className="row">
          <h2 className="title__secondary">Start eating healthy today</h2>
        </div>
        <div className="flex__container container__planbox">
          {planInfo.map(
            ({
              id,
              type,
              price,
              term,
              mealDescrptn,
              deal1,
              deal2,
              deal3,
              deal4,
              link,
            }) => (
              <div className="grid__col--4 planbox" key={id}>
                <div className="plan-box js--wp-4">
                  <div className="container__top--box">
                    <h3 className="title__tertiary">{type}</h3>
                    <p className="plan__price">
                      {price}
                      <span style={{ fontSize: "45%", fontWeight: "300" }}>
                        {term}
                      </span>
                    </p>
                    <p className="plan-price-meal content__base">{mealDescrptn}</p>
                  </div>
                  <div className="container__middle--box">
                    <ul>
                      <li className="content__base" style={{ marginBottom: "1em" }}>
                        <IoCheckmarkSharp className="icon__checkmark" />
                        {deal1}
                      </li>
                      <li className="content__base" style={{ marginBottom: "1em" }}>
                        <IoCheckmarkSharp className="icon__checkmark" />
                        {deal2}
                      </li>
                      <li className="content__base" style={{ marginBottom: "1em" }}>
                        <IoCheckmarkSharp className="icon__checkmark" />
                        {deal3}
                      </li>
                      <li className="content__base" style={{ marginBottom: "1em" }}>
                        <IoCheckmarkSharp className="icon__checkmark" />
                        {deal4}
                      </li>
                    </ul>
                  </div>
                  <div className="container__bottom--box">
                    <a href="#d" className="btn__full">
                      {link}
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionPlans;
