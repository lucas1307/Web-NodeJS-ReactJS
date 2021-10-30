import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import api from "../../../services/api";
import "./index.css";
import { useHistory, useParams } from "react-router-dom";
import { isDate } from "moment";

interface IAluno {
  Nome: string;
  RA: string;
  Nascimento: Date;
  Idade: number;
  Endereço: string;
}

const Alunos: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [model, setModel] = useState<IAluno>({
    Nome: " ",
    RA: " ",
    Nascimento: new Date(),
    Idade: 0o0,
    Endereço: " ",
  });

  useEffect(() => {
    console.log(id);
    if (id != undefined) {
      findAluno(id);
    }
  }, [id]);

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id != undefined) {
      const response = await api.put(`/alunos/${id}`, model);
    } else {
      const response = await api.post("/alunos", model);
    }
    back();
  }

  function back() {
    history.goBack();
  }

  async function findAluno(id: string) {
    const response = await api.get(`tasks/${id}`);
    console.log(response);
    setModel({
      Nome: response.data.Nome,
      RA: response.data.RA,
      Nascimento: response.data.Nascimento,
      Idade: response.data.Idade,
      Endereço: response.data.Endereço,
    });
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h1>Novo Aluno</h1>
        <Button variant="dark" size="sm" onClick={back}>
          Voltar
        </Button>
      </div>
      <br />
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="Nome"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>RA</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="RA"
              value={model.RA}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Nascimento</Form.Label>
            <Form.Control
              type="date"
              name="Nascimento"
              
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Idadde</Form.Label>
            <Form.Control
              type="number"
              name="Idade"
              value={model.Idade}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="Endereço"
              value={model.Endereço}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
          </Form.Group>

          <Button variant="dark" type="submit" style={{ marginTop: "10px" }}>
            Salvar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Alunos;
