function roadRegisterSistem(roadRegister) {
    const {length} = roadRegister
    for(let i = 0; i < length; i++) {
        let count = 0
        if(roadRegister[i].includes(true) && roadRegister[i].indexOf(true) !== i) {
                 for(let j = 0; j < roadRegister[0].length; j++) {
                             if (roadRegister[j][i] === true) {
                                  break;
                              } else {
                                      count++
                                      if (count === roadRegister[0].length) return false
                                 }                
                              }

         } else if (!(roadRegister[i].includes(true) && roadRegister[i].indexOf(true) !== i)) return false

     }
  return true 
}












