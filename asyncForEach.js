const delay = (ms) => new Promise(r => setTimeout(resolve, ms))
module.exports.asyncForEach = async (array, callback, waitForMs) => {
    if(waitForMs){
        for (let i = 0; i < array.length; i++) {
            await delay(waitForMs);
            await callback(array[i], i, array);
          }
    }else{
        for (let i = 0; i < array.length; i++) {
          await callback(array[i], i, array);
        }
    }
  }