// Convert JS object into XLSX buffer
// Author: Jonathan Rodriguez Sanchez

/**
 * Handle expection on function call
 * @author  Anonymous
 * @param   {function}  fn     function to be called
 * @param   {string}    value  default value if it fails
 * @returns {void} function fn return value
 */
export const getSafe = (fn, value = undefined) => {
  try {
    return fn()
  } catch (e) {
    return value
  }
}

/**
 * Generate matrix of numrows * numcols with the option of an initial value
 * @author  Anonymous
 * @param   {number}  numrows  # of rows
 * @param   {number}  numcols  # of columns
 * @returns {array} matrix
 */
export const generateMatrix = (numrows, numcols, initial) => {
  let arr = []
  for (let i = 0; i < numrows; ++i) {
    let columns = []
    for (let j = 0; j < numcols; ++j) columns[j] = initial
    arr[i] = columns
  }
  return arr
}
