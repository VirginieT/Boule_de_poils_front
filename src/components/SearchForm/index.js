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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import ListSubheader from '@mui/material/ListSubheader';

// importation of actions used in the components

import {
  changeSpeciesField,
  changeAgeField,
  changeGenderField,
  changeChildField,
  changeOthersField,
  changeGardenField,
  changeLocField,
  changeStatusField,
  fetchDepartments,
  fetchSpecies,
  formSubmit,
  changeSpeciesError,
  changeAgeError,
  changeLocError,
} from '../../actions/formActions';

// association of local variables with states in reducers

export default function SearchForm() {
  const speciesValue = useSelector((state) => state.SearchedAnimals.species);
  const genderValue = useSelector((state) => state.SearchedAnimals.gender);
  const ageValue = useSelector((state) => state.SearchedAnimals.age);
  const childValue = useSelector((state) => state.SearchedAnimals.childCompatibility);
  const othersValue = useSelector((state) => state.SearchedAnimals.otherAnimalCompatibility);
  const gardenValue = useSelector((state) => state.SearchedAnimals.gardenNeeded);
  const locValue = useSelector((state) => state.SearchedAnimals.department);
  const statusValue = useSelector((state) => state.SearchedAnimals.status);
  const departments = useSelector((state) => state.FormReducer.departments);
  const species = useSelector((state) => state.FormReducer.species);
  const speciesError = useSelector((state) => state.FormReducer.speciesError);
  const ageError = useSelector((state) => state.FormReducer.ageError);
  const locError = useSelector((state) => state.FormReducer.departmentError);

  const dispatch = useDispatch();

  // launch requests to the api for fetching datas of the species and departments at the component first mount 

  useEffect(() => {
    dispatch(fetchSpecies());
    dispatch(fetchDepartments());
  }, []);

  // function to verify if the value of the species field is between 0 and the number of existing species in database
  // change the associated error state in consequence

  const speciesValidate = (speciesVerify) => {
    if (speciesVerify >= 0 && speciesVerify <= species.length) {
      const action = changeSpeciesError(speciesError, false);
      dispatch(action);
    }
    else {
      const action = changeSpeciesError(speciesError, true);
      dispatch(action);
    }
  };

  // function to change the value of species field's state as user selection
  // call the validation function of the field

  const handleChangeSpecies = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeSpeciesField(name, inputValue);
    dispatch(action);
    speciesValidate(inputValue);
  };

  // function to change the value of gender field's state as user selection
  // use parseInt to transform the int value in string for api request

  const handleChangeGender = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeGenderField(name, parseInt(inputValue, 10));
    dispatch(action);
  };

  // function to verify if the value of the age field is between 0 and 4
  // change the associated error state in consequence

  const ageValidate = (ageVerify) => {
    if (ageVerify >= 0 && ageVerify <= 4) {
      const action = changeAgeError(ageError, false);
      dispatch(action);
    }
    else {
      const action = changeAgeError(ageError, true);
      dispatch(action);
    }
  };

  // function to change the value of age field's state as user selection
  // call the validation function of the field

  const handleChangeAge = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeAgeField(name, inputValue);
    dispatch(action);
    ageValidate(inputValue);
  };

  // function to toggle the value of children compatibility field's state as checkbox is checked or not

  const handleChangeChild = (event) => {
    if (event.target.checked) {
      dispatch(changeChildField('childCompatibility', 1));
    }
    else {
      dispatch(changeChildField('childCompatibility', 0));
    }
  };

  // function to toggle the value of other animals compatibility field's state as checkbox is checked or not

  const handleChangeOthers = (event) => {
    if (event.target.checked) {
      dispatch(changeOthersField('otherAnimalCompatibility', 1));
    }
    else {
      dispatch(changeOthersField('otherAnimalCompatibility', 0));
    }
  };

  // function to toggle the value of garden needed field's state as checkbox is checked or not

  const handleChangeGarden = (event) => {
    if (event.target.checked) {
      dispatch(changeGardenField('gardenNeeded', 1));
    }
    else {
      dispatch(changeGardenField('gardenNeeded', 0));
    }
  };

  // function to verify if the value of the location field is between 0 and the number of existing departments in database
  // change the associated error state in consequence

  const locValidate = (locVerify) => {
    if (locVerify >= 0 && locVerify < departments.length) {
      const action = changeLocError(locError, false);
      dispatch(action);
    }
    else {
      const action = changeLocError(locError, true);
      dispatch(action);
    }
  };

  // function to change the value of location field's state as user selection
  // use parseInt to transform the int value in string for api request
  // call the validation function of the field

  const handleChangeLoc = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeLocField(name, parseInt(inputValue, 10));
    dispatch(action);
    locValidate(inputValue);
  };

  // function to toggle the value of status field's state as checkbox is checked or not

  const handleChangeStatus = (event) => {
    if (event.target.checked) {
      dispatch(changeStatusField('status', 1));
    }
    else {
      dispatch(changeStatusField('status', 0));
    }
  };

  // function to submit the form
  // verify if there is no error in each fields
  // toggle the formSubmit's state value to launch the api call and component switching

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const data = new FormData(event.currentTarget);
    if (speciesError === false && ageError === false && locError === false) {
      dispatch(formSubmit());
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      id="search-form"
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Accordion>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ px: 0, py: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ width: 1 }}
            >
              <Typography>Rechercher un animal</Typography>
            </AccordionSummary>
          </Button>
          <AccordionDetails>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              {speciesError
                ? (
                  <FormControl fullWidth error>
                    <InputLabel id="species-select-label-error" sx={{ mt: 1 }}>Espèce</InputLabel>
                    <Select
                      required
                      labelId="species-select-label-error"
                      id="species-select-error"
                      value={speciesValue}
                      label="Espèces"
                      onChange={handleChangeSpecies}
                      sx={{ mt: 2 }}
                    >
                      <MenuItem value={999}>
                        <em>Choisissez une espèce</em>
                      </MenuItem>
                      {species.map((item) => (
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Merci de renseigner ce champ</FormHelperText>
                  </FormControl>
                )
                : (
                  <FormControl fullWidth>
                    <InputLabel id="species-select-label" sx={{ mt: 1 }}>Espèce</InputLabel>
                    <Select
                      required
                      labelId="species-select-label"
                      id="species-select"
                      value={speciesValue}
                      label="Espèces"
                      onChange={handleChangeSpecies}
                      sx={{ mt: 2 }}
                    >
                      <MenuItem value={999}>
                        <em>Choisissez une espèce</em>
                      </MenuItem>
                      {species.map((item) => (
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              <FormControl fullWidth>
                <FormLabel id="gender-radio-buttons-group-label" sx={{ mt: 1 }}>Genre</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="gender-radio-buttons-group-label"
                  name="gender"
                  value={genderValue}
                  onChange={handleChangeGender}
                >
                  <FormControlLabel value={0} control={<Radio />} label="Femelle" />
                  <FormControlLabel value={1} control={<Radio />} label="Mâle" />
                  <FormControlLabel value={2} control={<Radio />} label="Indifférent" />
                </RadioGroup>
              </FormControl>
              {ageError
                ? (
                  <FormControl fullWidth error>
                    <InputLabel id="age-select-label-error" sx={{ mt: 1 }}>Âge</InputLabel>
                    <Select
                      labelId="age-select-label--error"
                      id="age-select-error"
                      name="age"
                      value={ageValue}
                      label="Age"
                      onChange={handleChangeAge}
                      sx={{ mt: 2 }}
                    >
                      <MenuItem value={0}>moins de 1 an</MenuItem>
                      <MenuItem value={1}>1 à 5 ans</MenuItem>
                      <MenuItem value={2}>5 à 10 ans</MenuItem>
                      <MenuItem value={3}>plus de 10 ans</MenuItem>
                      <MenuItem value={4}>Indifférent</MenuItem>
                    </Select>
                    <FormHelperText>Merci de renseigner ce champ</FormHelperText>
                  </FormControl>
                )
                : (
                  <FormControl fullWidth>
                    <InputLabel id="age-select-label" sx={{ mt: 1 }}>Âge</InputLabel>
                    <Select
                      labelId="age-select-label"
                      id="age-select"
                      name="age"
                      value={ageValue}
                      label="Age"
                      onChange={handleChangeAge}
                      sx={{ mt: 2 }}
                    >
                      <MenuItem value={0}>moins de 1 an</MenuItem>
                      <MenuItem value={1}>1 à 5 ans</MenuItem>
                      <MenuItem value={2}>6 à 10 ans</MenuItem>
                      <MenuItem value={3}>plus de 10 ans</MenuItem>
                      <MenuItem value={4}>Indifférent</MenuItem>
                    </Select>
                  </FormControl>
                )}
              <FormControlLabel
                control={(
                  <Checkbox id="checkbox_child" />

                )}
                label="Avez-vous des enfants ?"
                value={childValue}
                onChange={handleChangeChild}
              />
              <FormControlLabel
                control={(
                  <Checkbox id="checkbox_others" />

                )}
                label="Avez-vous d'autres animaux ?"
                value={othersValue}
                onChange={handleChangeOthers}
              />
              <FormControlLabel
                control={(
                  <Checkbox id="checkbox_garden" />

                )}
                label="Avez-vous un jardin ?"
                value={gardenValue}
                onChange={handleChangeGarden}
              />
              {locError
                ? (
                  <FormControl fullWidth error>
                    <InputLabel id="location-select-label-error" sx={{ mt: 1 }}>Zone géographique</InputLabel>
                    <Select
                      labelId="location-select-label-error"
                      id="location-select-error"
                      name="department"
                      value={locValue}
                      label="species"
                      onChange={handleChangeLoc}
                      sx={{ mt: 2 }}
                    >
                      <ListSubheader>Pays</ListSubheader>
                      <MenuItem value={0}>
                        <em>France entière</em>
                      </MenuItem>
                      <ListSubheader>Départements</ListSubheader>
                      {departments.map((item) => (
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Merci de renseigner ce champ</FormHelperText>
                  </FormControl>
                )
                : (
                  <FormControl fullWidth>
                    <InputLabel id="location-select-label" sx={{ mt: 1 }}>Zone géographique</InputLabel>
                    <Select
                      labelId="location-select-label"
                      id="location-select"
                      name="department"
                      value={locValue}
                      label="species"
                      onChange={handleChangeLoc}
                      sx={{ mt: 2 }}
                    >
                      <ListSubheader>Pays</ListSubheader>
                      <MenuItem value={0}>
                        <em>France entière</em>
                      </MenuItem>
                      <ListSubheader>Départements</ListSubheader>
                      {departments.map((item) => (
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              <FormControlLabel
                control={(
                  <Checkbox id="checkbox_avaible" />

                )}
                label="Inclure les animaux en cours de réservation"
                value={statusValue}
                onChange={handleChangeStatus}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
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
