import { useSelector, useDispatch } from 'react-redux';
import { displayNextSlide, displayPreviousSlide } from 'src/actions/carroussel';
import { useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carrousel = () => {
  const dispatch = useDispatch();

  const nextSlide = () => {
    console.log('on execute cette fonction toutes les 5 secondes et quand on clique');
    clearInterval();
    dispatch(displayNextSlide());
  };

  const prevSlide = () => {
    console.log('on execute cette fonction quand on clique');
    clearInterval();
    dispatch(displayPreviousSlide());
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  });

  const displayedProfile = useSelector((state) => state.Carroussel.displayProfile);

  const allAnimalProfiles = useSelector((state) => (state.Carroussel.apiresults));

  return (
    <section className="slider">
      <ArrowBackIosIcon className="left-arrow" onClick={prevSlide} />
      <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
      {allAnimalProfiles.map((slide, index) => (
        <div
          className={index === displayedProfile ? 'slide active' : 'slide'}
          key={slide.id}
        >
          {index === displayedProfile && (
            <img src={'http://localhost:8081/images/animaux/' + slide.imageName} alt="travel" className="slider__image" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Carrousel;
