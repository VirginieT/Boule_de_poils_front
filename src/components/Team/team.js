import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AvatarF from 'src/assets/images/avatar_francois.png';
import './team.scss';

const Team = () => (
  <div className="team">
    <CssBaseline />
    <h2 className="team__title">L'équipe Boules de poil</h2>
    <div className="team__list">
      <div className="team__card">
        <img className="team__pic" src={AvatarF} alt="Julien" />
        <h3 className="team__name">Julien</h3>
        <h4 className="team__role">Product Owner / Lead Dev Back</h4>
      </div>
      <div className="team__card">
        <img className="team__pic" src={AvatarF} alt="Julien" />
        <h3 className="team__name">Mathilde</h3>
        <h4 className="team__role">Scrum Master</h4>
      </div>
      <div className="team__card">
        <img className="team__pic" src={AvatarF} alt="Julien" />
        <h3 className="team__name">Anthony</h3>
        <h4 className="team__role">Lead Dev Front</h4>
      </div>
      <div className="team__card">
        <img className="team__pic" src={AvatarF} alt="Julien" />
        <h3 className="team__name">Virginie</h3>
        <h4 className="team__role">Git Master</h4>
      </div>
      <div className="team__card">
        <img className="team__pic" src={AvatarF} alt="Julien" />
        <h3 className="team__name">François-Louis</h3>
        <h4 className="team__role">Technical Advisor</h4>
      </div>
    </div>
    <Button variant="contained" className="team__btn"><a href="mailto:admin@boulesdepoil.com">Nous contacter</a></Button>
  </div>
);

export default Team;
