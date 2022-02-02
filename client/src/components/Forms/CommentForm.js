import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ flowTalktId }) => {
    const [commentText, setCommentText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
  
    const [addComment, { error }] = useMutation(ADD_COMMENT);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addComment({
          variables: {
            flowTalktId,
            commentText,
            commentAuthor: Auth.getProfile().data.username,
          },
        });
  
        setCommentText('');
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === 'commentText' && value.length <= 280) {
        setCommentText(value);
        setCharacterCount(value.length);
      }
    };
  
    return (
      <div>
        <h4>Have any comments?</h4>
  
        {Auth.loggedIn() ? (
          <>
            
          </>
        ) : (
          <p>
            You need to be logged in to comment! Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    );
};


export default CommentForm;