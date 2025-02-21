import { MatPaginatorIntl } from '@angular/material/paginator';

const germanRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) {
    return `0 von ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} von ${length}`;
};

export function getGermanPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Einträge pro Seite:';
  paginatorIntl.nextPageLabel = 'nächste Seite';
  paginatorIntl.previousPageLabel = 'vorherige Seite';
  paginatorIntl.lastPageLabel = 'letzte Seite';
  paginatorIntl.firstPageLabel = 'erste Seite';
  paginatorIntl.getRangeLabel = germanRangeLabel;

  return paginatorIntl;
}
