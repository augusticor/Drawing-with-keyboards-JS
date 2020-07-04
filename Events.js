var keyboard = {
	LEFT: 37,
	RIGHT: 39,
	DOWN: 40,
	UP: 38,
};

var canvHTML = document.getElementById('canvasHTML');
var graphics = canvHTML.getContext('2d');
var parent = document.getElementById('canvasContent');
canvHTML.width = parent.offsetWidth;
canvHTML.height = parent.offsetHeight;
var drawCanvas = document.addEventListener('keydown', drawByKeyboard);

var btnApply = document.getElementById('btnApply');
btnApply.addEventListener('click', applyChanges);
var xBox = document.getElementById('initX');
var yBox = document.getElementById('initY');
var colorPicker = document.getElementById('colorPicker');
var initX = 0;
var initY = 0;
var choosenColor = '#FFF700';
const movement = 5;

//Functions
function applyChanges() {
	initX = parseInt(xBox.value);
	initY = parseInt(yBox.value);
	choosenColor = colorPicker.value;
}

function drawByKeyboard(eventi) {
	if ([32, 37, 38, 39, 40].indexOf(eventi.keyCode) > -1) {
		eventi.preventDefault();
	}
	switch (eventi.keyCode) {
		case keyboard.UP:
			drawLine(choosenColor, initX, initY, initX, (initY -= movement));
			yBox.value = initY;
			break;
		case keyboard.RIGHT:
			drawLine(choosenColor, initX, initY, (initX += movement), initY);
			xBox.value = initX;
			break;
		case keyboard.LEFT:
			drawLine(choosenColor, initX, initY, (initX -= movement), initY);
			xBox.value = initX;
			break;
		case keyboard.DOWN:
			drawLine(choosenColor, initX, initY, initX, (initY += movement));
			yBox.value = initY;
			break;
	}
}

function drawLine(color, xInitialPoint, yInitialPoint, xFinalPoint, yFinalPoint) {
	graphics.beginPath();
	graphics.strokeStyle = color;
	graphics.lineWidth = 4;
	graphics.moveTo(xInitialPoint, yInitialPoint);
	graphics.lineTo(xFinalPoint, yFinalPoint);
	graphics.stroke();
	graphics.closePath();
}

// Drawing canvas outline
graphics.beginPath();
graphics.strokeStyle = 'black';
graphics.lineWidth = 0.35;
graphics.moveTo(0, 0);
graphics.lineTo(canvHTML.width, 0);
graphics.lineTo(canvHTML.width, canvHTML.height);
graphics.lineTo(0, canvHTML.height);
graphics.lineTo(0, 0);
graphics.stroke();
graphics.closePath();
