function sortArr(arr)    {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const { length } = arr
    const newArrLength = max - min + 1;
    const res = []
    const newArr = new Array(newArrLength);
    newArr.fill(0);
    
    for (let i = 0; i < length; i++) {
           newArr[arr[i] - min]++;
       }
    for (let i = 0; i < newArrLength; i++) {
           for (let j = 0; j < newArr[i]; j++) {
               res.push(i + min);
            }
       }
    return res
   }