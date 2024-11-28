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
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center z-50 animate-fade-in">
      <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-3xl w-11/12 max-w-lg shadow-2xl backdrop-blur-lg animate-slide-in">
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            Book an Appointment
          </h3>
          <button
            className="text-2xl text-gray-500 hover:text-red-600 transition-transform transform hover:rotate-90"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="space-y-5">
          {/* Title Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
              placeholder="Enter appointment title"
            />
          </div>
          {/* Start Date & Time Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">
              Select Date & Time
            </label>
            <input
              type="datetime-local"
              name="start"
              value={newEvent.start}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
              min={new Date().toISOString().slice(0, 16)}
            />
          </div>
          {/* End Date & Time Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">
              End Date & Time
            </label>
            <input
              type="datetime-local"
              name="end"
              value={newEvent.end}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
              min={newEvent.start || new Date().toISOString().slice(0, 16)}
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            className="px-5 py-2 bg-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-300 hover:text-gray-800 transition transform hover:scale-105"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition transform hover:scale-105"
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

