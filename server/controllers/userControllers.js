// Register a new User
// POST: api/users/register
// UP
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')
const HttpError = require("../models/errorModel")

const fs = require('fs')
const path = require('path')

const { v4: uuid } = require("uuid")

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
        console.log(req.body);
        
        if (!name || !email || !password) {
            return next(new HttpError("Fill in All Fields", 422))
        }

        const emailExists = await User.findOne({ email })
        if (emailExists) {
            return next(new HttpError("Email already exists", 422))
        }

        if ((password.trim()).length < 6) {
            return next(new HttpError("kam kam se 6 words ka to bana password", 422))
        }

        if (password != password2) {
            return next(new HttpError("Password do not match", 422))
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt);
        const newUser = await User.create({ name, email, password: hashedPass });
        res.status(201).json(newUser)


    } catch (error) {
        return next(new HttpError("user registration failed", 422))
    }
}


// login a Register User
// POST: api/users/login
// UP


const jwt = require("jsonwebtoken")

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new HttpError("fill in all blanks", 422))
        }
        const newEmail = email.toLowerCase();
        const user = await User.findOne({ email: newEmail })
        if (!user) {
            return next(new HttpError("invalid credentials", 422))
        }

        const comparePass = await bcrypt.compare(password, user.password)
        if (!comparePass) {
            return next(new HttpError("invalid credentials", 422))
        }

        const { _id: id, name } = user;
        const token = jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: "1d" })

        res.status(200).json({ token, id, name })

    } catch (error) {
        return next(new HttpError("LogIn failed", 422))
    }
}



// User Profile
// POST: api/users/:id
// P
const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).select('-password');
        if (!user) {
            return next(new HttpError("user not found", 404))
        }
        res.status(200).json(user);
    } catch (error) {
        return next(new HttpError("User Not Found", 422))
    }
}



// Register a User Avatar
// POST: api/users/change-avatar
// UP
const changeAvatar = async (req, res, next) => {
    try {
        if (!req.files.avatar) {
            return next(new HttpError("please choose an image", 422))
        }
        //find user from database
        const user = await User.findById(req.user.id)
        // delet old avatar
        if (user.avatar) {
            fs.unlink(path.join(__dirname, '..', 'uploads', user.avatar), (err) => {
                if (err) {
                    return next(new HttpError(err))
                }
            })
        }

        const { avatar } = req.files;
        if (avatar.size > 500000) {
            return next(new HttpError("profile picture too big. should be less than 500kb", 422))
        }

        let fileName;
        fileName = avatar.name;
        let splittedFilename = fileName.split('.')
        let newFilename = splittedFilename[0] = uuid() + '.' + splittedFilename[splittedFilename.lenght - 1]
        avatar.mv(path.join(__dirname, '..', 'uploads', newFilename), async (err) => {
            if (err) {
                return next(new HttpError(err))
            }

            const updatedAvata = await User.findByIdAndUpdate(req.user.id, { avatar: newFilename }, { new: true })
            if (!updatedAvata) {
                return next(new HttpError("Avatar not changed", 422))
            }
            res.status(200).json(updatedAvata)
        })
    } catch (error) {
        return next(new HttpError(error))
    }
}
// Register a new User
// POST: api/users/edit-user
// P

const editUser = async (req, res, next) => {
    try {
        const { name, email, currentPassword, newPassword, confirmNewPassword } = req.body;
        if (!name || !email || !currentPassword || !newPassword) {
            return next(new HttpError("fill in all the blanks", 422))
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return next(new HttpError("user not found", 403))
        }

        const emailExist = await User.findOne({ email });

        if (emailExist && (emailExist._id != req.user.id)) {
            return next(new HttpError("Email already exist", 422))
        }

        const validateUserPassword = await bcrypt.compare(currentPassword, user.password);
        if (!validateUserPassword) {
            return next(new HttpError("invalid current password", 422))
        }

        if (newPassword !== confirmNewPassword) {
            return next(new HttpError("new password do not match", 422))
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newPassword, salt)

        const newInfo = await User.findByIdAndUpdate(req.user.id, { name, email, password: hash }, { new: true })
        res.status(200).json(newInfo)
    } catch (error) {
        return next(new HttpError(error))
    }
}
// Register a new User
// POST: api/users/authors
// UP

const getAuthors = async (req, res, next) => {
    try {
        const authors = await User.find().select('-password')
        res.json(authors)
    } catch (error) {
        return next(new HttpError(error))
    }
}

module.exports = { registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors }