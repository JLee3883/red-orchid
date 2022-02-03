import React from 'react';
import { Card } from 'react-bootstrap';
import { Calendar } from 'react-modern-calendar-datepicker';
import NavBar from '../../../components/navbar/NavBar';
import Tracker from '../../../components/Tracker/Tracker';
import "../Profile/Profile.css";
import "../Calendar/Calendar.css";



const Profile = () => {

  return (
    <>
    <NavBar/>
      <Card className='cal-new'>
        <Calendar className="cal-pro"/>
      </Card>

      <Card className='trc-new'>
        <Tracker/>
      </Card>  
    </>
  );
};


export default Profile;

