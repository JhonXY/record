pwdFormat(value, callback) {
  var rC = {
    lW: '[a-z]',
    uW: '[A-Z]',
    nW: '[0-9]',
    sW: '[\\u0020-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E]'
  };
  function Reg(str, rStr) {
    var reg = new RegExp(rStr);
    if (reg.test(str)) return true;
    else return false;
  }
  let pwd = value.toString()
  if (pwd.length < 6) {
    callback('密码长度不得小于6位！')
  }
  if (pwd.length > 16) {
    callback('密码长度不得大于16位！')
  }
  var tR = {
    l: Reg(pwd, rC.lW),
    u: Reg(pwd, rC.uW),
    n: Reg(pwd, rC.nW),
    s: Reg(pwd, rC.sW)
  }
  if ((tR.l && tR.u && tR.n) || (tR.l && tR.u && tR.s) || (tR.s && tR.u && tR.n) || (tR.s && tR.l && tR.n)) {
    this.setState({ pwdIsValid: true })
  } else {
    callback('您的密码必须含有“小写字母”、“大写字母”、“数字”、“特殊符号”中的任意三种')
  }
},