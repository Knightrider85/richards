export function MapLocation() {
  const mapStyle = {
    width: "100%",
    height: "50vh",
    backgroundImage: "url('/map1.png')", // Set the path to your image
    backgroundSize: "cover", // Ensure the image covers the entire hero section
    backgroundPosition: "center", // Center the image horizontally and vertically
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#333", // Set your desired text color
  };

  const h1Style: React.CSSProperties = {
    fontSize: "2.5rem", // Set your desired font size
    fontWeight: "bold",
    color: "black", // Set the text color to white for better visibility
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.5)', // Add a shadow effect to the text at the bottom
    textAlign: 'right', // Align the text to the right
    paddingRight: '1rem', // Add some padding on the right side for better spacing
  };

  return (
    <div style={mapStyle}>
      <h1 style={h1Style}>HÄR FINNS VI</h1>
    </div>
  );
}


