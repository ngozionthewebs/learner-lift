const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Check if token is provided in the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Ensure the token format is "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        // Verify the token with the secret key
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach user info (payload) to the request object
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateToken;
