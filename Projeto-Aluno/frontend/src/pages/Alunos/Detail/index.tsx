import React, { useState, useEffect } from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import "./index.css";
import api from "../../../services/api";
import moment from "moment";

interface IAluno {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Detail: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [aluno, setAluno] = useState<IAluno>();

  function back() {
    history.goBack();
  }

  async function findAluno() {
    const response = await api.get<IAluno>(`/alunos/${id}`);
    console.log(response);
    setAluno(response.data);
  }

  // Quando o param "id" mudar/receber um novo valor, o useEffect será executado chamando o findTask
  useEffect(() => {
    findAluno();
  }, [id]);

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h1>Detalhes da Tarefa</h1>
        <Button variant="dark" size="sm" onClick={back}>
          Voltar
        </Button>
      </div>
      <br />

      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="" target="_blank">
              Github
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="" target="_blank">Linkedin</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>{aluno?.title}</Card.Title>

          <Card.Text>
            {aluno?.description}
            <br />
            {aluno?.finished ? "Não Ativo" : "Ativo"}
            <br />
            <strong>Data de Cadastro: </strong>
            {moment(aluno?.created_at).format("DD/MM/YYYY")}
            <br />
            <strong>Data de Atualização: </strong>
            {moment(aluno?.updated_at).format("DD/MM/YYYY")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}></Card>
    </div>
  );
};

export default Detail;
