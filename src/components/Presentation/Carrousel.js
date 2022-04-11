import { useSelector, useDispatch } from 'react-redux';
import { displayNextProfile, displayPreviousProfile } from 'src/actions/carroussel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carrousel = () => {
  const dispatch = useDispatch();

  const displayedProfile = useSelector((state) => state.Carroussel.displayProfile);

  const allAnimalProfiles = useSelector((state) => (state.Carroussel.apiresults));

  const nextSlide = () => {
    dispatch(displayNextProfile());
  };

  const prevSlide = () => {
    dispatch(displayPreviousProfile());
  };

  console.log(allAnimalProfiles);

  return (
    <section className="slider">
      <ArrowBackIosIcon className="left-arrow" onClick={nextSlide} />
      <ArrowForwardIosIcon className="right-arrow" onClick={prevSlide} />
      {allAnimalProfiles.map((slide, index) => (
        <div
          className={index === displayedProfile ? 'slide active' : 'slide'}
          key={slide.id}
        >
          {index === displayedProfile && (
            <img src={slide.picture} alt="travel" className="image" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Carrousel;
