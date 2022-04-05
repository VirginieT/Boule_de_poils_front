import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

export default function SignIn() {
  const [species, setSpecies] = React.useState('');
  const [age, setAge] = React.useState('');

  const handleChangeSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Accordion>
          <Button variant="contained" fullWidth>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Rechercher un animal</Typography>
            </AccordionSummary>
          </Button>
          <AccordionDetails>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ mt: 1 }}>Espèce</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={species}
                  label="Species"
                  onChange={handleChangeSpecies}
                  sx={{ mt: 2 }}
                >
                  <MenuItem value={10}>Chien</MenuItem>
                  <MenuItem value={20}>Chat</MenuItem>
                  <MenuItem value={30}>Lapin</MenuItem>
                  <MenuItem value={40}>Rongeur</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Genre</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="femelle" control={<Radio />} label="Femelle" />
                  <FormControlLabel value="mâle" control={<Radio />} label="Mâle" />
                  <FormControlLabel value="both" control={<Radio />} label="Indifférent" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ mt: 1 }}>Âge</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChangeAge}
                  sx={{ mt: 2 }}
                >
                  <MenuItem value={10}>0 à 5 ans</MenuItem>
                  <MenuItem value={20}>5 à 10 ans</MenuItem>
                  <MenuItem value={30}>10 à 15 ans</MenuItem>
                  <MenuItem value={40}>plus de 15 ans</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Sociabilité avec les enfants</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Oui" />
                  <FormControlLabel value="male" control={<Radio />} label="Non" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Sociabilité avec les autres animaux</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Oui" />
                  <FormControlLabel value="male" control={<Radio />} label="Non" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Accès à un jardin</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Oui" />
                  <FormControlLabel value="male" control={<Radio />} label="Non" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Disponibilité</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Sur site" />
                  <FormControlLabel value="male" control={<Radio />} label="En famille d'accueil" />
                </RadioGroup>
              </FormControl>
              <TextField
                id="outlined-number"
                label="Code postal"
                defaultValue="Code postal"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                sx={{ mt: 1 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Lancer la recherche
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
