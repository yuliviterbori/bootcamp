const { Person } = require('../models/person.model');

module.exports.index = (request, response) =>{
    response.json({
        mesagge: "Hello World"
    });
}

module.exports.createPerson = (req,res) => {
    const { firstName, lastName } = req.body;
    Person.create({
        firstName,
        lastName
    })
    .then(person => res.json(person))
    .catch(err => res.json(err))
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
