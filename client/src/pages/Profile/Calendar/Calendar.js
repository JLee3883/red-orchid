import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "../../Profile/Calendar/Calendar.css";

const Calendar = () => {
  const defaultValue = {
    year: 2022,
    month: 10,
    day: 5,
  };

  const [selectedDay, setSelectedDay] = useState(defaultValue);
  return (
    <>
    <Card className="tracker-card" style={{ margin: "0 auto", background: "white" }}>
      <Card.Body>
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      colorPrimary="#9c88ff" // added this
      calendarClassName="custom-calendar" // and this
      calendarTodayClassName="custom-today-day" // also this
      shouldHighlightWeekends
    />
    </Card.Body>
    </Card>

    </>
  );
};

export default Calendar;