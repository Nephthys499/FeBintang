import React from "react";
import "../dist/css/Homepage.css";
import logosekolah from "../assets/logo562.png";
import { Button, Form } from "react-bootstrap";

function TombolLogin() {
  return <button className="TombolSatu">Silahkan Masuk</button>;
}

const HomePage = () => {
  return (
    <div className="Homebage">
      <div className="box1">
        <br />
        <img className="logosekolahkarangjengkol" src={logosekolah} alt="" />
        <br />
        SELAMAT DATANG DI SD <br />
        <span className="span1">MI Ya BAKII KARANGJENGKOL</span>

        {/* Login Form */}
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label style={{ fontWeight: 'bold' }}>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          {/* Updated Primary Login Button */}
          <Button variant="primary" size="sm" active style={{ marginTop: '10px' }}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default HomePage;
