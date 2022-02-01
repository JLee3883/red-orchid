import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (

    <ApolloProvider client={client} >
      <Router>
      <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/calendar" element={<DatePicker/>} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />

          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;



