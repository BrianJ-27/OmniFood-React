import { testimonialData } from "../../data";
import { IoStarSharp } from "react-icons/io5";

const SectionTestimonials = () => {
  return (
    <section className="testimonial__bg">
      <div className="wrapper">
        <div className="row">
          <h2 className="title__secondary reviews">
            Our customers can't live without us
          </h2>
        </div>
        <div className="flex__container testimonial">
          {testimonialData.map(({ id, review, photo, name, alt }) => (
            <div className="grid__col--4 review" key={id}>
              <IoStarSharp style={{ fontSize: "180%" }} />
              <blockquote>{review}</blockquote>
              <cite style={{ fontSize: "120%", fontWeight: "bold" }}>
                <img className="img__person" src={photo} alt={alt} />
                {name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonials;
