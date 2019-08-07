const getCookie = (cname) => {
  const cookieArr = window.document.cookie.split('; ');
  const cookieObj = cookieArr.reduce((prev, current) => {
    const [ key, value ] = current.split('=');
    prev[key] = value;
    return prev;
  }, {})
  return cookieObj[cname] || ''
}

export default getCookie;

