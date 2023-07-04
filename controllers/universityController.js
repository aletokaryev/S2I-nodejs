// Importa il modulo del modello di università
const University = require("../models/universityModel")

// Recupera tutte le università presenti nel database
getUniversities = async (req, res) => {
    let university
    try {
        university = await University.find() // Recupera tutte le università utilizzando il metodo find()
    } catch (error) {
        console.log("Error while loading universities", error)
    }
    if(!university){
        return res.status(404).json({message: "No university found"}) // Restituisce un messaggio JSON se non ci sono università trovate
    }
    return res.status(200).json({university}) // Restituisce un oggetto JSON contenente le università
}

// Aggiunge una nuova università al database
addUniversity = async (req, res) => {
    const { name } = req.body
    const newUniversity = new University({ name }) // Crea una nuova istanza del modello di università con il nome fornito

    await newUniversity.save() // Salva la nuova università nel database
    .then(university => res.json(university)) // Restituisce un oggetto JSON rappresentante l'università aggiunta
    .catch(err => res.status(500).json({error: "Error while uploading university to DB", err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante il salvataggio
}

// Aggiorna un'Università esistente nel database
updateUniversity = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    await University.findByIdAndUpdate(id, {name}) // Cerca l'università con l'ID specificato e aggiorna il nome
    .then(university => res.json(university)) // Restituisce un oggetto JSON rappresentante l'università aggiornata
    .catch(err => res.status(500).json({error: 'Error while updating university', err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante l'aggiornamento
}

// Elimina un'Università esistente dal database
deleteUniversity= async (req, res) =>{
    const { id } = req.params
    
    await University.findByIdAndDelete(id) // Cerca e elimina l'università con l'ID specificato
    .then(university => {
        if(!university){
            return res.status(404).json({error: "University not found"}) // Restituisce un messaggio JSON di errore se l'università non viene trovata
        }
        res.json({message: "University deleted successfully"}) // Restituisce un messaggio JSON indicando che l'università è stata eliminata correttamente
    })
    .catch(err => res.status(500).json({error: 'Error while deleting university', err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante l'eliminazione
}

// Esporta le funzioni per consentirne l'utilizzo da altre parti del codice
module.exports = {getUniversities, addUniversity, updateUniversity, deleteUniversity}
