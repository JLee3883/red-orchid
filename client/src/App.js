import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Signup from "./pages/LogIn/Signup";
import Dashboard from "./pages/dashboard";
import { Calendar } from "react-modern-calendar-datepicker";
import "../src/pages/Profile/Calendar/Calendar.css";
import "./App.css";
import Tracker from "./components/Tracker/Tracker";
import Profile from "./pages/Profile/Profile/Profile";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <body>
        <Router>
          <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/tracker" element={<Tracker />} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </Router>
    </body>
      </ApolloProvider>
  );
}

export default App;
