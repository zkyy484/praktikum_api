const express = require('express'); 
const app = express(); 
const port = 3001; 
app.use(express.json()); 
let persons = [ 
{ 
"id": 1, 
"nama": "Moch. Dzaky Musyaddad", 
"umur": 20, 
"alamat": { 
"jalan": "Brawijaya No. 04", 
"kota": "Muncar"     
}, 
"hobi": ["Bulu Tangkis", "Desain Grafis"] 
} 
]; 
app.get('/person', (req, res) => { 
res.json(persons); 
}); 
 
app.post('/person', (req, res) => { 
  const newPerson = req.body; 
  newPerson.id = persons.length + 1; 
  persons.push(newPerson); 
  res.status(201).json(newPerson); 
}); 
 
app.delete('/person/:id', (req, res) => { 
  const id = parseInt(req.params.id); 
  persons = persons.filter(person => person.id !== id); 
  res.status(204).send(); 
}); 
 
app.listen(port, () => {
  console.log('Server berjalan di http://localhost:${port}');
});