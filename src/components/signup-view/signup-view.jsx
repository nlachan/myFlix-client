import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import "./signup-view.scss";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(event);
    const isoDate = new Date(birthday);

    const data = {
      UserName: username,
      Email: email,
      Birthday: isoDate,
      Password: password,
    };

    fetch("https://naleen-movies-flix-8a1ae7a6e039.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <h1> Create an account </h1>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          minLength={5}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Enter a username"
        />
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label> Birthday: </Form.Label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
          placeholder="Enter birthday"
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formEmail">
        <Form.Label> Email: </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email address"
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Your password must be 8 or more characters"
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        {" "}
        Sign up{" "}
      </Button>
    </Form>
  );
};
