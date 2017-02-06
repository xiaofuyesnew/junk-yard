//entry.js
require("./style.css")   //text-cmd: --module-bind "css=style-loader!css-loader"
const moduleInfo = require('./module')

document.write('It works!!!' + '<br>')
document.write(moduleInfo)