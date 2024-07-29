import React, { useRef, useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "firebase/compat/database";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminDashBoard = () => {
  const calendarRef = useRef(null);

  const [country, setCountry] = useState("");
  const [tourDate, setTourDate] = useState("");
  const [numberOfPassenger, setNumberOfPassenger] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [countryTotals, setCountryTotals] = useState({});
  const [bookedTours, setBookedTours] = useState({});

  const countryColors = {
    "United States": "#1f77b4",
    Malaysia: "#ff7f0e",
    Switzerland: "#2ca02c",
    Italy: "#d62728",
    Paris: "#9467bd",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const database = firebase.database();
        const snapshot = await database.ref("Booked_TOUR").once("value");
        const eventData = snapshot.val() || {};
        const events = [];
        const totals = {};

        Object.keys(eventData).forEach((eventId) => {
          const event = eventData[eventId];
          const country = event.country;

          // Add the event to the calendar events array
          events.push({
            id: eventId,
            title: `${country} (${event.numberOfPassenger})`,
            start: new Date(event.tourDate),
            allDay: true,
            backgroundColor: countryColors[country] || "#6998ab",
          });

          // Calculate the totals for each country
          if (totals[country]) {
            totals[country] += 1;
          } else {
            totals[country] = 1;
          }
        });

        setCalendarEvents(events);
        setCountryTotals(totals);
        setBookedTours(eventData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const database = firebase.database();
      const ref = database.ref("Booked_TOUR");
      const newEventRef = ref.push();

      await newEventRef.set({
        country,
        tourDate,
        numberOfPassenger,
      });

      // Add the new event to the calendar
      setCalendarEvents((prevEvents) => [
        ...prevEvents,
        {
          id: newEventRef.key,
          title: `${country} (${numberOfPassenger})`,
          start: new Date(tourDate),
          allDay: true,
          backgroundColor: countryColors[country] || "#6998ab",
        },
      ]);

      // Update the totals
      setCountryTotals((prevTotals) => ({
        ...prevTotals,
        [country]: (prevTotals[country] || 0) + 1,
      }));

      // Update the booked tours
      setBookedTours((prevTours) => ({
        ...prevTours,
        [newEventRef.key]: { country, tourDate, numberOfPassenger },
      }));

      setCountry("");
      setTourDate("");
      setNumberOfPassenger("");
      setSuccessMessage("Tour booked successfully.");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error booking a Tour. Please try again.");
      console.error("Error booking event:", error);
      setSuccessMessage("");
    }
  };

  const handleDelete = async (eventId) => {
    try {
      const database = firebase.database();
      await database.ref(`Booked_TOUR/${eventId}`).remove();

      // Remove the event from the calendar
      setCalendarEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );

      // Update the totals
      const deletedEvent = bookedTours[eventId];
      setCountryTotals((prevTotals) => {
        const newTotals = { ...prevTotals };
        if (newTotals[deletedEvent.country] > 1) {
          newTotals[deletedEvent.country] -= 1;
        } else {
          delete newTotals[deletedEvent.country];
        }
        return newTotals;
      });

      // Remove from booked tours
      setBookedTours((prevTours) => {
        const newTours = { ...prevTours };
        delete newTours[eventId];
        return newTours;
      });

      setSuccessMessage("Tour deleted successfully.");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error deleting the Tour. Please try again.");
      console.error("Error deleting event:", error);
      setSuccessMessage("");
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-md-8">
          <div className="mb-4">
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={"dayGridMonth"}
              headerToolbar={{
                start: "today prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              height={"75vh"}
              // width={"100vh"}
              events={calendarEvents}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="input1" className="form-label">
                  Destination
                </label>
                <select
                  className="form-select"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Select the Country</option>
                  <option value="United States">United States</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Italy">Italy</option>
                  <option value="Paris">Paris</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="tourDate" className="form-label">
                  Tour Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="tourDate"
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="numberOfPassenger" className="form-label">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="numberOfPassenger"
                  value={numberOfPassenger}
                  onChange={(e) => setNumberOfPassenger(e.target.value)}
                  placeholder="Enter No of passengers"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Book a Tour
              </button>
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-center">Total Booked Tours per Country</h3>
        <div className="d-flex justify-content-center">
          <ul className="list-group list-group-horizontal">
            {Object.keys(countryTotals).map((country) => (
              <li
                key={country}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: countryColors[country] || "#6998ab",
                  margin: "0 5px",
                }}
              >
                {country}
                <span className="badge rounded-pill">
                  {countryTotals[country]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-center">Booked Tours</h3>
        <div className="d-flex justify-content-center">
          <table className="table table-bordered" style={{ width: "90%" }}>
            <thead>
              <tr>
                <th>Country</th>
                <th>Tour Date</th>
                <th>Number of Passengers</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(bookedTours).map((eventId) => {
                const event = bookedTours[eventId];
                const formattedDate = new Date(
                  event.tourDate
                ).toLocaleDateString("en-GB"); // Format date as dd-mm-yyyy

                return (
                  <tr key={eventId}>
                    <td>{event.country}</td>
                    <td>{formattedDate}</td> {/* Display formatted date */}
                    <td>{event.numberOfPassenger}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(eventId)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
