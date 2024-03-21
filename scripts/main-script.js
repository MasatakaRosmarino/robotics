var currentUrl = location.href;
var currentRootPathArray = currentUrl.split("/");

var indexOfRootFolder = currentRootPathArray.indexOf("robotics");

var rootFolderArray = currentRootPathArray.slice(0, (indexOfRootFolder + 1));

/**This is the url leading to the root folder: robotics */
var rootFolderPath = rootFolderArray.join("/");

/**This is the name of the page in the current URL */
var currentPage = currentRootPathArray.pop();

/**Displays the current folder in the URL named electronics or physics */
var currentUrlFolder = currentRootPathArray.join("/");

/** get image tags and set the exact path extending from the rootFolderPath variable*/
var imagesList = document.getElementsByTagName("img");
//alert("image tags: " + imagesList.length);
for(var i = 0; i < imagesList.length; i++){
    var srcPath = imagesList[i].getAttribute("src");
    srcPath = rootFolderPath + "/asset/images/" + srcPath;
    imagesList[i].setAttribute("src", srcPath);
}
/** */

/** get anchor tags and set the exact path extending from the rootFolderPath variable*/
var analogAnchor = document.getElementById("analog");
var digitalAnchor = document.getElementById("digital");
var arduinoAnchor = document.getElementById("arduino");
var mechanicsAnchor = document.getElementById("mechanics");

analogAnchor.href = rootFolderPath + "/pages/electronics/analog/analog-main.html";
digitalAnchor.href = rootFolderPath + "/pages/electronics/digital/digital-main.html";
arduinoAnchor.href = rootFolderPath + "/pages/electronics/arduino/arduino-main.html";

var dropdownMenu = document.getElementById("content-menu");

var menuList = [];

var menuItemsList = [];

if(currentUrlFolder.includes("analog")){
    menuList.push(createMenuElement(currentUrlFolder + "/tools.html", "dropdown-item", "Tools of the trade"));
    menuList.push(createMenuElement(currentUrlFolder + "/light-bulb.html", "dropdown-item", "Light bulbs"));
    menuList.push(createMenuElement(currentUrlFolder + "/ohm-law.html", "dropdown-item", "Ohm's law"));
    menuList.push(createMenuElement(currentUrlFolder + "/diode.html", "dropdown-item", "Diodes"));
    menuList.push(createMenuElement(currentUrlFolder + "/led.html", "dropdown-item", "LEDs"));
    menuList.push(createMenuElement(currentUrlFolder + "/led-current-relation.html", "dropdown-item", "LED-current relation"));
    menuList.push(createMenuElement(currentUrlFolder + "/potentiometer.html", "dropdown-item", "Potentiometers"));
    menuList.push(createMenuElement(currentUrlFolder + "/battery.html", "dropdown-item", "Batteries"));
    menuList.push(createMenuElement(currentUrlFolder + "/power-law.html", "dropdown-item", "Power law"));
    menuList.push(createMenuElement(currentUrlFolder + "/resistors-power-ratings.html", "dropdown-item", "Resistors power ratings"));
    menuList.push(createMenuElement(currentUrlFolder + "/series-circuit.html", "dropdown-item", "Series circuits"));
    menuList.push(createMenuElement(currentUrlFolder + "/parallel-circuit.html", "dropdown-item", "Parallel circuits"));
    menuList.push(createMenuElement(currentUrlFolder + "/brushless-dc-motor.html", "dropdown-item", "Brushless DC motors"));
    menuList.push(createMenuElement(currentUrlFolder + "/voltage-divider.html", "dropdown-item", "Voltage dividers"));
    menuList.push(createMenuElement(currentUrlFolder + "/current-divider.html", "dropdown-item", "Current dividers"));
    menuList.push(createMenuElement(currentUrlFolder + "/capacitor.html", "dropdown-item", "Capacitors"));
    menuList.push(createMenuElement(currentUrlFolder + "/series-capacitor.html", "dropdown-item", "Capacitors in series"));
    menuList.push(createMenuElement(currentUrlFolder + "/parallel-capacitor.html", "dropdown-item", "Capacitors in parallel"));
    menuList.push(createMenuElement(currentUrlFolder + "/bjt-npn-transistor.html", "dropdown-item", "BJT NPN transistor"));
    menuList.push(createMenuElement(currentUrlFolder + "/bjt-pnp-transistor.html", "dropdown-item", "BJT PNP transistor"));
    menuList.push(createMenuElement(currentUrlFolder + "/pir-sensor.html", "dropdown-item", "PIR sensor"));
}

if(currentUrlFolder.includes("digital")){
    menuList.push(createMenuElement(currentUrlFolder + "/binary-digit.html", "dropdown-item", "Binary digits"));
    menuList.push(createMenuElement(currentUrlFolder + "/chip-types.html", "dropdown-item", "Chip types"));
}

if(currentUrlFolder.includes("arduino")){
    menuList.push(createMenuElement(currentUrlFolder + "/board-spec.html", "dropdown-item", "Boards types & specs"));
    menuList.push(createMenuElement(currentUrlFolder + "/communication.html", "dropdown-item", "Communication"));
    menuList.push(createMenuElement(currentUrlFolder + "/digital-pins-output.html", "dropdown-item", "Digital pins outputs"));
    menuList.push(createMenuElement(currentUrlFolder + "/pir-sensor-and-led.html", "dropdown-item", "PIR sensor with LED"));
    menuList.push(createMenuElement(currentUrlFolder + "/analog-input.html", "dropdown-item", "Analog input"));
    menuList.push(createMenuElement(currentUrlFolder + "/analog-input-output.html", "dropdown-item", "Analog input and output"));
    menuList.push(createMenuElement(currentUrlFolder + "/analog-output.html", "dropdown-item", "Analog output"));
    menuList.push(createMenuElement(currentUrlFolder + "/photoresistor.html", "dropdown-item", "Photoresistor"));
    menuList.push(createMenuElement(currentUrlFolder + "/9g-microservo.html", "dropdown-item", "9g microservo"));
    menuList.push(createMenuElement(currentUrlFolder + "/9g-microservo-torque.html", "dropdown-item", "9g microservo torque"));
    menuList.push(createMenuElement(currentUrlFolder + "/kingmax-RGD01L-servo.html", "dropdown-item", "kingmax-RGD01L servo"));
    menuList.push(createMenuElement(currentUrlFolder + "/feetech-FT5330M-servo.html", "dropdown-item", "feetech-FT5330M servo"));
    menuList.push(createMenuElement(currentUrlFolder + "/kingmax-DCS16942CHV.html", "dropdown-item", "kingmax-DCS16942CHV servo"));
}

if(currentUrlFolder.includes("mechanics")){
    menuList.push(createMenuElement(currentUrlFolder + "/forces.html", "dropdown-item", "Forces and vectors"));
    menuList.push(createMenuElement(currentUrlFolder + "/law-of-sines-and-cosines.html", "dropdown-item", "Law of sines and cosines"));

}

for(var i=0; i< menuList.length; i++){
    dropdownMenu.appendChild(menuList[i]);
}

function createMenuElement(href, classList, textContent){
    var newMenuItem = document.createElement("a");

    newMenuItem.setAttribute("href", href);
    newMenuItem.classList.add(classList);
    newMenuItem.textContent = textContent;

    return newMenuItem;
}