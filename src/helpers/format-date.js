const dayjs = require("dayjs");
const advancedFormat = require("dayjs/plugin/advancedFormat");
function formatDate(dateToParse) {
  const date = new Date(dateToParse);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const seconds = date.getSeconds();
  const dateAsString = `${day}/${month}/${year}`;
  return dateAsString;
}

dayjs.extend(advancedFormat);
const dayjsFormat = (dateAsString) => {
  return dayjs(dateAsString, "DD/MM/YYYY").format();
};

module.exports = { formatDate, dayjsFormat };
