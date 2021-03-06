// json
export function formatJson(msg) {
  // return msg
  var rep = '~'
  var jsonStr = JSON.stringify(msg, null, rep)
  var str = ''
  for (var i = 0; i < jsonStr.length; i++) {
    var text2 = jsonStr.charAt(i)
    if (i > 1) {
      var text = jsonStr.charAt(i - 1)
      if (rep != text && rep == text2) {
        str += '<br/>'
      }
    }
    str += text2
  }
  jsonStr = ''
  for (var i = 0; i < str.length; i++) {
    var text = str.charAt(i)
    if (rep == text) jsonStr += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    else {
      jsonStr += text
    }
    if (i == str.length - 2) jsonStr += '<br/>'
  }
  return jsonStr
}
