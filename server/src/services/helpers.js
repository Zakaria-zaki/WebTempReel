const formatError = (error) => {
    return error.errors.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
    }, {});
};

module.exports = {
    formatError
};
