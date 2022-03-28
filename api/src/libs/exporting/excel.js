// Convert JS object into XLSX buffer
// Author: Jonathan Rodriguez Sanchez

import XLSX from 'xlsx'
import { getSafe, generateMatrix } from './helpers'

//* Entry point to save the xlsx
export const exportToXLSX = (tableName, sheets) => {
  // Create a new workbook
  const wb = XLSX.utils.book_new()
  // Add metadata
  wb.Props = {
    Title: tableName,
    Subject: 'Reporte',
    Author: 'Pro-bono Softtek',
    CreatedDate: new Date()
  }

  for (const sheet of sheets) {
    // Get the formatted data
    let ws_data = formatDataWB(sheet.data, sheet.columns)
    // Add the main sheet
    wb.SheetNames.push(sheet.title.substring(0, 30))
    // Insert the data on the main sheet
    let ws = XLSX.utils.aoa_to_sheet(ws_data)
    ws['!cols'] = sheet.columns.map(() => ({ wch: 15 }))
    wb.Sheets[sheet.title] = ws
  }

  // Write the entire workbook
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' })
  return wbout
}

//* Format the array into a bidimensional matrix (rows x columns)
const formatDataWB = (data, columns) => {
  // Intialize headers and content arrays
  const headers = columns.map(column => column.title)
  const content = generateMatrix(data.length, columns.length)

  // Iteratively fill the workbook, column by column
  data.forEach((row, indexRow) => {
    columns.forEach((column, indexCol) => {
      const { value } = column
      // Apply the formatter function or acces the plain property
      const cell = typeof value === 'function' ? getSafe(() => value(row)) : row[value]
      //? Insert the value of the cell in the current position of the matrix
      content[indexRow][indexCol] = cell
    })
  })

  const result = [headers, ...content]
  return result
}
