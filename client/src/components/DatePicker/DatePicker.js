import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const formatInputValue = () => {
    if (!selectedDay) return '';
    return `Day: ${selectedDay.day}`;
  };

  return (
    <DatePicker className="datepicker"
      value={selectedDay}
      onChange={setSelectedDay}
      inputPlaceholder="Select a date" // placeholder
      formatInputText={formatInputValue} // format value
      inputClassName="my-custom-input" // custom class
      shouldHighlightWeekends
    />
  );
};

export default DatePicker;