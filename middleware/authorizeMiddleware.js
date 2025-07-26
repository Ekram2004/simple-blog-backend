const authorize = (...alowedRoles) => {
    return (req, res, next) => {
        if (!alowedRoles.includes(req.user.role))
            return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
        next()
    }
}
module.exports = authorize;