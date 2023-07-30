import { Button } from "react-bootstrap";

export function BookButton() {
  const buttonContainerStyle = {
    width: "100%",
    height: "20vh",
    // backgroundColor: "red", // Replace with your desired background color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#333", // Set your desired text color
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#ff9100", // Set the background color of the button
    fontSize: "1.5rem", // Set your desired font size for the button
    fontWeight: "bold",
    padding: "1rem 2rem", // Add padding to the button for better spacing
    border: "none", // Remove the button border
    borderRadius: "4px", // Add some border radius to the button for a rounded look
    textAlign: "center", // Center the text inside the button
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.5)", // Add the desired shadow effect
    cursor: "pointer", // Change the cursor to a pointer when hovering over the button
  };

  return (
    <div style={buttonContainerStyle}>
      <Button href="/offert" size="lg" style={buttonStyle}>
        Boka Offert
      </Button>
    </div>
  );
}
