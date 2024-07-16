const express = require("express");
const {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
} = require("../controllers/usercontroller");
const auth = require("../middlewares/auth");
const router = express.Router();
router.get('/', auth, getAllUser);
router.get('/:id', auth, getUserById);
router.put('/:id', auth, updateUserById);
router.delete('/:id', auth, deleteUserById);
module.exports = router;
