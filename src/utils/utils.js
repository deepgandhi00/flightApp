const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDayOrdinal = day => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const getFormattedDate = date => {
  let formattedDate = new Date(date);
  return `${formattedDate.getDate()}${getDayOrdinal(formattedDate.getDate())} ${
    monthNames[formattedDate.getMonth()]
  }, ${formattedDate.getFullYear()}`;
};
