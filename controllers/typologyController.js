// Importa il modulo del modello di tipologia
const Typology = require("../models/typologyModel")

// Recupera tutte le tipologie presenti nel database
getTypology = async (req, res) => {
    let typology
    try {
        typology = await Typology.find() // Recupera tutte le tipologie utilizzando il metodo find()
    } catch (error) {
        console.log("Error while loading typologies", error)
    }
    if(!typology){
        return res.status(404).json({message: "No typology found"}) // Restituisce un messaggio JSON se non ci sono tipologie trovate
    }
    return res.status(200).json({typology}) // Restituisce un oggetto JSON contenente le tipologie
}

// Aggiunge una nuova tipologia al database
addTypology = async (req, res) => {
    const { name } = req.body
    const newTypology = new Typology({ name }) // Crea una nuova istanza del modello di tipologia con il nome fornito

    await newTypology.save() // Salva la nuova tipologia nel database
    .then(typology => res.json(typology)) // Restituisce un oggetto JSON rappresentante la tipologia aggiunta
    .catch(err => res.status(500).json({error: "Error while uploading typology to DB", err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante il salvataggio
}

// Aggiorna una tipologia esistente nel database
updateTypology = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    await Typology.findByIdAndUpdate(id, {name}) // Cerca la tipologia con l'ID specificato e aggiorna il nome
    .then(typology => res.json(typology)) // Restituisce un oggetto JSON rappresentante la tipologia aggiornata
    .catch(err => res.status(500).json({error: 'Error while updating typology', err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante l'aggiornamento
}

// Elimina una tipologia esistente dal database
deleteTypology = async (req, res) =>{
    const { id } = req.params
    
    await Typology.findByIdAndDelete(id) // Cerca e elimina la tipologia con l'ID specificato
    .then(typology => {
        if(!typology){
            return res.status(404).json({error: "Typology not found"}) // Restituisce un messaggio JSON di errore se la tipologia non viene trovata
        }
        res.json({message: "Typology deleted successfully"}) // Restituisce un messaggio JSON indicando che la tipologia è stata eliminata correttamente
    })
    .catch(err => res.status(500).json({error: 'Error while deleting typology', err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante l'eliminazione
}

// Esporta le funzioni per consentirne l'utilizzo da altre parti del codice
module.exports = {getTypology, addTypology, updateTypology, deleteTypology}
