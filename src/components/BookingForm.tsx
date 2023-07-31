import { useState, ChangeEvent, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send the form data to the company's email
    console.log("Form data:", formData);

    // Clear the form fields after submission (optional)
    setFormData({
      name: "",
      address: "",
      email: "",
      phoneNumber: "",
      description: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>För & Efternamn</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Adress</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Label>Nummer</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Beskriv uppdraget</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button type="submit" style={{ backgroundColor: '#ff9100', marginTop: "1rem" }}>Skicka offertförfrågan</Button>
    </Form>
  );
}
