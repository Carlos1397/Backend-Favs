import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const register = async (req, res) => {

    const { email, password } = req.body;

    const newUser = new User({
        email, password: await User.encryptedPassword(password)
    })
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, { expiresIn: 86400 }) // 24h
    res.status(200).json({ token });

}
export const login = async (req, res) => {

    const userFound = await User.findOne({ email: req.body.email })
    if (!userFound) return res.status(400).json({ message: 'User not found' })
    const flagPassed = await User.compareencryptedPassword(req.body.password, userFound.password)
    if (!flagPassed) return res.status(401).json({ token: null, message: 'password invalid' })
    const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: 86400 }) // 24h
    res.json({ token })
}