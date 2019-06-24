const delay = (ms) => new Promise(r => setTimeout(r, ms))
module.exports.asyncForEach = async (array, callback, waitForMs) => {
    for (let i = 0; i < array.length; i++) {
        waitForMs?await delay(waitForMs):{};
        await callback(array[i], i, array);
    }
}