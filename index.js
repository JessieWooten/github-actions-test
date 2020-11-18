/**
 * given two integers, returns their sum
 * @param {number} x
 * @param {number} y
 * @returns number
 */
exports.add = (x,y) => {
    if([x,y].some(val => typeof val !== 'number')) {
        throw new Error('`Add` can only accept number values');
    }
    return x + y
};
