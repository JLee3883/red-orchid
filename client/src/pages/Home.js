import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import FormField from '../components/Forms/FormField';

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
