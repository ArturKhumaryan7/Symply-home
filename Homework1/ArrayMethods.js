Array.prototype.find = function (callback, arr) {
      const { length } = this
      for (let i = 0; i < length; i++) {
          if (callback.call(arr, this[i], i, this)) 
          return this[i]
      }
}

Array.prototype.findIndex = function (callback, arr) {
     const { length } = this
       for (let i = 0; i < length; i++) {
          if (callback.call(arr, this[i], i, this)) {
            return i
           }
        }
     return -1
}

Array.prototype.lastIndexOf  = function (call, fromIndex = 0) {
      const { length } = this
      let lastIndex
        for (let i = length - 1 - fromIndex; i >= 0; i--) {
           if (call === this[i]) {
            lastIndex = i
            return lastIndex
            }
        }
    return -1
}

Array.prototype.some  = function (callback, arr) {
     const  { length } = this
     for (let i = 0; i < length; i++) {
       if(callback.call(arr, this[i], i, this)) {
           return true
       }
     }
 return false
}

Array.prototype.every  = function(callback, arr) {
     const { length } = this
     for (let i = 0; i < length; i++) {
        if(!(callback.call(arr, this[i], i, this))) {
           return false
        }
      }
   return true
}

Array.prototype.reduce = function (callback, initValue) {
      const { length } = this

      let acc = initValue
      let index = 0

        if (initValue === undefined) {
            acc = this[index]
            index = 1
         } 

        for(let i = index; i < length; i++ ) {
            acc = callback(acc, value, i, this)
         }
   return acc
}

Array.prototype.reduceRight = function (callback, initValue) {
       const { length } = this

       let acc = initValue
       let index = length -1;

         if (initValue === undefined) {
            acc = this[length-1]
            index = length - 2
          } 

         for(let i = index; i >= 0 ; i-- ) {
           acc = callback(acc, value, i, this)
          }
     return acc
}



Array.prototype.pop = function(){
            const {length } = this
            if (length === 0) {
                return 
            }
            let res = this[length - 1]
            this.length = length - 1 
    return res;
  };



Array.prototype.join = function (el = ','){
            const {length } = this
            let res = ''
            for (let i = 0; i < length; i++) {
                    if ((length - i) > 1) {
                    res = res + this[i] + el
                    } else {
                         res = res + this[i]
                    }
                   } 
               
    return res;

      };



Array.prototype.unshift = function (...arg) {
             let res = [...arg, ...this]
             const { length } = res
             for (let i = 0; i < length; i++ ) {
                 this[i] = res[i]
             }
       return this.length;

};
