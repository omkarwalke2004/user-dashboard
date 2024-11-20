import React from 'react';

const Card = ({ user, onClick, onDelete, onEdit, isSelected, toggleSelect }) => {
  return (
    <div
      onClick={() => onClick(user.id)} // Card click navigates to user details
      className={`p-6 border rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300 bg-white cursor-pointer ${
        isSelected ? 'bg-gray-100' : ''
      }`}
    >
      {/* Checkbox and User Info */}
      <div className="flex items-center mb-4">
        {/* Checkbox for Selection */}
        <input
          type="checkbox"
          checked={isSelected}
          onClick={(e) => e.stopPropagation()} // Prevent card click
          onChange={() => toggleSelect(user.id)} // Handle selection toggle
          className="mr-4"
          aria-label={`Select ${user.name}`}
        />
        <div>
          <h3 className="font-semibold text-xl text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* User Address and Company */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          City: <span className="font-medium text-gray-700">{user.address.city}</span>
        </p>
        <p className="text-sm text-gray-500">
          Company: <span className="font-medium text-gray-700">{user.company.name}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            onEdit(user.id);
          }}
          aria-label={`Edit details for ${user.name}`}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            onDelete(user.id);
          }}
          aria-label={`Delete ${user.name}`}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
