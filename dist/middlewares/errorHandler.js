"use strict";
// Not Found
const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};
// Error Handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    req.status(statusCode);
    res.json({
        message: err === null || err === void 0 ? void 0 : err.message,
        stack: err === null || err === void 0 ? void 0 : err.stack,
    });
};
module.exports = { errorHandler, notFound };
