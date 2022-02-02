
import FormField from "../components/Forms/FormField";
import IconCard from "../components/dashboard/IconCard/IconCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChessQueen } from "@fortawesome/free-solid-svg-icons";

<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
=======

>>>>>>> main


const Home = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  // const matchupList = data?.matchups || [];

  return (
    <div>
    <FormField label="Email"/>
    <FormField label="Password"/>
    </div>
  );
};

export default Home;
