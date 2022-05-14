const makePairs = (arr) => {
      const length = arr.length -1;
      const everyPairs =  [];
       for(let i = 0; i < length ; i++ ) {
          for(let j = i + 1; j <= length ; j++) {
            everyPairs.push([arr[i], arr[j]]) ;
          }
       }  
   return everyPairs; 
}

const players = (num) => {
   const players = []
    for (let i = 0; i < num; i++) {
       players.push(i)
     }
   return players
}

const result = (pairs, finishedMatches) => {
   const { length } = pairs
   const res = []
   const sortArr1 = finishedMatches.map((el) => el.sort()).sort((a, b) => a[0] - b[0])
     for (let i = 0; i < length; i++) {
        for (let j = 0; j < sortArr1.length; j++) {
            if(pairs[i].every((element, index) => {
                    if (element === sortArr1[j][index])  return true;
               return false  })) {
                     break;
             } else if (j === sortArr1.length - 1 ) {
                    res.push(pairs[i])
                }

        }
     }
   return res
}

const solution = (chessPlayers, finishedMatches) => {
   const playersArray = players(chessPlayers)
   const pairs = makePairs(playersArray)
   return result(pairs, finishedMatches)
}