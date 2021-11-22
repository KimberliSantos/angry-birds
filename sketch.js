const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var chao;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var fundo;
var plataforma;
var constrainedLog;
var cadeia;
var estadoJogo = "inicial"
var fundoImage = "banana/bg.png"
var pontuacao = 0;

function preload(){
defineFundo()

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    chao = new Ground(600,400,1200,20);
    pig1 = new Pig(810,350);
    log1= new Log(810,260,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);

    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
    bird = new Bird(200,50);

    plataforma = new Ground(150,305,300,170);
   // constrainedLog = new Log(230,180,80,PI/2);
    cadeia = new Estilingue(bird.body,{x:200,y:50});

}

function draw(){
    
    if(fundoImage){
        background(fundoImage);
    }else{
        background("black")
    }
fill("white");
textSize(35);
text("pontuação: "+pontuacao,900,50)



    Engine.update(engine);
    box1.display();
    box2.display();
    chao.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
    plataforma.display();
    //constrainedLog.display();
    cadeia.display();

pig1.placar()
pig2.placar()


if(bird.body.position.x  < 0 || bird.body.position.y < 0){
cadeia.anexa(bird.body)
Matter.Body.setPosition(bird.body,{x:200, y:50})
}
}
function mouseDragged(){
    if(estadoJogo==="inicial"){
        Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})

   }
    
}
function mouseReleased(){
    cadeia.fly()
    estadoJogo = "final"
}

function keyPressed(){
    if(keyCode===32){
        bird.trajetoria = []
        Matter.Body.setPosition(bird.body,{x:200, y:50})
cadeia.anexa(bird.body)
    }
}
async function consultaHorario() {
    // consulta a API pra saber o horario que estamos
    // fetch (recuperar)

    var resposta = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo")
    var respostaJson = await(resposta.json())
    return respostaJson.datetime.slice(11,13)
}
function defineFundo(){
    var horario = consultaHorario()
var fundo
    if(horario>=6 && horario<=19){
 fundo="banana/bg.png"
    }else{
        fundo="banana/bg2.jpg"
    }
    fundoImage = loadImage(fundo)
}