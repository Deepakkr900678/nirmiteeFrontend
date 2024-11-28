import React from "react";

const CreateEventModal = ({
  showModal,
  newEvent,
  handleInputChange,
  handleSubmitNewEvent,
  closeModal,
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50 animate-fade-in">
      <div className="bg-white bg-opacity-90 p-6 rounded-2xl w-11/12 max-w-lg shadow-2xl backdrop-blur-md animate-slide-in">
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-4">
          <h3 className="text-xl font-bold text-gray-800">Book an Appointment</h3>
          <button
            className="text-2xl text-gray-400 hover:text-red-600 transition-colors"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              placeholder="Appointment Title"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Select Date & Time</label>
            <input
              type="datetime-local"
              name="start"
              value={newEvent.start}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              min={new Date().toISOString().slice(0, 16)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">End Date & Time</label>
            <input
              type="datetime-local"
              name="end"
              value={newEvent.end}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              min={newEvent.start || new Date().toISOString().slice(0, 16)}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition transform hover:scale-105"
            onClick={handleSubmitNewEvent}
          >
            Save Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;
