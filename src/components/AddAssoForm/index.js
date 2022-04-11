import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import {
  fetchGeoloc,
} from '../../actions/formActions';

export default function AddAssoForm() {
  const dispatch = useDispatch();

  const nameValue = useSelector((state) => state.AssoReducer.name);
  const descriptionValue = useSelector((state) => state.AssoReducer.description);
  const sirenValue = useSelector((state) => state.AssoReducer.siren);
  const streetValue = useSelector((state) => state.AssoReducer.street);
  const zipCodeValue = useSelector((state) => state.AssoReducer.zipCode);
  const cityValue = useSelector((state) => state.AssoReducer.city);
  const phoneNumberValue = useSelector((state) => state.AssoReducer.phoneNumber);
  const emailValue = useSelector((state) => state.AssoReducer.email);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const streetSplit = streetValue.split(' ');
    const street = streetSplit.join('+');
    const zipCode = zipCodeValue.toString();
    dispatch(fetchGeoloc(street, zipCode));
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
        <Typography component="h1" variant="h5">
          Enregistrer une association
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Nom"
            value={nameValue}
          />
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Genre</FormLabel>
            <RadioGroup
              required
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="femelle" control={<Radio />} label="Femelle" />
              <FormControlLabel value="mâle" control={<Radio />} label="Mâle" />
            </RadioGroup>
          </FormControl>
          <TextField
            id="outlined-number"
            label="Âge"
            type="number"
            required
            fullWidth
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Description de l'animal</FormLabel>
            <TextareaAutosize
              required
              aria-label="minimum height"
              minRows={10}
              placeholder=""
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Sociabilité avec les enfants</FormLabel>
            <RadioGroup
              required
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Oui" />
              <FormControlLabel value="male" control={<Radio />} label="Non" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Sociabilité avec les autres animaux</FormLabel>
            <RadioGroup
              required
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Oui" />
              <FormControlLabel value="male" control={<Radio />} label="Non" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Besoin d'un accès à un jardin</FormLabel>
            <RadioGroup
              required
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Oui" />
              <FormControlLabel value="male" control={<Radio />} label="Non" />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ajouter un animal
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
