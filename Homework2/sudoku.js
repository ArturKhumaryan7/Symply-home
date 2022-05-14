function sudokuCheck (grid) {
    const { length } = grid

    let set = new Set()

    for(let rowIndex = 0; rowIndex <  length; rowIndex++) {
        for(let colIndex = 0; colIndex < length; colIndex++) {
            const value = grid[rowIndex][colIndex]
            if (value !== '.') {
                const row = `${value} in row ${rowIndex}`
                const colum = `${value} in colum ${colIndex}`
                const subGrid = `${value} in subGrid ${Math.floor(rowIndex / 3)}, ${Math.floor(colIndex / 3)}`
                if (set.has(row) || set.has(colum) || set.has(subGrid)) {
                    return false
                } else {
                set.add(row)
                set.add(colum)
                set.add(subGrid)
                }
            } 
        }
    }

    return true
}
