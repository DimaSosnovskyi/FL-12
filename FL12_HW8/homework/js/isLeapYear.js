function isLeapYear (x) {
  let year = new Date(x).getFullYear();
  if (isNaN(year)) {
    return 'Invalid Date';
  }
  let febDate = new Date(year, 1, 29);
  return febDate.getDate() === 29
    ? `${year} is a leap year’`
    : `${year} is not a leap year’`;
}
isLeapYear('2020-01-01 00:00:00');