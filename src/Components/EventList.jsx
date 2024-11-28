import React from "react";
import moment from "moment";

const EventList = ({ events }) => {
  const todayEvents = events.filter((event) =>
    moment(event.start).isSame(new Date(), "day")
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-3">
        Upcoming Events
      </h2>
      <ul className="list-none p-0 m-0 max-h-96 overflow-y-auto">
        {todayEvents.length > 0 ? (
          todayEvents.map((event) => (
            <li
              key={event.id}
              className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-5 mb-4 rounded-lg border-l-4 border-indigo-500 hover:bg-indigo-200 transition-transform duration-300 hover:translate-x-2 hover:shadow-md"
            >
              <strong className="block text-gray-800 text-lg font-semibold mb-1">
                {event.title}
              </strong>
              <span className="text-gray-600 text-sm">
                {moment(event.start).format("h:mm A")} -{" "}
                {moment(event.end).format("h:mm A")}
              </span>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500 italic py-6">
            No events today!
          </li>
        )}
      </ul>
    </div>
  );
};

export default EventList;

