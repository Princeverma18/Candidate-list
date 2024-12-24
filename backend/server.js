const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 5000;

const candidates = [
  { id: 1, name: 'Rahul kumar', skills: 'React, Node.js', yearsOfExperience: 3 },
  { id: 2, name: 'Boby Singh', skills: 'Python, Django', yearsOfExperience: 5 },
  { id: 3, name: 'Navjeet Rajput', skills: 'Java, Spring', yearsOfExperience: 2 },
  { id: 4, name: 'Suryadev Tyagi', skills: 'JavaScript, Angular', yearsOfExperience: 4 },
  { id: 5, name: 'Deepanshu Kumar', skills: 'C++, Qt', yearsOfExperience: 6 },
  { id: 6, name: 'Shivom Baliyan', skills: 'PHP, Laravel', yearsOfExperience: 3 },
  { id: 7, name: 'Amit Kumar', skills: 'Ruby, Rails', yearsOfExperience: 4 },
  { id: 8, name: 'Ankit Kumar', skills: 'Go, Kubernetes', yearsOfExperience: 5 },
  { id: 9, name: 'Anil', skills: 'HTML, CSS', yearsOfExperience: 1 },
  { id: 10, name: 'Atif', skills: 'Swift, iOS', yearsOfExperience: 3 },
];

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
