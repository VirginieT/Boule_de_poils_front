import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider';
import './uploader.scss';

const Input = styled('input')({
  display: 'none',
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

import { changePictureField, } from '../../actions/animalSearched';

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Uploader() {
  const pictureValue = useSelector((state) => state.SearchedAnimals.picture);
  const dispatch = useDispatch();

  const handleChangePicture = (event) => {
    //setSpecies(event.target.value);
    const { value: inputValue, name } = event.target;
    const action = changePictureField(name, inputValue);
    dispatch(action);
  };

  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const validateFile = (e) => {
    // cibler l'input d'upload et sa valeur
    const fileInput = document.getElementById('contained-button-file');
    const filePath = fileInput.value;
    // définir les extensions authorisées avec une regex
    const allowedExtensions = /(\.jpg|\.jpeg)$/i;

    // si le nombre de fichier est suppérieur à 1, alors erreur
    if (e.target.files.length > 1) {
      alert('Vous ne pouvez uploader qu\'une photo !');
      fileInput.value = '';
    }
    // si l'extension du fichier n'est pas autorisée, alors erreur
    else if (!allowedExtensions.exec(filePath)) {
      alert('Le format de fichier est invalide !');
      fileInput.value = '';
    }
  };

  const onSelectFile = (event) => {
    validateFile(event);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener('load', () => {
        setImage(reader.result);
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onDownload = () => {
    generateDownload(image, croppedArea);
    handleClose();
  };

  return (
    <FormControl>
      {image ? (
        <Box>
          <img src='' alt="bidulle" />
        </Box>
      ) : null}
      <Button variant="contained" color="secondary" onClick={handleClickOpen} sx={{ mt: 2 }}>
        Télécharger une photo
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Choisissez et recadrez une photo
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Container className="container">
            {image ? (
              <>
                <Box className="cropper">
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </Box>

                <Box className="slider">
                  <Slider
                    min={1}
                    max={3}
                    step={0.1}
                    value={zoom}
                    onChange={(e, zoom) => setZoom(zoom)}
                  />
                </Box>
              </>
            ) : null}
          </Container>
        </DialogContent>
        <DialogActions>
          <FormControl>
            <label htmlFor="contained-button-file">
              {/* eslint-disable-next-line react/jsx-no-bind */}
              <Input accept=".jpg,.jpeg" id="contained-button-file" type="file" ref={inputRef} onChange={onSelectFile} />
              <Button className="container-buttons" variant="contained" component="span" color="primary" fullWidth onClick={triggerFileSelectPopup}>
                Choisir une photo
              </Button>
            </label>
          </FormControl>
          <Button variant="contained" className="container-buttons" color="secondary" onClick={onDownload}>
            Télécharger
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </FormControl>
  );
}
