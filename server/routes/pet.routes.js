const PetController = require('../controllers/pet.controllers');

module.exports = (app) => {
    app.get("/api/pet/getall", PetController.getAllPet);
    app.post("/api/pet/addnew", PetController.createPet);
    app.get("/api/pet/:id/getone", PetController.getOnePet);
    app.put("/api/pet/:id/update", PetController.updatePet);
    app.delete("/api/pet/:id/delete", PetController.deletePet)
}