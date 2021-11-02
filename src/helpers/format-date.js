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

module.exports = formatDate;
