import React, { useState, useEffect } from 'react';

function ServiceForm({ addService, existingService, closeForm }) {
  const [formData, setFormData] = useState({
    serviceImg: null,
    serviceName: '',
    price: '',
    duration: '',
    description: ''
  });
  const [imgPreview, setImgPreview] = useState(null);

  useEffect(() => {
    if (existingService) {
      setFormData({
        serviceImg: null, // Not using existing image for form submission
        serviceName: existingService.serviceName,
        price: existingService.price,
        duration: existingService.duration,
        description: existingService.description
      });
      setImgPreview(existingService.serviceImg); // Display existing image if available
    }
  }, [existingService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        serviceImg: file
      });
      setImgPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newService = {
      serviceImg: formData.serviceImg ? URL.createObjectURL(formData.serviceImg) : imgPreview,
      serviceName: formData.serviceName,
      price: formData.price,
      duration: formData.duration,
      description: formData.description
    };

    addService(newService);

    // Optionally reset form data and preview
    setFormData({
      serviceImg: null,
      serviceName: '',
      price: '',
      duration: '',
      description: ''
    });
    setImgPreview(null);
  };

  const handleCancel = () => {
    // Optionally reset form data and preview
    setFormData({
      serviceImg: null,
      serviceName: '',
      price: '',
      duration: '',
      description: ''
    });
    setImgPreview(null);

    if (closeForm) {
      closeForm(); // Notify parent component to hide the form
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
        <button
          type="button"
          onClick={handleCancel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            {existingService ? 'Edit Service' : 'Add a New Service'}
          </h2>
          {/* Service Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="serviceImg">
              Service Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="serviceImg"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {imgPreview && (
              <div className="mt-4">
                <img src={imgPreview} alt="Service Preview" className="w-32 h-32 object-cover rounded-md" />
              </div>
            )}
          </div>
          {/* Service Name */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="serviceName">
              Service Name
            </label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              placeholder="Enter Service Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* Price */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* Duration */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="duration">
              Duration (in hours)
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Enter Duration"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Description"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            />
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mb-2 sm:mb-0"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              {existingService ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceForm;
