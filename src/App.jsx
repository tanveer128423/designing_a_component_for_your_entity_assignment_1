// src/App.jsx
import React from "react";
import UserCard from "./components/UserCard";

const users = Array.from({ length: 10 }, (_, index) => ({
  name: `User Name ${index + 1}`,
  description: "Some description about the user.",
}));

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
  padding: "16px",
};

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Cards</h1>
      <div style={gridStyle}>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} description={user.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
