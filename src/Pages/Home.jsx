import React, { useEffect, useState } from 'react';
import Searchbar from '../Components/Searchbar';
import { fetchUsers } from '../utils/api';
import Card from '../Components/Card';
import Toast, { showToast } from '../Components/Toast';

const Home = () => {
  const [users, setUsers] = useState([]); // All users
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users for search
  const [selectedUsers, setSelectedUsers] = useState([]); // Track selected user IDs

  useEffect(() => {
    fetchUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers); // Initially, show all users
    });
  }, []);

  // Handle search by ID
  const handleSearch = (id) => {
    const result = users.filter((user) => user.id.toString() === id);
    setFilteredUsers(result.length ? result : users);
    if (!result.length) {
      showToast('User not found', 'error');
    }
  };

  // Handle card click (redirect to user details)
  const handleCardClick = (id) => {
    window.location.href = `/user/${id}`;
  };

  // Handle delete for a single user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
    setSelectedUsers(selectedUsers.filter((userId) => userId !== id)); // Remove from selected
    showToast('User deleted successfully', 'success');
  };

  // Handle edit action
  const handleEdit = (id) => {
    showToast(`Edit functionality for User ID: ${id}`, 'success');
  };

  // Toggle selection of a user
  const handleToggleSelect = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((userId) => userId !== id) // Deselect
        : [...prevSelected, id] // Select
    );
  };

  // Handle delete for selected users
  const handleDeleteSelected = () => {
    if (selectedUsers.length === 0) {
      showToast('No users selected for deletion', 'error');
      return;
    }

    const updatedUsers = users.filter((user) => !selectedUsers.includes(user.id));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedUsers([]); // Clear selection
    showToast('Selected users deleted successfully', 'success');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 animate-fadeIn">
      <Toast />
      <h1 className="text-4xl font-extrabold font-serif mb-4 tracking-wide">User Dashboard</h1>
      
      {/* Searchbar */}
      <Searchbar onSearch={handleSearch} />

      {/* Bulk Actions */}
      <div className="mb-4 flex justify-between">
        <div className="flex items-center">
          {/* Select All Checkbox */}
          <input
            type="checkbox"
            checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
            onChange={() => {
              if (selectedUsers.length === filteredUsers.length) {
                setSelectedUsers([]); // Deselect all
              } else {
                setSelectedUsers(filteredUsers.map((user) => user.id)); // Select all
              }
            }}
            className="mr-2"
          />
          <label>Select All</label>
        </div>
        {/* Delete Selected Button */}
        <button
          onClick={handleDeleteSelected}
          className={`px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 ${
            selectedUsers.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={selectedUsers.length === 0}
        >
          Delete Selected
        </button>
      </div>

      {/* Cards */}
      <div className="grid cursor-pointer grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(filteredUsers.length ? filteredUsers : users).map((user) => (
          <Card
            key={user.id}
            user={user}
            onClick={handleCardClick}
            onDelete={handleDelete}
            onEdit={handleEdit}
            isSelected={selectedUsers.includes(user.id)} // Highlight if selected
            toggleSelect={handleToggleSelect} // Toggle selection
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
