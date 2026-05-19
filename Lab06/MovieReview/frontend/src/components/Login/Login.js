import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const Login = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  // Dùng useNavigate của react-router-dom v6 (hoặc v7) để chuyển trang
  let navigate = useNavigate();

  const onChangeName = e => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeId = e => {
    const id = e.target.value;
    setId(id);
  };

  const login = () => {
    // Gọi hàm login được truyền từ App.js thông qua props
    props.login({ name: name, id: id });
    // Chuyển hướng về trang chủ
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={onChangeName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter id"
            value={id}
            onChange={onChangeId}
          />
        </Form.Group>
        <Button variant="primary" onClick={login}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;