import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

export function formatDate(dateToParse: string | number | Date): string {
  const date = new Date(dateToParse);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateAsString = `${day}/${month}/${year}`;
  return dateAsString;
}

dayjs.extend(advancedFormat);

export const dayjsFormat = (dateAsString: string): string =>
  dayjs(dateAsString, 'DD/MM/YYYY').format();
