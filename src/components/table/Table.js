import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tamplate';
import {resizeHandler} from '@/components/table/table.resize';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(10)
  }

  onMousedown(e) {
    if (e.target.dataset.resize) {
      resizeHandler(e)
    }
  }
}
