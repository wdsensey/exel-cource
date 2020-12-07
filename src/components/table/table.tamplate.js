const CODES = {A: 65, Z: 90}

function toCell(content) {
  return `<div class="cell" contentEditable>${content}</div>`
}

function toColumn(el) {
  return `<div class="column" contentEditable>${el}</div>`
}

function createRow(index= '', content) {
  return `
    <div class="row">
        <div class="row-info">${index ? index : ''}</div>
        <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 1) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}
