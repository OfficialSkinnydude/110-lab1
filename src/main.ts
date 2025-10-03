import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer1 = new Konva.Layer();
const layer2 = new Konva.Layer();
const layer3 = new Konva.Layer();

stage.add(layer1);
stage.add(layer2);


const lemonShape = new Konva.Group({
    x: stage.width()/2,
    y: stage.height()/2,
    draggable : true
})

// create our shape
/*
const circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 80,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 12
});
*/
const ellipse = new Konva.Ellipse({
  x: 0,
  y: 0,
  radiusX: 100,
  radiusY: 50,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 2
});



const arc = new Konva.Arc({
  x: 0 + 70,
  y: 0,
  innerRadius: 35,
  outerRadius: 30,
  angle: 40,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 2
});

const arc1 = new Konva.Arc({
  x: 0 - 70,
  y: 0,
  innerRadius: 35,
  outerRadius: 30,
  angle: 40,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 2
});

const stroke = new Konva.Arc({
  x: 0 + 70,
  y: 0 ,
  innerRadius: 30,
  outerRadius: 30,
  angle: 40,
  fill: 'yellow',
  stroke: 'yellow',
  strokeWidth: 2.5
});

const stroke1 = new Konva.Arc({
  x: 0 - 70,
  y: 0,
  innerRadius: 30,
  outerRadius: 30,
  angle: 40,
  fill: 'yellow',
  stroke: 'yellow',
  strokeWidth: 2.5
});


const period = 2000;

const anim = new Konva.Animation(function(frame) {
const scale = Math.sin(frame.time * 2 * Math.PI / period) + 2;

// blue hex - scale x and y
lemonShape.scale({ x: scale, y: scale });

}, layer1);

lemonShape.on('pointerover', () => {
    stage.container().style.cursor = 'pointer';
    anim.start();
})

lemonShape.on('mouseleave', () => {
    stage.container().style.cursor = 'default'; 
    anim.stop();
});

arc.rotate(340)
arc1.rotate(160)
stroke.rotate(340)
stroke1.rotate(160)





// add the shape to the layer
//layer.add(circle);
/*
layer1.add(ellipse)
layer2.add(arc)
layer2.add(arc1)
layer1.add(stroke)
layer1.add(stroke1)
*/
lemonShape.add(ellipse)
lemonShape.add(arc)
lemonShape.add(arc1)
lemonShape.add(stroke)
lemonShape.add(stroke1)
layer1.add(lemonShape)
// add the layer to the stage
stage.add(layer1);



