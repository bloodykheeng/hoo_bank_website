import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#1a1a2e",
    color: "white",
    textAlign: "center",
    padding: "20px"
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#ff4757"
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    opacity: 0.8
  },
  link: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background 0.3s ease-in-out",
    display: "inline-block"
  },
  linkHover: {
    backgroundColor: "#0056b3"
  }
};

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        style={styles.link}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.linkHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)
        }
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
