import React, { useState } from "react";

const UserForm = ({ user, onSubmit }) => {
  const [userModel, setUser] = useState(user);
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ ...userModel });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        value={userModel.email}
        required
        onChange={(e) => {
          userModel.email = e.target.value;
          setUser({ ...userModel });
        }}
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        value={userModel.password}
        required
        onChange={(e) => {
          userModel.password = e.target.value;
          setUser({ ...userModel });
        }}
      />
      <br />
      <input className="link" type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;
