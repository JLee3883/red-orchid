import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { CREATE_FLOWTALK } from '../../utils/mutations';
import { QUERY_FLOWTALK, QUERY_ME } from '../../utils/queries';

const FlowTalkForm = () => {
    const [FlowTalkText, setFlowTalkText] = useState('');
  
    const [characterCount, setCharacterCount] = useState(0);
  
    const [addFlowTalk, { error }] = useMutation(CREATE_FLOWTALK, {
      update(cache, { data: { addFlowTalk } }) {
        try {
          const { FlowTalk } = cache.readQuery({ query: CREATE_FLOWTALK });
  
          cache.writeQuery({
            query: CREATE_FLOWTALK,
            data: { FlowTalk: [addFlowTalk, ...FlowTalk] },
          });
        } catch (e) {
          console.error(e);
        }
  
        // update me object's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, FlowTalk: [...me.FlowTalk, addFlowTalk] } },
        });
      },
    });
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addFlowTalk({
          variables: {
            FlowTalkText,
            FlowTalktAuthor: Auth.getProfile().data.username,
          },
        });
  
        setFlowTalkText('');
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === 'FlowTalkText' && value.length <= 280) {
        setFlowTalkText(value);
        setCharacterCount(value.length);
      }
    };
  
    return (
      <div>
        <h3>What's on your techy mind?</h3>
  
        {Auth.loggedIn() ? (
          <>
            <p
              className={`m-0 ${
                characterCount === 280 || error ? 'text-danger' : ''
              }`}
            >
              Character Count: {characterCount}/280
            </p>
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
              <div className="col-12 col-lg-9">
                <textarea
                  name="FlowTalkText"
                  placeholder="Here's a new thought..."
                  value={FlowTalkText}
                  className="form-input w-100"
                  style={{ lineHeight: '1.5', resize: 'vertical' }}
                  onChange={handleChange}
                ></textarea>
              </div>
  
              <div className="col-12 col-lg-3">
                <button className="btn btn-primary btn-block py-3" type="submit">
                  Add Thought
                </button>
              </div>
              {error && (
                <div className="col-12 my-3 bg-danger text-white p-3">
                  {error.message}
                </div>
              )}
            </form>
          </>
        ) : (
          <p>
            You need to be logged in to share your thoughts. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    );
};

export default FlowTalkForm;