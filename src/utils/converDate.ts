export const formatDate = (date: Date | null | undefined): string => {
  if (!date) return "";

  const formatedDate = new Date(date).toLocaleString("en-GB", {
    year: "numeric",
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });

  return formatedDate.replace(" at", ",");
};
