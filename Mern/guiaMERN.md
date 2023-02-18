# MERN stack

_Con estas instrucciones podrás crear una aplicación usando MongoDB, Express, React y Node
Los comandos mostrados a continuación son Linux, si tiene windows puedes descargar la consola [Cmder](https://cmder.app/)_


## Comenzando ⚙️

* Crea la carpeta del proyecto, esta será la carpeta raíz
* Crea un repositorio y un archivo .gitignore con la linea **/node_modules
```
git init
```
* Crear el front-end
```
npx create-react-app client
```
* Crear el back-end
```
mkdir server
```


### server

_Dentro de la carpeta server, crea el pasckage.json y las carpetas config/ controllers/ models/ y routes/, ademas instala express y mongoose. Opcional instalar globalmente nodemon para no reiniciar cada vez que se edita_

```
cd server
npm init -y
mkdir config
mkdir controllers
mkdir models
mkdir routes
npm install express mongoose
npm install -g nodemon
npm install cors # para solicitudes de origen cruzado
```

### client 🔧

_Salir de server e ir a la carpeta client, instalar axios_

```
cd ../client
npm install axios
```

## Base de datos 

_Para instalar localmente la base de datos puedes descargar [MongoDB Compass](https://www.mongodb.com/products/compass), conectar localmente y crear la coleccion que quieras_
### Ejemplo de conexion
Crea el archivo server/config/mongoose.config.js
```
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/cruddb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
```

## Correr localmente

_Abrir dos terminales_
* En la carpeta server
```
nodemon server.js
```

* En la carpeta client
```
npm run start
```

---
⌨️ con ❤️ por [yuliviterbori](https://github.com/yuliviterbori)