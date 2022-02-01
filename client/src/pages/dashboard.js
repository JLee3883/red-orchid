import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import BlogCard from '../components/BlogCard/BlogCard';

const Dashboard = () => {
return(
    <BlogCard />
    ) 

}

export default Dashboard