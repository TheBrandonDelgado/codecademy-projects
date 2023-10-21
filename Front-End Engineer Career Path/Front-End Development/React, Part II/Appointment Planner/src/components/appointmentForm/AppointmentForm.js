import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={({ target }) => setDate(target.value)}
          min={getTodayString}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={({ target }) => setTime(target.value)}
        />
        <ContactPicker contacts={contacts} handleChange={({ target }) => setContact(target.value)} value={contact} name={contact.name}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
