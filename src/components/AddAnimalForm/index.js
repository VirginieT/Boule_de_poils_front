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
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useSelector } from 'react-redux';
// import Uploader from './Uploader/uploader';
import './addAnimalForm.scss';

const Input = styled('input')({
  display: 'none',
});

export default function AddAnimalForm() {
  const [species, setSpecies] = React.useState('');

  // const uploadedImg = useSelector((state) => state.FormReducer.uploadedImg);

  const loadFile = (event) => {
    const output = document.getElementById('renderImg');
    output.src = URL.createObjectURL(event.target.files[0]);
    console.log(output.src);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  };

  const handleChangeSpecies = (event) => {
    setSpecies(event.target.value);
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
        <Typography component="h1" variant="h5">
          Ajouter un animal
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Nom"
            defaultValue=""
          />
          <FormControl fullWidth>
            <Box
              sx={{
                border: '2px dashed grey',
                borderRadius: '20px',
                my: 2,
                width: '320px',
                height: '320px',
                mx: 'auto',
              }}
            >

              <img id="renderImg" src="" alt="" />
            </Box>
            <label htmlFor="contained-button-file">
              {/* eslint-disable-next-line react/jsx-no-bind */}
              <Input accept=".jpg,.jpeg" id="contained-button-file" type="file" onChange={loadFile} />
              <Button className="container-buttons" variant="contained" component="span" color="primary" fullWidth>
                Choisir une photo
              </Button>
            </label>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ mt: 2 }}>Espèce</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
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
