// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    var mergetArr = matrix.reduce((acc, curr, index) => {
        return [
            ...acc,
            ...(index % 2
                ? curr.sort((a, b) => b - a)
                : curr.sort((a, b) => a - b)),
        ];
    }, []);
    /* var sortedArr = mergetArr.sort((a, b) => {
        return a - b;
    }); */
    return mergetArr;
};
