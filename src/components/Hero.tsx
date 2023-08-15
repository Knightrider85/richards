export function Hero() {
  const heroStyle = {
    width: "100%",
    height: "50vh",
    backgroundImage: "url('/public/hero.png')", // Set the path to your image
    backgroundSize: "cover", // Ensure the image covers the entire hero section
    backgroundPosition: "center", // Center the image horizontally and vertically
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    color: "#333", // Set your desired text color
  };

  const h1Style: React.CSSProperties = {
    fontSize: "2.5rem", // Set your desired font size
    fontWeight: "bold",
    color: "#fff", // Set the text color to white for better visibility
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.5)', // Add a shadow effect to the text at the bottom
    textAlign: 'right', // Align the text to the right
    paddingRight: '1rem', // Add some padding on the right side for better spacing
  };

  return (
    <div style={heroStyle}>
      <h1 style={h1Style}>BYGGFIRMA SOM <br/>BYGGER MED GLÄDJE!</h1>
    </div>
  );
}
