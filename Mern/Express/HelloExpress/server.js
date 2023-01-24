const express = require("express");
const app = express();
const port = 8000;

// asegúrate de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});


const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
  res.json( users );
});

// si queremos obtener un usuario con un id específico, podemos hacer que el id sea parte de la url
// asegúrate de preceder la variable id con dos puntos `:`
app.get("/api/users/:id", (req, res) => {
  // podemos obtener esta variable `id` de req.params 
  console.log(req.params.id);
  // asumiendo que este id es el índice del array de usuarios podríamos devolver un usuario de esta manera
  res.json( users[req.params.id] );
});

app.post("/api/users", (req, res) => {
  // req.body contendrá los datos del formulario desde Postman o desde React
  console.log(req.body);
  // podemos hacer push en el array de usuarios por ahora...
  // más tarde esto se insertará en una base de datos
  users.push(req.body);
  // siempre tendremos que responder con algo
  res.json( { status: "ok" } );
});

// esto tiene que estar debajo de los otros bloques de código
app.listen( port, () => console.log(`Listening on port: ${port}`) );
