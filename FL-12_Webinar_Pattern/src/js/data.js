const getMock  = (url,cb) => {
  fetch(url)
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      cb(data)
  })
}
export { getMock }
