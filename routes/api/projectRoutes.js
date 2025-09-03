const express = require ('express');
const router = express.Router();
const{ createProject,
    getProjects,
    getProjectByID,
    updateProject,
    deleteProject,} = require('../../controllers/projectController');

    const authMiddleware = require ('../middleware/authMiddleware');

//register a new user

router.post('/', authMiddleware, createProject);

router.get('/', authMiddleware, getProjects);

router.get ('/:id',authMiddleware,  getProjectByID );

router.put('/:id', authMiddleware, updateProject)

router.delete('/:id', authMiddleware, deleteProject);



module.exports = router;
