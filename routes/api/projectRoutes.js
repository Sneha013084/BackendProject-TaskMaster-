const express = require ('express');
const router = express.Router();
const{ createProject,
    getProjects,
    getProjectByID,
    updateProject,
    deleteProject,} = require('../../controllers/projectController');

    const auth = require ('../middleware/authMiddleware');

//register a new user

router.post('/', auth, createProject);

router.get('/', auth, getProjects);

router.get ('/:id',auth,  getProjectByID );

router.put('/:id', auth, updateProject)

router.delete('/:id', auth, deleteProject);



module.exports = router;
