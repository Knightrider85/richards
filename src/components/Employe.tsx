export function Employe() {
  const employeContainerStyle = {
    width: "100%",
    // backgroundColor: "#ff9100", // Replace with your desired background color
    display: "flex",
    justifyContent: "space-around", // Center employee cards with space around them
    alignItems: "flex-start", // Align items at the top to keep profile pictures at the top
    color: "#333", // Set your desired text color
    flexWrap: "wrap" as "wrap",
    minHeight: "50vh",
  };

  const employeCardStyle: React.CSSProperties = {
    width: "200px", // Set the width of each employee card
    height: "300px", // Add a fixed height to ensure consistent card height
    textAlign: "center",
    marginTop: "1rem",
  };

  const profilePictureStyleRichard: React.CSSProperties = {
    width: "130px", // Set the size of the profile picture
    height: "130px",
    borderRadius: "50%", // Make the profile picture appear as a rounded circle
    margin: "0 auto 1rem", // Add some margin at the bottom for spacing
    backgroundImage: "url('/public/richard.png')",
    backgroundSize: "cover",
  };

  const profilePictureStyleMongo: React.CSSProperties = {
    width: "130px", // Set the size of the profile picture
    height: "130px",
    borderRadius: "50%", // Make the profile picture appear as a rounded circle
    margin: "0 auto 1rem", // Add some margin at the bottom for spacing
    backgroundImage: "url('/public/mongo.png')",
    backgroundSize: "cover",
  };

  const employeNameStyle: React.CSSProperties = {
    fontSize: "1.5rem", // Set the font size for the employee name
    fontWeight: "bold",
  };

  return (
    <div style={employeContainerStyle}>
      <div style={employeCardStyle}>
        <div style={profilePictureStyleRichard}></div>
        <h1 style={employeNameStyle}>Richard Johnsson</h1>
        <p>Richard startade firman år 2015</p>
      </div>
      <div style={employeCardStyle}>
        <div style={profilePictureStyleMongo}></div>
        <h1 style={employeNameStyle}>Alvin Slipsko</h1>
        <p>Alvin startade 2021 och är en viktig del av firman</p>
      </div>
    </div>
  );
}
