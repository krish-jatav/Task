import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi2';
import { services as defaultServices } from './ServiceData'; // Import default services data
import ServiceForm from './form/AddService';
import { itemNames } from './ServiceData'; // Assuming itemNames is also exported from ServiceData
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';

function Service() {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState(defaultServices); // Initialize with default data
  const [editIndex, setEditIndex] = useState(null);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
    if (showForm) {
      setEditIndex(null); // Reset edit index when hiding form
    }
  };

  const addService = (newService) => {
    if (editIndex !== null) {
      // Update existing service
      const updatedServices = services.map((service, index) =>
        index === editIndex ? newService : service
      );
      setServices(updatedServices);
    } else {
      // Add new service
      setServices([...services, newService]);
    }
    setShowForm(false);
    setEditIndex(null); // Reset edit index after saving
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div className="bg-[#f5f6fa]  p-4 sm:p-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold">Service</h1>
        <button
          onClick={toggleFormVisibility}
          disabled={showForm} 
          aria-label="Add Service"
          className="bg-blue-600 flex items-center px-3 py-2 text-white rounded-md mt-4 sm:mt-0"
        >
          <span className="mr-2">
            <HiPlus />
          </span>
          Add Service
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
        <div className="border-b border-gray-200">

          <div className="grid grid-cols-1 sm:grid-cols-6 text-xs sm:text-sm justify-between items-center border-b py-2 px-4 text-center font-semibold">
            {itemNames.map((item, indx) => (
              <div key={indx} className="truncate">{item.items}</div>
            ))}
            <div className="w-20"></div>
          </div>


          {services.length > 0 ? (
            services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-6 text-xs sm:text-sm w-full border-b py-4 px-2 sm:px-4 items-center text-center"
              >
                <img
                  src={service.imgUrl}
                  alt={service.serviceName}
                  className="w-full sm:w-[140px] h-auto sm:h-[80px] rounded-lg object-cover mb-2 sm:mb-0"
                />
                <span className="truncate">{service.serviceName}</span>
                <span className="truncate">{service.price}</span>
                <span className="truncate">{service.duration}</span>
                <span className="truncate">{service.description}</span>
                <div className="flex justify-center space-x-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-[#fafbfd] text-black border p-2 rounded-md flex items-center"
                    aria-label="Edit Service"
                  >
                    <FaRegEdit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-[#fafbfd] text-red-600 border p-2 rounded-md flex items-center"
                    aria-label="Delete Service"
                  >
                    <RiDeleteBin2Line size={16} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">No services added yet.</div>
          )}
        </div>

        {/* Conditionally render the Service Form */}
        {showForm && (
          <div className="mt-8">
            <ServiceForm
              addService={addService}
              existingService={editIndex !== null ? services[editIndex] : null}
              closeForm={toggleFormVisibility} // Close form when done
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Service;
