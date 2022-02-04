import React, { useEffect } from "react";
import { QUERY_FLOWTALK } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
import FormField from "../Forms/FormField";
import Comment from "../Comment/Comment";
import Auth from "../../utils/auth";
import { REMOVE_FLOWTALK } from "../../utils/mutations";

const BlogCard = () => {
  const { loading, data } = useQuery(QUERY_FLOWTALK);
  let flowTalkData = data?.flowTalks || [];
  const [removeFlowTalk, { error }] = useMutation(REMOVE_FLOWTALK);
  const handleDelete = async (flowTalkId) => {
    const { data } = await removeFlowTalk({
      variables: { flowTalkId },
    });
    window.location.reload();
  };

  // useEffect(()=>{
  //   // flowTalkData = flowTalkData.reverse()
  // },[flowTalkData])
  console.log(Auth.getProfile());
  console.log(flowTalkData);
  return (
    <>
      {loading
        ? "loading.."
        : [...flowTalkData].reverse().map((flowTalk) => {
            return (
              <Card style={{ width: "30rem", margin: "40px auto" }}>
                <Card.Body>
                  <Card.Title className="cardTitle">
                    {flowTalk.flowTalkTitle}
                  </Card.Title>
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
                  {Auth.getProfile().data.username ===
                  flowTalk.flowTalkAuthor ? (
                    <Button
                      className="deleteButton"
                      type="submit"
                      variant="danger"
                      onClick={() => handleDelete(flowTalk._id)}
                      style={{
                        margin: "20px",
                        marginLeft: "230px",
                        backgroundColor: "pink",
                        borderColor: "palevioletred",
                        color: "black",
                      }}
                    >
                      Delete Talk
                    </Button>
                  ) : (
                    ""
                  )}
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
