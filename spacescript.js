  //please comment 

   
    var spaceship = { //initial spaceship pos
        left: 1000,
        top: 1000
    };

    var score =0;

    var missiles = [];
    var Aliens = [  //initial alien pos
        { left: 575, top: 300 },
        { left: 675, top: 300 },
         { left: 775, top: 300 },
        { left: 875, top: 300 },
        { left: 975, top: 300 },
        { left: 1075, top: 300 },
        { left: 1175, top: 300 },
        { left: 1275, top: 300 },
        { left: 1375, top: 300 },
        { left: 575, top: 375 },
        { left: 675, top: 375 },



        { left: 775, top: 375 },
        { left: 875, top: 375 },
        { left: 975, top: 375 },
        { left: 1075, top: 375 },
        { left: 1175, top: 375 },
        { left: 1275, top: 375 },
         { left: 1375, top: 375 }
    ];
    
    document.onkeydown = function(e) { //controls
        if (e.keyCode === 37) {
            // Left
            spaceship.left = spaceship.left - 10;
        }
        if (e.keyCode === 39) {
            // Right
            spaceship.left = spaceship.left + 10;
        }
        if (e.keyCode === 32) {
            // Spacebar (fire)
            const audio = new Audio("assets/music/shoot.wav");
            audio.play();
            missiles.push({  // pushing missile element into array
                left: spaceship.left - 20, //missile placement
                top: spaceship.top - 15 
            });
            drawMissiles()
        }
        drawspaceship();
    }

    function drawspaceship() {
        document.getElementById('spaceship').style.top = spaceship.top + 'px';
        document.getElementById('spaceship').style.left = spaceship.left + 'px';
          }

    function drawMissiles() {
        document.getElementById('missiles').innerHTML = "" //
        for(var i = 0 ; i < missiles.length ; i++ ) { //amends the missile1 class
            document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
        }
    }

    function moveMissiles() {
        for(var i = 0 ; i < missiles.length ; i++ ) {
            missiles[i].top = missiles[i].top - 5;
        }
    }

    function drawAliens() { 
        document.getElementById('Aliens').innerHTML = ""
        for(var i = 0 ; i < Aliens.length ; i++ ) {
            document.getElementById('Aliens').innerHTML += `<div class='alien' style='left:${Aliens[i].left}px; top:${Aliens[i].top}px'></div>`;
        }
    }
    function moveAliens() {
        for(var i = 0 ; i < Aliens.length ; i++ ) {
            Aliens[i].top = Aliens[i].top + 1;
            //Aliens[i].left = Aliens[i].left + 1;
            //Aliens[i].left = Aliens[i].left - 2;  //different movements not working :(
           
           
        }
    }
    


    function collisionDetection() {
        for (var alien = 0; alien < Aliens.length; alien++) {
            for (var missile = 0; missile < missiles.length; missile++) {
                if (                                //if alien pos = missle pos
                    missiles[missile].left >= Aliens[alien].left  &&
                    missiles[missile].left <= (Aliens[alien].left + 50)  && //right
                    missiles[missile].top <= (Aliens[alien].top + 50)  &&  //bottom
                    missiles[missile].top >= Aliens[alien].top
                ) {
                    Aliens.splice(alien, 1); // destroys alien spaceship 
                    missiles.splice(missile, 1); // destroys missle that hit it
                    const audio = new Audio("assets/music/invaderkilled.wav");
                    audio.play();
                    score++;
                    document.getElementById('score').innerHTML = "Score: " + score;
                }
            }
        }
    }


    function player_hit(){
        for (var alien = 0; alien < Aliens.length; alien++){
            if (                                //if spaceship pos = alien pos
                    spaceship.left >= Aliens[alien].left  &&
                    spaceship.left <= (Aliens[alien].left + 50)  &&
                    spaceship.top <= (Aliens[alien].top + 50)  &&
                    spaceship.top >= Aliens[alien].top
                ) {
                    //  spaceship hit
                    spaceship.left = spaceship.left + 10000; // if player hit the spaceship goes offscreen
                    const audio = new Audio("assets/music/explosion.wav");
                    audio.play()
                    window.alert("you have died, the game will restart, your score is: " + score);
                    ;
                    
                    location.reload(); //webpage reloads
                }


        }
    }

    function winner(){            // player wins, next level spawns more 
        if(Aliens.length <= 0){ 
             nextLevel()
             Aliens.push(
         { left: 375, top: 300 },     
        { left: 475, top: 300 },
        { left: 575, top: 300 },
        { left: 675, top: 300 },
        { left: 775, top: 300 },
        { left: 875, top: 300 },
        { left: 975, top: 300 },
        { left: 1075, top: 300 },
        { left: 1175, top: 300 },
        { left: 1275, top: 300 },
        { left: 1375, top: 300 },
        { left: 1475, top: 300 },
        { left: 1575, top: 300 },
        { left: 475, top: 375 },
        { left: 575, top: 375 },
        { left: 675, top: 375 },
        { left: 775, top: 375 },
        { left: 875, top: 375 },
        { left: 975, top: 375 },
        { left: 1075, top: 375 },
        { left: 1175, top: 375 },
        { left: 1275, top: 375 },
        { left: 1375, top: 375 },
        { left: 1475, top: 375 },
        { left: 575, top: 450 },
        { left: 675, top: 450 },
        { left: 775, top: 450},
        { left: 875, top: 450 },
        { left: 975, top: 450 },
        { left: 1075, top: 450 },
        { left: 1175, top: 450 },
        { left: 1275, top: 450 },
        { left: 1375, top: 450 },

            )

             
                    
            }
        }
          
    
    function aliensWin(){ 
         for (var alien = 0; alien < Aliens.length; alien++){
            if (                                //if alien pos passes players
                    Aliens[alien].top >= (spaceship.top + 200)  
                ) {
                 
                    location.reload();
            }


         }

    }
    


    function gameLoop() {
        setTimeout(gameLoop, 50) // gamespeed, and fps?
        moveMissiles();
        drawMissiles();
        moveAliens();
        drawAliens();
        collisionDetection();
        player_hit();
        winner();
        aliensWin();
    }
    
    gameLoop()

    function nextLevel() {
        
        setTimeout(nextLevel, 100) //gamespeed
        moveMissiles();
        drawMissiles();
        moveAliens();
        drawAliens();
        collisionDetection();
        player_hit();
        aliensWin();
        
    }
     