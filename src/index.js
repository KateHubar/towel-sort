// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.reduce((acc, curr, index) => {
        return [
            ...acc,
            ...(index % 2
                ? curr.sort((a, b) => b - a)
                : curr.sort((a, b) => a - b)),
        ];
    }, []);
};
