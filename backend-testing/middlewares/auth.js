const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    
    const token = req.header('Authorization');

    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({
            msg: "Invalid user"
        });
    }

    const bearerToken = token.split(' ')[1];

    try {
        const decoded = jwt.verify(bearerToken, process.env.JWT_TOKEN); // use `verify` instead of `decode` for token verification
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            msg: "Invalid user"
        });
    }
};
