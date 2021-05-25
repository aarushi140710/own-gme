var gameState = 0, coins = 0;

// customers
var customer1, customer2, customer3, customer4, customer5, customer6, customer7, customer8;
var customer1Img, customer2Img, customer3Img, customer4Img, customer5Img, customer6Img, customer7Img, customer8Img;

// restaurant 
var resort, tabletop, chef, cheeseandcorn, deluxeveggie, farmhouse, margherita, paneertikka, paneermakhani, peppypaneer;
var resortImg, tabletopImg, chefImg, cheeseandcornImg, deluxeveggieImg, farmhouseImg, margheritaImg, paneertikkaImg, 
paneermakhaniImg, peppypaneerImg;

var bgSound;

//var coin, coinImg; 

function preload(){
    // customers
    customer1Img = loadImage("customer1.png");
    customer2Img = loadImage("customer2.png");
    customer3Img = loadImage("customer3.png");
    customer4Img = loadImage("customer4.png");
    customer5Img = loadImage("customer5.png");
    customer6Img = loadImage("customer6.png");
    customer7Img = loadImage("customer7.png");
    customer8Img = loadImage("customer8.png");

    // restaurant
    resortImg = loadImage("resort.png");
    tabletopImg = loadImage("tabletop.jpg");
    chefImg = loadImage("chef.png");
    cheeseandcornImg = loadImage("cheese and corn pizza.png");
    deluxeveggieImg = loadImage("deluxe veggie pizza.png");
    farmhouseImg = loadImage("farmhouse pizza.png");
    margheritaImg = loadImage("margherita pizza.png");
    paneertikkaImg = loadImage("paneer tika pizza.png");
    paneermakhaniImg = loadImage("paneer makhani pizza.png");
    peppypaneerImg = loadImage("peppy paneer pizza.png");

    bgSound = loadSound("bgsound.mpeg");

    //coinImg = loadImage("restaurant/coin.png");
    
}

function setup(){
    createCanvas(1500,850);
    
    resort = createSprite(750,425,1500,850);
    resort.addImage(resortImg);
    resort.scale = 1.56;
    resort.visible = true;

    tabletop = createSprite(750,425,1500,850);
    tabletop.addImage(tabletopImg);
    tabletop.scale = 2.82;
    tabletop.visible = false;

    chef = createSprite(110,650,10,10);
    chef.addImage(chefImg);
    chef.scale = 0.6;
    chef.visible = false;

    cheeseandcorn = createSprite(260,750,10,10);
    cheeseandcorn.addImage(cheeseandcornImg);
    cheeseandcorn.scale = 0.8;
    cheeseandcorn.visible = false;

    deluxeveggie = createSprite(450,750,10,10);
    deluxeveggie.addImage(deluxeveggieImg);
    deluxeveggie.scale = 1;
    deluxeveggie.visible = false;

    farmhouse = createSprite(640,760,10,10);
    farmhouse.addImage(farmhouseImg);
    farmhouse.scale = 0.14;
    farmhouse.visible = false;

    margherita = createSprite(820,750,10,10);
    margherita.addImage(margheritaImg);
    margherita.scale = 0.88;
    margherita.visible = false;

    paneertikka = createSprite(1015,750,10,10);
    paneertikka.addImage(paneertikkaImg);
    paneertikka.scale = 1.1;
    paneertikka.visible = false;

    paneermakhani = createSprite(1205,750,10,10);
    paneermakhani.addImage(paneermakhaniImg);
    paneermakhani.scale = 0.2;
    paneermakhani.visible = false;
    
    peppypaneer = createSprite(1395,750,10,10);
    peppypaneer.addImage(peppypaneerImg);
    peppypaneer.scale = 0.8;
    peppypaneer.visible = false;

    //coin = createSprite(100,100,10,10);
    //coin.addImage(coinImg);
    //coin.scale = 0.1;
    //coin.visible = false;

    bgSound.play();

}

function draw(){
    drawSprites();

    if(keyDown("space")){
        tabletop.visible = true;
        chef.visible = true; 
        cheeseandcorn.visible = true; 
        deluxeveggie.visible = true;
        farmhouse.visible = true;
        margherita.visible = true;
        paneertikka.visible = true;
        paneermakhani.visible = true; 
        peppypaneer.visible = true;

        gameState === 1;
    }

    //if(gameState === 1){
        //text("Coins : " +coins, 200,100);
    //}
}