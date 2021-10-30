import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";
import "./index.css";
import { Index } from "typeorm";

interface IAluno {
  id: number;
  Nome: string;
  RA: string;
  Matriculado: boolean;
  Nascimento: Date;
  Idade: number;
  Endereço: string;
}

const Alunos: React.FC = () => {
  const [Alunos, setAlunos] = useState<IAluno[]>([])
  const history = useHistory()

  useEffect(() => {
    loadAlunos();
  }, []);

  async function loadAlunos() {
    const response = await api.get("/alunos");
    console.log(response);
    setAlunos(response.data);
  }

  function formatDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");
  }

  function newAluno() {
    history.push("/alunos_cadastro");
  }

  function editAluno(id: number) {
    history.push(`/alunos_cadastro/${id}`);
  }

  function viewAlunos(id: number) {
    history.push(`/alunos/${id}`);
  }

  async function finishedMatricula(id: number) {
    await api.patch(`/matricula/${id}`);
    loadAlunos();
  }

  async function deleteAluno(id: number) {
    await api.delete(`/alunos/${id}`);
    loadAlunos();
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h1>Tarefas</h1>
        <Button variant="dark" size="sm" onClick={newAluno}>
          Nova Tarefa
        </Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do aluno</th>
            <th>Data de Nascimento</th>
            <th>Idade</th>
            <th>Endereço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Alunos.map((alunos) => (
          <tr key={alunos.id}>
            <td>{alunos.id}</td>
            <td>{alunos.Nome}</td>
            <td>{formatDate(alunos.Nascimento)}</td>
            <th>{alunos.Idade}</th>
            <th>{alunos.Endereço}</th>
            <td>{alunos.Matriculado ? "Não Ativo" : "Ativo"}</td>
            <td>
              <Button
                size="sm"
                variant="primary"
                disabled={alunos.Matriculado}
                onClick={() => editAluno(alunos.id)}
              >
                Editar cadastro
              </Button>{" "}
              <Button
                size="sm"
                disabled={alunos.Matriculado}
                variant="success"
                onClick={() => finishedMatricula(alunos.id)}
              >
                Finalizar matricula
              </Button>{" "}
              <br />
              <Button
                size="sm"
                variant="warning"
                onClick={() => viewAlunos(alunos.id)}
              >
                Visualizar matricula
              </Button>{" "}
              <Button size="sm" variant="danger" onClick={() => deleteAluno(alunos.id)}>
                Remover Alunos
              </Button>{" "}
            </td>
          </tr>
          ))
        }
        </tbody>
      </Table>
    </div>
  );
};

export default Alunos;
