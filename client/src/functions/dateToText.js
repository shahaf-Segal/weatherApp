export const convertDateFormat = (dateStr) => {
  const [datePart, timePart] = dateStr.split(" ");
  const formattedDate = datePart.replace(/-/g, "/");
  return `${formattedDate} at ${timePart}`;
};
