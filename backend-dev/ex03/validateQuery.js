const validateQuery = (req, res, next) => {
    const { minCredits, maxCredits } = req.query;

    if (minCredits&&isNaN(minCredits)) {
        return res.status(400).json({ error: "400 Bad Request: minCredits must be a number" });
    }
    if (maxCredits&&isNaN(maxCredits)) {
        return res.status(400).json({ error: "400 Bad Request: maxCredits must be a number" });
    }

    if (minCredits&&maxCredits) {
        if (parseInt(minCredits) > parseInt(maxCredits)) {
            return res.status(400).json({
                error: "400 Bad Request: minCredits cannot be greater than maxCredits"
            });
        }
    }

    next(); 
}

export default validateQuery;