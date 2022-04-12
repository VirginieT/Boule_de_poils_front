import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAnimals } from 'src/actions/animalSearched';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';

import Loader from '../Loader';
import './dashboardAnimal.scss';

const DashboardAnimal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllAnimals());
  }, []);

  const allAnimalProfiles = useSelector((state) => (state.SearchedAnimals.animalResults));

  console.log(allAnimalProfiles);

  return (
    <div className="dashboard">
      {allAnimalProfiles.length > 0 ? (
        <Container maxWidth="lg">
          <h1>Les Animaux</h1>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nom</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Photo</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Compatible enfants ?</TableCell>
                <TableCell>Compatible autres animaux ?</TableCell>
                <TableCell>Besoin de jardin ?</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {allAnimalProfiles.map((animal) => (
                <TableRow key={animal.id}>
                  <TableCell>{animal.id}</TableCell>
                  <TableCell>{animal.name}</TableCell>
                  <TableCell>{animal.gender}</TableCell>
                  <TableCell><img className="dashboard__picture" src={animal.picture} alt="" /></TableCell>
                  <TableCell>{animal.age}</TableCell>
                  <TableCell>{animal.child_compatibility}</TableCell>
                  <TableCell>{animal.other_animal_compatibility}</TableCell>
                  <TableCell>{animal.garden_needed}</TableCell>
                  <TableCell>{animal.status}</TableCell>
                  <TableCell>{animal.description}</TableCell>
                  <TableCell align="right">d</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      )
        : <Loader />}
    </div>
  );
};

export default DashboardAnimal;
