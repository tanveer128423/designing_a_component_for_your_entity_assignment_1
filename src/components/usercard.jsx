// src/components/UserCard.jsx
import React from "react";

const UserCard = ({ name, description }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
};

export default UserCard;
