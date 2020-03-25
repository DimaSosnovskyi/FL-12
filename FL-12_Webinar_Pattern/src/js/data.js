const getMock  = (url) => {
  const promis = fetch(url);
  return promis;
}
export { getMock }
