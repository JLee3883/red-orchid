import React, { useState } from 'react';
import { Card, ModalBody, Nav, Tab } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';


const Home = () => {
  const [setShowCard] = useState(false);


  return (
    <>
<ModalBody className='page'>
      <Card>
        <Tab.Container defaultActiveKey='login'>
          <Card.Header closeButton>
            <Card.Title id='signup-Card'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='register'>Register</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Login handleCardClose={() => setShowCard(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='register'>
                <Register handleCardClose={() => setShowCard(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Tab.Container>
      </Card>
      </ModalBody>
    </>
  );
};

export default Home;
