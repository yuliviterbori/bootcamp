const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

// asegúrate de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor() {
      this._id = faker.datatype.uuid();
      this.firstName =  faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.cellphone = faker.phone.number();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
    }
  }

  class Company {
    constructor() {
      this._id = faker.datatype.uuid();
      this.name =  faker.company.name();
      this.address = {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),

      }
    }
  }


// new user
app.get("/api/users/new", (req, res) => {
    res.json(new User);
  });

// new company
app.get("/api/companies/new", (req, res) => {
    res.json(new Company);
  });

  app.get("/api/user/company", (req, res) => {
    res.json({
        user: new User,
        company: new Company
    });
  });

// esto tiene que estar debajo de los otros bloques de código
app.listen( port, () => console.log(`Listening on port: ${port}`) );