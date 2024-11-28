import React from "react";
import moment from "moment";

const SummaryPage = ({ events }) => {
  const todayEvents = events.filter(event =>
    moment(event.start).isSame(new Date(), 'day')
  );

  const upcomingEvents = events.filter(event =>
    moment(event.start).isAfter(new Date())
  ).slice(0, 5);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-3 mb-6">Summary</h2>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg text-center">
          <div className="text-indigo-500 text-2xl font-bold mb-2">{todayEvents.length}</div>
          <div className="text-gray-500 text-sm">Today's Events</div>
        </div>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg text-center">
          <div className="text-indigo-500 text-2xl font-bold mb-2">{upcomingEvents.length}</div>
          <div className="text-gray-500 text-sm">Upcoming</div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Next Events</h3>
        {upcomingEvents.map(event => (
          <div
            key={event.id}
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg mb-3 hover:transform hover:translate-x-2 transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <div className="flex-1">
              <div className="text-gray-800 font-medium">{event.title}</div>
              <div className="text-gray-500 text-sm">
                {moment(event.start).format('MMM D, h:mm A')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPage;

