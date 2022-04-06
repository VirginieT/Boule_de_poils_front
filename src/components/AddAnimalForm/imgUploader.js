import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import './imgUploader.scss';

const Input = styled('input')({
  display: 'none',
});

const ImgUploader = () => {
  const [images, setImages] = useState([]);
  const [resizedImage, setResizedImage] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  // attente d'une image dans le state pour générer son URL
  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  // validation de la photo
  function onFileChange(e) {
    // cibler l'input d'upload et sa valeur
    const fileInput = document.getElementById('uploadEl');
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
    // si tout est ok, ajout dans le state grâce au spread-operator
    else {
      setImages([...e.target.files]);
    }
    e.target.value = null;
  }

  return (
    <>
      <div id="photo">
        { // création de balise img si présence d'URL dans le state
        imageURLs.map(imageSrc => <img src={imageSrc} />) }
      </div>
      <FormControl>
        <label htmlFor="contained-button-file">
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <Input accept=".jpg,.jpeg" id="contained-button-file" type="file" onChange={onFileChange}/>
          <Button variant="contained" component="span" color="secondary" fullWidth sx={{ mt: 3, mb: 2 }}>
            Télécharger une photo
          </Button>
        </label>
      </FormControl>
    </>
  );
};

export default ImgUploader;

