import React from "react";

import { Card, Button } from "react-bootstrap";
import FormField from "../Forms/FormField";
import Comment from "../Comment/Comment";


const BlogCard = () => {
  return (
    <Card style={{ width: "30rem", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title className="cardTitle">Card Title</Card.Title>
        <Card.Subtitle href="#" className="mb-2 text-muted cardAuthor">
          Card Author
        </Card.Subtitle>
        <Card.Text className="blogText">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Comment /> */}
      </Card.Body>
      {/* //import the comment input component here and make sure that they are logged in*/}
      {/* <FormField isMultiLine label="Comment"/> */}
    </Card>
  );
};


export default BlogCard;
