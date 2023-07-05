// Importa il modulo del modello del corso
const Course = require("../models/courseModel")
const University = require("../models/universityModel")
// Recupera tutti i corsi presenti nel database
getCourses = async (req, res) => {
    const { name, courseType } = req.query;
    let courses;
  
    try {
      if (name && courseType) {
        courses = await Course.find({ name, courseType });
      } else if (name) {
        courses = await Course.find({ name });
      } else if (courseType) {
        courses = await Course.find({ courseType });
      } else {
        courses = await Course.find();
      }
  
      res.json({ courses });
    } catch (error) {
      console.log("Error while loading courses", error);
      res.status(500).json({ error: "Error while loading courses" });
    }
  };

// Recupera i dettagli di un singolo corso
getSingleCourse = async (req, res) => {
    const { id } = req.params;
  
    try {
      const course = await Course.findById(id);
      
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
  
      res.json({ course });
    } catch (error) {
      console.log('Error while retrieving course', error);
      res.status(500).json({ error: 'Error while retrieving course' });
    }
  };

// Aggiunge un nuovo corso al database
addCourse = async (req, res) => {
    const { name, courseType, universities } = req.body
    const newCourse = new Course({ name, courseType, universities }) // Crea una nuova istanza del modello di corso con i dati forniti

    try {
        const savedCourse = await newCourse.save();
        await University.updateMany(
            { _id: { $in: universities } },
            { $push: { courses: savedCourse._id } }
        );

        res.json(savedCourse);
    } catch (error) {
        console.log('Error while uploading course to DB', error);
        res.status(500).json({ error: 'Error while uploading course to DB' });
    }
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
module.exports = {getCourses, getSingleCourse, addCourse, updateCourse, deleteCourse}
