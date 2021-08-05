import SectionFeatures from './main-elements/SectionFeatures';
import SectionMeals from './main-elements/SectionMeals';
import SectionSteps from './main-elements/SectionSteps';
import SectionCities from './main-elements/SectionCities';
import SectionTestimonials from './main-elements/SectionTestimonials';
import SectionPlans from './main-elements/SectionPlans';
import SectionFormV2 from './main-elements/SectionFormV2';

const MainContent = () => {
  return (
    <main>
      <SectionFeatures />
      <SectionMeals />
      <SectionSteps />
      <SectionCities />
      <SectionTestimonials />
      <SectionPlans />
      <SectionFormV2 />
    </main>
  );
};

export default MainContent;
