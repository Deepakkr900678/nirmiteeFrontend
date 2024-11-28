import React from "react";
import moment from "moment";

const SummaryPage = ({ events }) => {
  const todayEvents = events.filter(event =>
    moment(event.start).isSame(new Date(), "day")
  );

  const upcomingEvents = events
    .filter(event => moment(event.start).isAfter(new Date()))
    .slice(0, 5);

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">
        Summary
      </h2>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg text-center shadow-md">
          <div className="text-blue-600 text-3xl font-extrabold mb-2">
            {todayEvents.length}
          </div>
          <div className="text-gray-700 text-sm font-medium">Today's Events</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-lg text-center shadow-md">
          <div className="text-yellow-500 text-3xl font-extrabold mb-2">
            {upcomingEvents.length}
          </div>
          <div className="text-gray-700 text-sm font-medium">Upcoming</div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Events</h3>
        {upcomingEvents.map(event => (
          <div
            key={event.id}
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-100 via-white to-gray-50 rounded-lg shadow hover:scale-105 transition-transform duration-300 mb-3"
          >
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="flex-1">
              <div className="text-gray-800 font-semibold">{event.title}</div>
              <div className="text-gray-600 text-sm">
                {moment(event.start).format("MMM D, h:mm A")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPage;
