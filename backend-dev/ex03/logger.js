const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const path = req.path;
    const queryParams = req.query;

    console.log(`[${timestamp}] ${method} to ${path}`);
    console.log(`Query Params:, ${JSON.stringify(queryParams)}`);
    console.log('-----------------------------');

    next();
}

export default logger;