const rotate90Degree = (matrix) => {
    if (matrix.length > matrix[0].length) {

            const result = []
            const length = matrix.length 
            const rowLength = matrix[0].length
        
              matrix.forEach((row, rowIndex) => {
                 const temp = []
                 matrix[rowIndex].length = length
                 matrix[rowIndex].fill(0, rowLength)
                    if (result.length !== rowLength){
                          row.forEach((column, columnIndex) => {
                               temp.push(matrix[length - columnIndex - 1][rowIndex])
    	                       })
                          result.push(temp)
                       }     	     
                 })  
          return result      
  
    } else if (matrix.length < matrix[0].length) {
            const result = []
            const lengthMarix = matrix.length
            matrix.length = matrix[0].length
            matrix.fill([...matrix[0]], lengthMarix)
    
               matrix.forEach((row, rowIndex) => {
                   const temp = []
                      row.forEach((column, columnIndex) => {
                         if(lengthMarix !== temp.length) {
                               temp.push(matrix[lengthMarix - columnIndex - 1][rowIndex])
                             }
                         })   
                    result.push(temp)    
                })  
          return result      
    }
    
	const result = []
    const length = matrix.length
    
	matrix.forEach((row, rowIndex) => {
        const temp = []
    	row.forEach((column, columnIndex) => {
            temp.push(matrix[length - columnIndex - 1][rowIndex])
    	})
        result.push(temp)
    })
    
    return result
}

