import { useSelector, useDispatch } from 'react-redux';
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
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Uploader from './uploader';

import {
  changeNameField,
  changePictureField,
  changeDescriptionField,
  changeSpeciesField,
  changeAgeField, 
  changeGenderField,
  changeChildField,
  changeOthersField,
  changeGardenField,
  postAnimal,
} from '../../actions/animalSearched';

export default function AddAnimalForm() {
  const nameValue = useSelector((state) => state.SearchedAnimals.name);
  const pictureValue = useSelector((state) => state.SearchedAnimals.picture);
  const descriptionValue = useSelector((state) => state.SearchedAnimals.description);
  const speciesValue = useSelector((state) => state.SearchedAnimals.species);
  const genderValue = useSelector((state) => state.SearchedAnimals.gender);
  const ageValue = useSelector((state) => state.SearchedAnimals.age);
  const childValue = useSelector((state) => state.SearchedAnimals.childCompatibility);
  const othersValue = useSelector((state) => state.SearchedAnimals.otherAnimalCompatibility);
  const gardenValue = useSelector((state) => state.SearchedAnimals.gardenNeeded);

  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    //setSpecies(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changeNameField(name, inputValue);
    dispatch(action);
  };
  const handleChangePicture = (event) => {
    //setSpecies(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changePictureField(name, inputValue);
    dispatch(action);
  };
  const handleChangeDescription = (event) => {
    //setSpecies(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changeDescriptionField(name, inputValue);
    dispatch(action);
  };
  const handleChangeSpecies = (event) => {
    //setSpecies(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changeSpeciesField(name, inputValue);
    dispatch(action);
  };
  const handleChangeGender = (event) => {
    //setAge(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changeGenderField(name, parseInt(inputValue, 10));
    dispatch(action);
  };
  const handleChangeAge = (event) => {
    //setAge(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changeAgeField(name, inputValue);
    dispatch(action);
  };
  const handleChangeChild = (event) => {
    //setAge(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changeChildField(name, parseInt(inputValue, 10));
    dispatch(action);
  };
  const handleChangeOthers = (event) => {
    //setAge(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changeOthersField(name, parseInt(inputValue, 10));
    dispatch(action);
  };
  const handleChangeGarden = (event) => {
    //setAge(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changeGardenField(name, parseInt(inputValue, 10));
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nameValue,
      pictureValue,
      descriptionValue,
      speciesValue,
      genderValue,
      ageValue,
      childValue,
      othersValue,
      gardenValue,
    });
    //dispatch(postAnimal());
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
            name="name"
            value={nameValue}
            label="name"
            onChange={handleChangeName}
          />
          <Uploader />
          <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ mt: 1 }}>Espèce</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="species"
                  value={speciesValue}
                  label="species"
                  onChange={handleChangeSpecies}
                  sx={{ mt: 2 }}
                >
                  <MenuItem value={1}>Chat</MenuItem>
                  <MenuItem value={2}>Chien</MenuItem>
                  <MenuItem value={3}>Lapin</MenuItem>
                  <MenuItem value={4}>Rongeurs</MenuItem>
                </Select>
            </FormControl>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Genre</FormLabel>
            <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  value={genderValue}
                  onChange={handleChangeGender}
                  
                >
                  <FormControlLabel value={0} control={<Radio />} label="Femelle" />
                  <FormControlLabel value={1} control={<Radio />} label="Mâle" />
                </RadioGroup>
          </FormControl>
          <TextField
            id="outlined-number"
            type="number"
            required
            fullWidth
            name="age"
            value={ageValue}
            label="age"
            onChange={handleChangeAge}
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Description de l'animal</FormLabel>
            <TextareaAutosize
              required
              aria-label="minimum height"
              minRows={10}
              placeholder=""
              name="description"
              value={descriptionValue}
              label="description"
              onChange={handleChangeDescription}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Sociabilité avec les enfants</FormLabel>
            <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="childrenCompatibility"
                  value={childValue}
                  onChange={handleChangeChild}
                >
                  <FormControlLabel value={0} control={<Radio />} label="Oui" />
                  <FormControlLabel value={1} control={<Radio />} label="Non" />
                </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Sociabilité avec les autres animaux</FormLabel>
            <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="otherAnimalCompatibility"
                  value={othersValue}
                  onChange={handleChangeOthers}
                >
                  <FormControlLabel value={0} control={<Radio />} label="Oui" />
                  <FormControlLabel value={1} control={<Radio />} label="Non" />
                </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Besoin d'un accès à un jardin</FormLabel>
            <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gardenNeeded"
                  value={gardenValue}
                  onChange={handleChangeGarden}
                >
                  <FormControlLabel value={0} control={<Radio />} label="Oui" />
                  <FormControlLabel value={1} control={<Radio />} label="Non" />
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
