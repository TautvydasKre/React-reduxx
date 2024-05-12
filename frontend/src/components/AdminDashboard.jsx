/** @format */

import React from "react";
import GoalForm from "./GoalForm";
import UserList from "./UserList";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        {/* Display the GoalForm component for adding goals */}
        <h2>Add Goal</h2>
        <GoalForm />
      </div>
      <div>
        {/* Display the UserList component for listing users */}
        <h2>User List</h2>
        <UserList />
      </div>
      {/* You can add other admin-related components or features here */}
    </div>
  );
}

export default AdminDashboard;
