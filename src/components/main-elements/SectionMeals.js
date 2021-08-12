import mealData from "../../data";

const mealpicData = mealData;

const SectionMeals = () => {
  return (
    <section className="section-meals">
      <div className="img__container--meals">
        {mealpicData.map(({ id, pic, alt }) => (
          <div className='container__meal--col' key={id}>
            <figure className="img__figure--meal">
              <img className="img__meal" src={pic} alt={alt} />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionMeals;
