import React from "react";
import moment from "moment";

const EventList = ({ events }) => {
  const todayEvents = events.filter((event) =>
    moment(event.start).isSame(new Date(), "day")
  );

  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-3">
        Upcoming Events
      </h2>
      <ul className="list-none p-0 m-0 max-h-96 overflow-y-auto">
        {todayEvents.length > 0 ? (
          todayEvents.map((event) => (
            <li
              key={event.id}
              className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 mb-3 rounded-lg border-l-4 border-indigo-600 transition-transform duration-300 hover:translate-x-1 hover:shadow-sm"
            >
              <strong className="block text-gray-900 text-lg mb-1">
                {event.title}
              </strong>
              <span className="text-gray-500 text-sm">
                {moment(event.start).format("h:mm A")} -{" "}
                {moment(event.end).format("h:mm A")}
              </span>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500 italic py-5">
            No events today!
          </li>
        )}
      </ul>
    </div>
  );
};

export default EventList;
