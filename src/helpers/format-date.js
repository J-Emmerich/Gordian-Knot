const dayjs = require("dayjs");
const advancedFormat = require("dayjs/plugin/advancedFormat");

function formatDate(dateToParse) {
  const date = new Date(dateToParse);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateAsString = `${day}/${month}/${year}`;
  return dateAsString;
}

dayjs.extend(advancedFormat);
const dayjsFormat = (dateAsString) =>
  dayjs(dateAsString, "DD/MM/YYYY").format();

module.exports = { formatDate, dayjsFormat };
