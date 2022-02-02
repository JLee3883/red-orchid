import FormField from "../components/Forms/FormField";
import IconCard from "../components/dashboard/IconCard/IconCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChessQueen } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/navbar/NavBar";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  // const matchupList = data?.matchups || [];

  return (
    <div>
      <NavBar/>
      <FormField label="Email" />
      <FormField label="Password" />
    </div>
  );
};

export default Home;
