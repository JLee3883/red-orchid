import React, {useEffect} from "react";
import { QUERY_FLOWTALK } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
import FormField from "../Forms/FormField";
import Comment from "../Comment/Comment";

const BlogCard = () => {
  const { loading, data } = useQuery(QUERY_FLOWTALK);
  let flowTalkData = data?.flowTalks || [];
  
  // useEffect(()=>{
  //   // flowTalkData = flowTalkData.reverse()
  // },[flowTalkData])

  console.log(flowTalkData);
  return (
    <>
      {loading
        ? "loading.."
        : [...flowTalkData].reverse().map((flowTalk) => {
            return (
              <Card style={{ width: "30rem", margin: "40px auto" }}>
                <Card.Body>
                  <Card.Title className="cardTitle">{flowTalk.flowTalkTitle}</Card.Title>
                  <Card.Subtitle
                    href="#"
                    className="mb-2 text-muted cardAuthor"
                  >
                    {flowTalk.flowTalkAuthor}
                  </Card.Subtitle>
                  <Card.Text className="blogText">
                    {flowTalk.flowTalkText}
                  </Card.Text>
                  {/* <Comment /> */}
                </Card.Body>
                {/* //import the comment input component here and make sure that they are logged in*/}
                {/* <FormField isMultiLine label="Comment"/> */}
              </Card>
            );
          })}
    </>
  );
};

export default BlogCard;
