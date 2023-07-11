export const formatDate = (date) => {
  const newDate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateTimeFormat = new Intl.DateTimeFormat("es-ES", options);
  return dateTimeFormat.format(newDate);
};
