module.exports = function (str) {

  return str.replace(/\033\[[0-9;]*m/g, '')
}


