const bcrypt = require('bcryptjs');
const userStudent = require('../pkg/user');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try {
        if (
            req.body.password.trim().length === 0 ||
            req.body.password !== req.body.password_confirm
        ) {
            return res.status(400).send('Bad Request');
        }

       
        if (req.body.email.length !== 0) {
            let user = await userStudent.getUserByEmail(req.body.email);
            if (user) {
                return res.status(409).send('User already exists');
            }

            req.body.password = bcrypt.hashSync(req.body.password);
            let newUser = await userStudent.create(req.body);
            return res.status(201).send(newUser);
        } else {
            return res.status(400).send('Bad Request');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
    try {
     
        let user = await userStudent.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(400).send('Bad Request. Bad login credentials');
        }

   
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send('Bad Request. Bad Login credentials');
        }


        let payload = {
            uid: user._id,
            email: user.email,
            full_name: user.full_name
        };

        let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '60s'});
        return res.status(200).send({token});
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    signUp,
    login
};