// Importa il modulo del modello del corso
const Course = require("../models/courseModel")

// Recupera tutti i corsi presenti nel database
getCourses = async (req, res) => {
    let courses
    try {
        courses = await Course.find() // Recupera tutti i corsi utilizzando il metodo find()
    } catch (error) {
        console.log("Error while loading courses", error)
    }
    if(!courses){
        return res.status(404).json({message: "No courses found"}) // Restituisce un messaggio JSON se non ci sono corsi trovati
    }
    return res.status(200).json({courses}) // Restituisce un oggetto JSON contenente i corsi
}

// Aggiunge un nuovo corso al database
addCourse = async (req, res) => {
    const { name, courseType, universities } = req.body
    const newCourse = new Course({ name, courseType, universities }) // Crea una nuova istanza del modello di corso con i dati forniti

    await newCourse.save() // Salva il nuovo corso nel database
    .then(course => res.json(course)) // Restituisce un oggetto JSON rappresentante il corso aggiunto
    .catch(err => res.status(500).json({error: "Error while uploading course to DB", err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante il salvataggio
}

// Aggiorna un corso esistente nel database
updateCourse = async (req, res) => {
    const { id } = req.params
    const { name, courseType, universities } = req.body

    await Course.findByIdAndUpdate(id, {name, courseType, universities}) // Cerca il corso con l'ID specificato e aggiorna i campi desiderati
    .then(course => res.json(course)) // Restituisce un oggetto JSON rappresentante il corso aggiornato
    .catch(err => res.status(500).json({error: 'Error while updating course', err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante l'aggiornamento
}

// Elimina un corso esistente dal database
deleteCourse = async (req, res) =>{
    const { id } = req.params
    
    await Course.findByIdAndDelete(id) // Cerca e elimina il corso con l'ID specificato
    .then(course => {
        if(!course){
            return res.status(404).json({error: "Course not found"}) // Restituisce un messaggio JSON di errore se il corso non viene trovato
        }
        res.json({message: "Course deleted successfully"}) // Restituisce un messaggio JSON indicando che il corso è stato eliminato correttamente
    })
    .catch(err => res.status(500).json({error: 'Error while deleting course', err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante l'eliminazione
}

// Esporta le funzioni per consentirne l'utilizzo da altre parti del codice
module.exports = {getCourses, addCourse, updateCourse, deleteCourse}
