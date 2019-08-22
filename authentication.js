const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.decode(token, process.env.SECRET_JWT);
        req.userData = decoded;
        return next();
    } catch (error) {
        return res.status(401).json({
            message: 'Authorization Failed',
            error
        });
    }
};
