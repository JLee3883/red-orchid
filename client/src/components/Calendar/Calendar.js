import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { Card } from "react-bootstrap";

const Calendar = () => {
  const defaultValue = {
    year: 2019,
    month: 10,
    day: 5,
  };

  const [selectedDay, setSelectedDay] = useState(defaultValue);
  return (
    <>
    <div className="body"> 
    <Card.Body>
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
    </Card.Body>
    </div>
    </>
  );
};

export default Calendar;