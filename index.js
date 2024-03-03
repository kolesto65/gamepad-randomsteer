const ViGEmClient = require('vigemclient');
let client = new ViGEmClient();
client.connect();

let controller = client.createX360Controller();
controller.connect();

setInterval(()=> {Math.random() > 0.5 ? controller.axis.leftX.setValue(Math.random()) : controller.axis.leftX.setValue(-Math.random())}, 1000)
