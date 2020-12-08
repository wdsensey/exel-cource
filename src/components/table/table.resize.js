import {$} from '@core/dom';

export function resizeHandler(e) {
  const $resizer = $(e.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  let value
  $resizer.css({opacity: 1})


  document.onmousemove = (e) => {
    if (type === 'col') {
      const delta = e.pageX - coords.right
      value = coords.width + delta
      $resizer.css({
        right: delta > -coords.width + 40 ?
          -delta + 'px' :
          'calc(100% - 40px)',
      })
    } else {
      const delta = e.pageY - coords.bottom
      value = coords.height + delta
      $resizer.css({bottom: -delta + 'px'})
    }
  }
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    if (type === 'col') {
      const currentDataCols =
        document.querySelectorAll(`[data-col='${$parent.data.col}']`)
      currentDataCols.forEach((cell) => {
        cell.style.width = value + 'px'
      })
      $resizer.css({opacity: 0, right: 0})
    } else {
      $parent.css({height: value + 'px'})
      $resizer.css({opacity: 0, bottom: 0})
    }
  }
}
