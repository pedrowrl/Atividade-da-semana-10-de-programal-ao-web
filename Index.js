// Aluno: Pedro Wilson Rodrigues de Lima.
// Nº de Matrícula: 2020267.

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Dados dos personagens da série "Os Simpsons"
const simpsonsData = [
  { personagem: 'Homer Simpson', ocupação: 'Inspetor irresponsavel da Usina Nuclear de Springfield' },
  { personagem: 'Marge Simpson', ocupação: 'Dona de Casa' },
  { personagem: 'Bart Simpson', ocupação: 'Estudante ruim' },
  { personagem: 'Lisa Simpson', ocupação: 'Estudante genial' },
  { personagem: 'Maggie Simpson', ocupação: 'Bebê' }
];

app.post('/data', (req, res) => {
  const inputData = req.body;

  res.json({ inputs: inputData });
});

app.get('/data', (req, res) => {
  res.json(simpsonsData);
});

app.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  res.json({ message: `Data with ID ${id} has been updated` });
});

app.delete('/data/:id', (req, res) => {
  const id = req.params.id;

  res.json({ message: `Data with ID ${id} has been deleted` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
