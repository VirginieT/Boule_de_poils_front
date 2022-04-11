import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import {
  changeNameField,
  changeDescriptionField,
  changeSirenField,
  changeStreetField,
  changeZipCodeField,
  changeCityField,
  changePhoneNumberField,
  changeEmailField,
  fetchGeoloc,
  formSubmit,
  changeNameError,
  changeDescriptionError,
  changeSirenError,
  changeStreetError,
  changeZipCodeError,
  changeCityError,
  changePhoneNumberError,
  changeEmailError,
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
  const nameError = useSelector((state) => state.FormReducer.nameError);
  const descriptionError = useSelector((state) => state.FormReducer.descriptionError);
  const sirenError = useSelector((state) => state.FormReducer.sirenError);
  const streetError = useSelector((state) => state.FormReducer.streetError);
  const zipCodeError = useSelector((state) => state.FormReducer.zipCodeError);
  const cityError = useSelector((state) => state.FormReducer.cityError);
  const phoneNumberError = useSelector((state) => state.FormReducer.phoneNumberError);
  const emailError = useSelector((state) => state.FormReducer.emailError);

  const nameValidate = (nameVerify) => {
    const nameFormat = /^[a-zA-Z0-9 .-]+$/;
    if (nameVerify.length > 0 && nameVerify.match(nameFormat)) {
      const action = changeNameError(streetError, false);
      dispatch(action);
    }
    else {
      const action = changeNameError(nameError, true);
      dispatch(action);
    }
  };

  const handleChangeName = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeNameField(name, inputValue);
    dispatch(action);
    nameValidate(inputValue);
  };

  const descriptionValidate = (descriptionVerify) => {
    const descriptionFormat = /^[a-zA-Z0-9 .-]+$/;
    if (descriptionVerify.length >= 0 && descriptionVerify.match(descriptionFormat)) {
      const action = changeDescriptionError(descriptionError, false);
      dispatch(action);
    }
    else {
      const action = changeDescriptionError(descriptionError, true);
      dispatch(action);
    }
  };

  const handleChangeDescription = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeDescriptionField(name, inputValue);
    dispatch(action);
    descriptionValidate(inputValue);
  };

  const sirenValidate = (sirenVerify) => {
    const sirenFormat = /^([0-9]){9}$/;
    if (sirenVerify.length === 9 && sirenVerify.match(sirenFormat)) {
      const action = changeSirenError(sirenError, false);
      dispatch(action);
    }
    else {
      const action = changeSirenError(sirenError, true);
      dispatch(action);
    }
  };

  const handleChangeSiren = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeSirenField(name, parseInt(inputValue, 10));
    dispatch(action);
    sirenValidate(inputValue);
  };


  const streetValidate = (streetVerify) => {
    const streetFormat = /^[a-zA-Z0-9 .-]+$/;
    if (streetVerify.length > 5 && streetVerify.match(streetFormat)) {
      const action = changeStreetError(streetError, false);
      dispatch(action);
    }
    else {
      const action = changeStreetError(streetError, true);
      dispatch(action);
    }
  };

  const handleChangeStreet = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeStreetField(name, inputValue);
    dispatch(action);
    streetValidate(inputValue);
  };

  const zipCodeValidate = (zipCodeVerify) => {
    const zipCodeFormat = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
    if (zipCodeVerify.length >= 3 && zipCodeVerify.match(zipCodeFormat)) {
      const action = changeZipCodeError(zipCodeError, false);
      dispatch(action);
    }
    else {
      const action = changeZipCodeError(zipCodeError, true);
      dispatch(action);
    }
  };

  const handleChangeZipCode = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeZipCodeField(name, parseInt(inputValue, 10));
    dispatch(action);
    zipCodeValidate(inputValue);
  };

  const cityValidate = (cityVerify) => {
    const cityFormat = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    if (cityVerify.length > 0 && cityVerify.match(cityFormat)) {
      const action = changeCityError(cityError, false);
      dispatch(action);
    }
    else {
      const action = changeCityError(cityError, true);
      dispatch(action);
    }
  };

  const handleChangeCity = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeCityField(name, inputValue);
    dispatch(action);
    cityValidate(inputValue);
  };

  const phoneNumberValidate = (phoneNumberVerify) => {
    const phoneFormat = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    if (phoneNumberVerify.length > 0 && phoneNumberVerify.match(phoneFormat)) {
      const action = changePhoneNumberError(phoneNumberError, false);
      dispatch(action);
    }
    else {
      const action = changePhoneNumberError(phoneNumberError, true);
      dispatch(action);
    }
  };

  const handleChangePhoneNumber = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changePhoneNumberField(name, inputValue);
    dispatch(action);
    phoneNumberValidate(inputValue);
  };

  const emailValidate = (emailVerify) => {
    const mailFormat = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    if (emailVerify.length > 0 && emailVerify.match(mailFormat)) {
      const action = changeEmailError(emailError, false);
      dispatch(action);
    }
    else {
      const action = changeEmailError(emailError, true);
      dispatch(action);
    }
  };

  const handleChangeEmail = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeEmailField(name, inputValue);
    dispatch(action);
    emailValidate(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const data = new FormData(event.currentTarget);
    const streetSplit = streetValue.split(' ');
    const street = streetSplit.join('+');
    const zipCode = zipCodeValue.toString();
    dispatch(fetchGeoloc(street, zipCode));
    if (
      nameError === false
      &&
      descriptionError === false
      &&
      sirenError === false
      &&
      streetError === false
      &&
      zipCodeError === false
      &&
      cityError === false
      &&
      phoneNumberError === false
      &&
      emailError === false
    ) {
      dispatch(formSubmit());
    }
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
            id="outlined-required"
            label="Nom"
            value={nameValue}
            onChange={handleChangeName}
          />
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            type="number"
            id="outlined-required"
            label="Numéro SIREN"
            value={sirenValue}
            onChange={handleChangeSiren}
          />
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 2 }}>Description de l'association</FormLabel>
            <TextareaAutosize
              required
              aria-label="minimum height"
              minRows={10}
              placeholder=""
              value={descriptionValue}
              onChange={handleChangeDescription}
            />
          </FormControl>
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="outlined-required"
            label="Adresse"
            value={streetValue}
            onChange={handleChangeStreet}
          />
          <TextField
            sx={{
              mt: 2,
              mr: 1,
              width: '47%',
            }}
            id="outlined-required"
            type="number"
            label="Code Postal"
            value={zipCodeValue}
            onChange={handleChangeZipCode}
          />
          <TextField
            sx={{
              mt: 2,
              ml: 1,
              width: '47%',
            }}
            id="outlined-required"
            label="Ville"
            value={cityValue}
            onChange={handleChangeCity}
          />
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="outlined-required"
            label="Numéro de téléphone"
            value={phoneNumberValue}
            onChange={handleChangePhoneNumber}
          />
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="outlined-required"
            label="Adresse courriel"
            value={emailValue}
            onChange={handleChangeEmail}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enregistrer l'association
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
