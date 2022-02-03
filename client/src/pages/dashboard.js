import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import BlogCard from "../components/BlogCard/BlogCard";
import CreateBlog from "../components/CreateBlog/CreateBlog";
import NavBar from "../components/navbar/NavBar";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <CreateBlog />
      <BlogCard />
    </div>
  );
};

export default Dashboard;
