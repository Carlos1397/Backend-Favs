
import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
export const authToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) res.status(403).json({ message: 'no token available' });

        const key = jwt.verify(token, config.SECRET)

        const user = await User.findById(key.id, { password: 0 })
        console.log(user)
        if (!user) return res.status(404).json({ message: 'no existe usuario' })

        next();
    } catch (error) {
        res.status(401).json({ message: 'No authorization' })
    }
}