let patterns = []
let distanceMario = 0
let distanceSkybox = 0
let distanceBackground = 0

let enterPressable = true
let echapPressable = true
let gameStarted = false
let playerMiss = false
let optionOpenned = false
let numberMiss = 0

let seconds = 00;
let milliseconds = 00;
let sec = document.getElementById('seconds')
let msec = document.getElementById('milliseconds')
let timer

let hub = new Audio()
hub.src = "sounds/hub.mp3"
let music = new Audio()
music.src = "sounds/music.mp3"

let click = new Audio()
click.src = "sounds/click.mp3"
let jump = new Audio()
jump.src = "sounds/jump.mp3"
let miss = new Audio()
miss.src = "sounds/miss.mp3"
let congrats = new Audio()
congrats.src = "sounds/congrats.mp3"

let close = document.getElementById('close')

//Vérifie si null valeur au départ ou yes il met le logo musiqueOn sinon musiqueOff

if (localStorage.getItem("SMJmusiqueOn") === null || localStorage.getItem("SMJmusiqueOn") === "yes") {
  musicIcon.src = "images/hud/musiqueOn.png"
}
else {
  musicIcon.src = "images/hud/musiqueOff.png"
}

//Vérifie si null au départ ou yes il met le logo soundOn sinon soundOff

if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") {
  soundIcon.src = "images/hud/soundOn.png"
}
else {
  soundIcon.src = "images/hud/soundOff.png"
}

//Quand on clique sur musique et que null au départ ou yes  alors ça met logo étaint et met sur no

musicIcon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJmusiqueOn") === null || localStorage.getItem("SMJmusiqueOn") === "yes") {
    musicIcon.src = "images/hud/musiqueOff.png"
    localStorage.setItem("SMJmusiqueOn", "no")
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
  }
  else {
    musicIcon.src = "images/hud/musiqueOn.png"
    localStorage.setItem("SMJmusiqueOn", "yes")
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
  }
})

//Quand on clique sur sounds et que null au départ ou yes  alors ça met logo étaint et met sur no

soundIcon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") {
    soundIcon.src = "images/hud/soundOff.png"
    localStorage.setItem("SMJsoundOn", "no")
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
  }
  else {
    soundIcon.src = "images/hud/soundOn.png"
    localStorage.setItem("SMJsoundOn", "yes")
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
  }
})

//Vérifie si les segments sont activés au début, alors afficher les icones des persos, des maps et du hardmode jouable 

if (localStorage.getItem("SMJsegment1") === "yes") {

  luigiIcon.src = "images/hud/luigiClickable.png"
  bg2Icon.src = "images/hud/backgroundClickable2.png"
}
if (localStorage.getItem("SMJsegment2") === "yes") {

  warioIcon.src = "images/hud/warioClickable.png"
  bg3Icon.src = "images/hud/backgroundClickable3.png"
}
if (localStorage.getItem("SMJsegment3") === "yes") {

  waluigiIcon.src = "images/hud/waluigiClickable.png"
  bg4Icon.src = "images/hud/backgroundClickable4.png"
}
if (localStorage.getItem("SMJsegment4") === "yes") {

  hardModeIcon.src = "images/hud/hardModeClickable.png"
}
checkCharacters()
checkMaps()
checkHardode()

//Vérifie le personnage joué en ce moment et affiche son icone et désactive les autres (si leurs segments on été fait bien sûr)

function checkCharacters() {
  if (localStorage.getItem("SMJcharacter") === "mario") {
    localStorage.setItem("SMJcharacter", "mario")

    sprite.style.backgroundImage = "url(images/characters/mario.png)"
    marioIcon.src = "images/hud/marioClicked.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { luigiIcon.src = "images/hud/luigiClickable.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { warioIcon.src = "images/hud/warioClickable.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { waluigiIcon.src = "images/hud/waluigiClickable.png" }
  }

  if (localStorage.getItem("SMJcharacter") === "luigi") {
    localStorage.setItem("SMJcharacter", "luigi")

    sprite.style.backgroundImage = "url(images/characters/luigi.png)"
    marioIcon.src = "images/hud/marioClickable.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { luigiIcon.src = "images/hud/luigiClicked.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { warioIcon.src = "images/hud/warioClickable.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { waluigiIcon.src = "images/hud/waluigiClickable.png" }
  }

  if (localStorage.getItem("SMJcharacter") === "wario") {
    localStorage.setItem("SMJcharacter", "wario")

    sprite.style.backgroundImage = "url(images/characters/wario.png)"
    marioIcon.src = "images/hud/marioClickable.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { luigiIcon.src = "images/hud/luigiClickable.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { warioIcon.src = "images/hud/warioClicked.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { waluigiIcon.src = "images/hud/waluigiClickable.png" }
  }

  if (localStorage.getItem("SMJcharacter") === "waluigi") {
    localStorage.setItem("SMJcharacter", "waluigi")

    sprite.style.backgroundImage = "url(images/characters/waluigi.png)"
    marioIcon.src = "images/hud/marioClickable.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { luigiIcon.src = "images/hud/luigiClickable.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { warioIcon.src = "images/hud/warioClickable.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { waluigiIcon.src = "images/hud/waluigiClicked.png" }
  }
}

//Vérifie la map joué en ce moment et affiche son icone et désactive les autres (si leurs segments on été fait bien sûr)

function checkMaps() {
  if (localStorage.getItem("SMJmap") === "1") {
    localStorage.setItem("SMJmap", "1")

    skybox.style.backgroundImage = "url(images/maps/skybox1.png)"
    background.style.backgroundImage = "url(images/maps/background1.png)"
    ground.style.backgroundImage = "url(images/maps/ground1.png)"

    bg1Icon.src = "images/hud/backgroundClicked1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClickable2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClickable3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClickable4.png" }
    if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClickable.png" }
  }

  if (localStorage.getItem("SMJmap") === "2") {
    localStorage.setItem("SMJmap", "2")

    skybox.style.backgroundImage = "url(images/maps/skybox2.png)"
    background.style.backgroundImage = "url(images/maps/background2.png)"
    ground.style.backgroundImage = "url(images/maps/ground2.png)"

    bg1Icon.src = "images/hud/backgroundClickable1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClicked2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClickable3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClickable4.png" }
  } if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClickable.png" }

  if (localStorage.getItem("SMJmap") === "3") {
    localStorage.setItem("SMJmap", "3")

    skybox.style.backgroundImage = "url(images/maps/skybox3.png)"
    background.style.backgroundImage = "url(images/maps/background3.png)"
    ground.style.backgroundImage = "url(images/maps/ground3.png)"

    bg1Icon.src = "images/hud/backgroundClickable1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClickable2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClicked3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClickable4.png" }
    if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClickable.png" }
  }

  if (localStorage.getItem("SMJmap") === "4") {
    localStorage.setItem("SMJmap", "4")

    skybox.style.backgroundImage = "url(images/maps/skybox4.png)"
    background.style.backgroundImage = "url(images/maps/background4.png)"
    ground.style.backgroundImage = "url(images/maps/ground4.png)"

    bg1Icon.src = "images/hud/backgroundClickable1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClickable2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClickable3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClicked4.png" }
  }
}

function checkHardode() {

  if (localStorage.getItem("SMJmap") === "5") {
    localStorage.setItem("SMJmap", "5")

    skybox.style.backgroundImage = "url(images/maps/skybox5.png)"
    background.style.backgroundImage = "url(images/maps/background5.gif)"
    ground.style.backgroundImage = "url(images/maps/ground5.png)"

    bg1Icon.src = "images/hud/backgroundClickable1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClickable2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClickable3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClickable4.png" }
    if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClicked.png" }
  }
}



//Vérifie quand on clique sur une icone de personnage si son segment a été fait, que le personnage n'a pas déjà été selectionné puis met son nom dans le LS et désaffiche les autres

marioIcon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment1") === "yes" && localStorage.getItem("SMJcharacter") !== "mario") {
    localStorage.setItem("SMJcharacter", "mario")

    sprite.style.backgroundImage = "url(images/characters/mario.png)"
    marioIcon.src = "images/hud/marioClicked.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { luigiIcon.src = "images/hud/luigiClickable.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { warioIcon.src = "images/hud/warioClickable.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { waluigiIcon.src = "images/hud/waluigiClickable.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }

})

luigiIcon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment1") === "yes" && localStorage.getItem("SMJcharacter") !== "luigi") {
    localStorage.setItem("SMJcharacter", "luigi")

    sprite.style.backgroundImage = "url(images/characters/luigi.png)"
    marioIcon.src = "images/hud/marioClickable.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { luigiIcon.src = "images/hud/luigiClicked.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { warioIcon.src = "images/hud/warioClickable.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { waluigiIcon.src = "images/hud/waluigiClickable.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }
})

warioIcon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment2") === "yes" && localStorage.getItem("SMJcharacter") !== "wario") {
    localStorage.setItem("SMJcharacter", "wario")

    sprite.style.backgroundImage = "url(images/characters/wario.png)"
    marioIcon.src = "images/hud/marioClickable.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { luigiIcon.src = "images/hud/luigiClickable.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { warioIcon.src = "images/hud/warioClicked.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { waluigiIcon.src = "images/hud/waluigiClickable.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }
})


waluigiIcon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment3") === "yes" && localStorage.getItem("SMJcharacter") !== "waluigi") {
    localStorage.setItem("SMJcharacter", "waluigi")

    sprite.style.backgroundImage = "url(images/characters/waluigi.png)"
    marioIcon.src = "images/hud/marioClickable.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { luigiIcon.src = "images/hud/luigiClickable.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { warioIcon.src = "images/hud/warioClickable.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { waluigiIcon.src = "images/hud/waluigiClicked.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }
})


//Vérifie quand on clique sur une icone de map si son segment a été fait, que la map n'a pas déjà été selectionné puis met son nom dans le LS et désaffiche les autres

bg1Icon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment1") === "yes" && localStorage.getItem("SMJmap") !== "1") {
    localStorage.setItem("SMJmap", "1")

    skybox.style.backgroundImage = "url(images/maps/skybox1.png)"
    background.style.backgroundImage = "url(images/maps/background1.png)"
    ground.style.backgroundImage = "url(images/maps/ground1.png)"

    bg1Icon.src = "images/hud/backgroundClicked1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClickable2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClickable3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClickable4.png" }
    if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClickable.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }
})

bg2Icon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment1") === "yes" && localStorage.getItem("SMJmap") !== "2") {
    localStorage.setItem("SMJmap", "2")

    skybox.style.backgroundImage = "url(images/maps/skybox2.png)"
    background.style.backgroundImage = "url(images/maps/background2.png)"
    ground.style.backgroundImage = "url(images/maps/ground2.png)"

    bg1Icon.src = "images/hud/backgroundClickable1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClicked2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClickable3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClickable4.png" }
    if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClickable.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }
})

bg3Icon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment2") === "yes" && localStorage.getItem("SMJmap") !== "3") {
    localStorage.setItem("SMJmap", "3")

    skybox.style.backgroundImage = "url(images/maps/skybox3.png)"
    background.style.backgroundImage = "url(images/maps/background3.png)"
    ground.style.backgroundImage = "url(images/maps/ground3.png)"

    bg1Icon.src = "images/hud/backgroundClickable1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClickable2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClicked3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClickable4.png" }
    if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClickable.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }
})


bg4Icon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment3") === "yes" && localStorage.getItem("SMJmap") !== "4") {
    localStorage.setItem("SMJmap", "4")

    skybox.style.backgroundImage = "url(images/maps/skybox4.png)"
    background.style.backgroundImage = "url(images/maps/background4.png)"
    ground.style.backgroundImage = "url(images/maps/ground4.png)"

    bg1Icon.src = "images/hud/backgroundClickable1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClickable2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClickable3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClicked4.png" }
    if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClickable.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }
})

hardModeIcon.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJsegment4") === "yes" && localStorage.getItem("SMJmap") !== "5") {
    localStorage.setItem("SMJmap", "5")

    skybox.style.backgroundImage = "url(images/maps/skybox5.png)"
    background.style.backgroundImage = "url(images/maps/background5.gif)"
    ground.style.backgroundImage = "url(images/maps/ground5.png)"

    bg1Icon.src = "images/hud/backgroundClickable1.png"
    if (localStorage.getItem("SMJsegment1") === "yes") { bg2Icon.src = "images/hud/backgroundClickable2.png" }
    if (localStorage.getItem("SMJsegment2") === "yes") { bg3Icon.src = "images/hud/backgroundClickable3.png" }
    if (localStorage.getItem("SMJsegment3") === "yes") { bg4Icon.src = "images/hud/backgroundClickable4.png" }
    if (localStorage.getItem("SMJsegment4") === "yes") { hardModeIcon.src = "images/hud/hardModeClicked.png" }

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") click.play()
  }
  else {
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }
  }
})


// Boucle qui relance la musique du hub si le jeu n'est pas lancé et que le timer est à 0

setInterval(() => {

  if (gameStarted === false && seconds === 00 && milliseconds === 00) {
    if (localStorage.getItem("SMJmusiqueOn") === null || localStorage.getItem("SMJmusiqueOn") === "yes") {
      hub.play()
    }
    else {
      hub.pause()
      hub.currentTime = 0
    }
  }
}, 50);

// Boucle qui relance la musique du hub si le jeu est lancé et que le timer est supérieur à 1

setInterval(() => {

  if (gameStarted === true && milliseconds > 01) {
    if (localStorage.getItem("SMJmusiqueOn") === null || localStorage.getItem("SMJmusiqueOn") === "yes") {
      music.play()
    }
    else {
      music.pause()
      music.currentTime = 3.8
    }
  }
}, 50);

//Lance le menu option en cliquant

options.addEventListener("click", (e) => {

  optionsMenu.style.display = "block"
  play.style.display = "none"
  options.style.display = "none"
  enterPressable = false
  echapPressable = false
  optionOpenned = true
  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
})

//Ferme le menu option en cliquant

close.addEventListener("click", (e) => {

  optionsMenu.style.display = "none"
  play.style.display = "block"
  options.style.display = "block"
  enterPressable = true
  echapPressable = true
  optionOpenned = false
  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
})

//Lance le jeu en cliquant sur Jouer

play.addEventListener("click", (e) => {

  enterPressable = false
  echapPressable = false
  chronometre.style.display = "block"
  gameStarted = true
  mobileBackgroundHit.style.display = "block"
  hud.style.display = "block"
  play.style.display = "none"
  title.style.display = "none"
  options.style.display = "none"
  replay.style.display = "none"
  menu.style.display = "none"
  credits.style.display = "none"
  author.style.display = "none"
  github.style.display = "none"

  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }

  if (localStorage.getItem("SMJmap") !== "5") {
    generatePatterns()
  }
  else {
    generatePatterns2()
  }
})

//Lance le jeu en cliquant sur Entrée

document.addEventListener("keydown", (e) => {

  if (e.key === "Enter" && enterPressable === true) {

    enterPressable = false
    echapPressable = false
    gameStarted = true
    mobileBackgroundHit.style.display = "block"
    chronometre.style.display = "block"
    play.style.display = "none"
    title.style.display = "none"
    options.style.display = "none"
    hud.style.display = "block"
    replay.style.display = "none"
    menu.style.display = "none"
    credits.style.display = "none"
    author.style.display = "none"
    github.style.display = "none"
    numberMiss = 0
    seconds = 00
    milliseconds = 00
    sec.innerHTML = "0" + seconds
    msec.innerHTML = "0" + milliseconds
    enterPressable = false

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }

    if (localStorage.getItem("SMJmap") !== "5") {
      generatePatterns()
    }
    else {
      generatePatterns2()
    }
  }
})

//Relance le jeu en cliquant sur rejouer et reset variables

replay.addEventListener("click", (e) => {

  enterPressable = false
  echapPressable = false
  chronometre.style.display = "block"
  gameStarted = true
  mobileBackgroundHit.style.display = "block"
  hud.style.display = "block"
  replay.style.display = "none"
  menu.style.display = "none"
  numberMiss = 0
  seconds = 00
  milliseconds = 00
  sec.innerHTML = "0" + seconds
  msec.innerHTML = "0" + milliseconds

  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }

  if (localStorage.getItem("SMJmap") !== "5") {
    generatePatterns()
  }
  else {
    generatePatterns2()
  }
})

//Si variable vrai donc il est dans menu en appuyant sur Echap alors ouvre options sinon ferme le menu sinon quitte le jeu et reset variables,

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && echapPressable === true) {

    optionsMenu.style.display = "block"
    play.style.display = "none"
    options.style.display = "none"
    enterPressable = false
    echapPressable = false
    optionOpenned = true
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
  }

  else if (e.key === "Escape" && optionOpenned === true) {

    optionsMenu.style.display = "none"
    play.style.display = "block"
    options.style.display = "block"
    enterPressable = true
    echapPressable = true
    optionOpenned = false
    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
  }

  else if (e.key === "Escape" && echapPressable === false) {

    chronometre.style.display = "block"
    gameStarted = false
    mobileBackgroundHit.style.display = "none"
    enterPressable = true
    echapPressable = true
    hud.style.display = "none"
    replay.style.display = "none"
    menu.style.display = "none"
    title.style.display = "block"
    credits.style.display = "block"
    author.style.display = "block"
    github.style.display = "block"
    play.style.display = "block"
    options.style.display = "block"
    music.pause()
    music.currentTime = 3.8
    numberMiss = 0
    seconds = 00
    milliseconds = 00
    sec.innerHTML = "0" + seconds
    msec.innerHTML = "0" + milliseconds
    clearInterval(timer)
    patterns.splice(0, 30)

    if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
    if (localStorage.getItem("SMJmusiqueOn") === null || localStorage.getItem("SMJmusiqueOn") === "yes") { hub.play() }
  }
})

//Quitte le jeu pour aller dans menu en cliquant dessus et reset variables

menu.addEventListener("click", (e) => {

  gameStarted = false
  mobileBackgroundHit.style.display = "none"
  enterPressable = true
  hud.style.display = "none"
  replay.style.display = "none"
  menu.style.display = "none"
  play.style.display = "block"
  title.style.display = "block"
  credits.style.display = "block"
  author.style.display = "block"
  github.style.display = "block"
  options.style.display = "block"
  numberMiss = 0
  seconds = 00
  milliseconds = 00
  sec.innerHTML = "0" + seconds
  msec.innerHTML = "0" + milliseconds

  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { click.play() }
  if (localStorage.getItem("SMJmusiqueOn") === null || localStorage.getItem("SMJmusiqueOn") === "yes") { hub.play() }
})

//Génère les 30 touches aléatoires de 1 à 4 dans le tableau patterns et les affiches toutes,(Haut, Gauche, Bas, Droite)
// le CSS affiche que les 3 premiers et laisse le reste en display none, mais ils sont quand même dans le DOM pour éviter des calculs pour les faire apparaître pour les connexions lentes

function generatePatterns() {
  arrows.innerHTML = ""
  while (patterns.length < 30) {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    patterns.push(randomNumber)
    if (randomNumber === 1) { arrows.innerHTML += "<img src=\"images/patterns/up.png\">" }
    if (randomNumber === 2) { arrows.innerHTML += "<img src=\"images/patterns/left.png\">" }
    if (randomNumber === 3) { arrows.innerHTML += "<img src=\"images/patterns/down.png\">" }
    if (randomNumber === 4) { arrows.innerHTML += "<img src=\"images/patterns/right.png\">" }
  }
}

//Génère les 30 touches aléatoires de 1 à 9 dans le tableau patterns et les affiches toutes,(1,2,3,4,5,6,7,8,9)
// le CSS affiche que les 3 premiers et laisse le reste en display none, mais ils sont quand même dans le DOM pour éviter des calculs pour les faire apparaître pour les connexions lentes

function generatePatterns2() {
  arrows.innerHTML = ""
  while (patterns.length < 30) {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    patterns.push(randomNumber)
    if (randomNumber === 1) { arrows.innerHTML += "<img src=\"images/patterns/1.png\">" }
    if (randomNumber === 2) { arrows.innerHTML += "<img src=\"images/patterns/2.png\">" }
    if (randomNumber === 3) { arrows.innerHTML += "<img src=\"images/patterns/3.png\">" }
    if (randomNumber === 4) { arrows.innerHTML += "<img src=\"images/patterns/4.png\">" }
    if (randomNumber === 5) { arrows.innerHTML += "<img src=\"images/patterns/5.png\">" }
    if (randomNumber === 6) { arrows.innerHTML += "<img src=\"images/patterns/6.png\">" }
    if (randomNumber === 7) { arrows.innerHTML += "<img src=\"images/patterns/7.png\">" }
    if (randomNumber === 8) { arrows.innerHTML += "<img src=\"images/patterns/8.png\">" }
    if (randomNumber === 9) { arrows.innerHTML += "<img src=\"images/patterns/9.png\">" }
  }
}

//supprime le premier élément du tableau et le premier enfant de arrows dans le DOM, le tout à chaque fois que cette fonction est appelé (à chaque touche success)

function removeArrows() {
  patterns.shift()
  arrows.removeChild(arrows.firstChild);
}

//Détecte si la touche pressé correspond à la première touche du tableau patterns (ZQSD) si oui vérifie chrono et le lance si il est pas lancé, et lance fonction move

document.addEventListener("keydown", (e) => {

  if (localStorage.getItem("SMJmap") !== "5") {

    if (e.key === "z" && patterns[0] === 1 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "q") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "s") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "d") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "z") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "s") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "d") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "z") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "q") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "d") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "z") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "q") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "s") { chrono(), missed() }

    if (e.key === "q" && patterns[0] === 2 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "s" && patterns[0] === 3 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "d" && patterns[0] === 4 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
  }
})

//Détecte si la touche pressé correspond à la première touche du tableau patterns (flèches directionnels) si oui vérifie chrono et le lance si il est pas lancé, et lance fonction move

document.addEventListener("keydown", (e) => {

  if (localStorage.getItem("SMJmap") !== "5") {

    if (e.key === "ArrowUp" && patterns[0] === 1 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "ArrowLeft") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "ArrowDown") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "ArrowRight") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "ArrowUp") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "ArrowDown") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "ArrowRight") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "ArrowUp") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "ArrowLeft") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "ArrowRight") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "ArrowUp") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "ArrowLeft") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "ArrowDown") { chrono(), missed() }

    if (e.key === "ArrowLeft" && patterns[0] === 2 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "ArrowDown" && patterns[0] === 3 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "ArrowRight" && patterns[0] === 4 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
  }
})

//Détecte si l'endroit de l'écran clicaué correspond à la première touche du tableau patterns (clic écrans pour mobile)
// si oui vérifie chrono et le lance si il est pas lancé, et lance fonction move

leftHit.addEventListener("click", (e) => {

  if (localStorage.getItem("SMJmap") !== "5") {
    if (patterns[0] === 2 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
    else if (patterns[0] === 1 && gameStarted === true) { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true) { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true) { chrono(), missed() }
  }
})
upHit.addEventListener("click", (e) => {
  if (localStorage.getItem("SMJmap") !== "5") {
    if (patterns[0] === 1 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
    else if (patterns[0] === 2 && gameStarted === true) { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true) { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true) { chrono(), missed() }
  }
})
downHit.addEventListener("click", (e) => {
  if (localStorage.getItem("SMJmap") !== "5") {
    if (patterns[0] === 3 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
    else if (patterns[0] === 1 && gameStarted === true) { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true) { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true) { chrono(), missed() }
  }
})
rightHit.addEventListener("click", (e) => {
  if (localStorage.getItem("SMJmap") !== "5") {
    if (patterns[0] === 4 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
    else if (patterns[0] === 1 && gameStarted === true) { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true) { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true) { chrono(), missed() }
  }
})

//Détecte si la touche pressé correspond à la première touche du tableau patterns (clavier numérique pour le hardmode)
// si oui vérifie chrono et le lance si il est pas lancé, et lance fonction move

document.addEventListener("keydown", (e) => {

  if (localStorage.getItem("SMJmap") === "5") {
    if (e.key === "1" && patterns[0] === 1 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "2") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "3") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "4") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "5") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "6") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "7") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "8") { chrono(), missed() }
    else if (patterns[0] === 1 && gameStarted === true && e.key === "9") { chrono(), missed() }

    else if (patterns[0] === 2 && gameStarted === true && e.key === "1") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "3") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "4") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "5") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "6") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "7") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "8") { chrono(), missed() }
    else if (patterns[0] === 2 && gameStarted === true && e.key === "9") { chrono(), missed() }

    else if (patterns[0] === 3 && gameStarted === true && e.key === "1") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "2") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "4") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "5") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "6") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "7") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "8") { chrono(), missed() }
    else if (patterns[0] === 3 && gameStarted === true && e.key === "9") { chrono(), missed() }

    else if (patterns[0] === 4 && gameStarted === true && e.key === "1") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "2") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "3") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "5") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "6") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "7") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "8") { chrono(), missed() }
    else if (patterns[0] === 4 && gameStarted === true && e.key === "9") { chrono(), missed() }

    else if (patterns[0] === 5 && gameStarted === true && e.key === "1") { chrono(), missed() }
    else if (patterns[0] === 5 && gameStarted === true && e.key === "2") { chrono(), missed() }
    else if (patterns[0] === 5 && gameStarted === true && e.key === "3") { chrono(), missed() }
    else if (patterns[0] === 5 && gameStarted === true && e.key === "4") { chrono(), missed() }
    else if (patterns[0] === 5 && gameStarted === true && e.key === "6") { chrono(), missed() }
    else if (patterns[0] === 5 && gameStarted === true && e.key === "7") { chrono(), missed() }
    else if (patterns[0] === 5 && gameStarted === true && e.key === "8") { chrono(), missed() }
    else if (patterns[0] === 5 && gameStarted === true && e.key === "9") { chrono(), missed() }

    else if (patterns[0] === 6 && gameStarted === true && e.key === "1") { chrono(), missed() }
    else if (patterns[0] === 6 && gameStarted === true && e.key === "2") { chrono(), missed() }
    else if (patterns[0] === 6 && gameStarted === true && e.key === "3") { chrono(), missed() }
    else if (patterns[0] === 6 && gameStarted === true && e.key === "4") { chrono(), missed() }
    else if (patterns[0] === 6 && gameStarted === true && e.key === "5") { chrono(), missed() }
    else if (patterns[0] === 6 && gameStarted === true && e.key === "7") { chrono(), missed() }
    else if (patterns[0] === 6 && gameStarted === true && e.key === "8") { chrono(), missed() }
    else if (patterns[0] === 6 && gameStarted === true && e.key === "9") { chrono(), missed() }

    else if (patterns[0] === 7 && gameStarted === true && e.key === "1") { chrono(), missed() }
    else if (patterns[0] === 7 && gameStarted === true && e.key === "2") { chrono(), missed() }
    else if (patterns[0] === 7 && gameStarted === true && e.key === "3") { chrono(), missed() }
    else if (patterns[0] === 7 && gameStarted === true && e.key === "4") { chrono(), missed() }
    else if (patterns[0] === 7 && gameStarted === true && e.key === "5") { chrono(), missed() }
    else if (patterns[0] === 7 && gameStarted === true && e.key === "6") { chrono(), missed() }
    else if (patterns[0] === 7 && gameStarted === true && e.key === "8") { chrono(), missed() }
    else if (patterns[0] === 7 && gameStarted === true && e.key === "9") { chrono(), missed() }

    else if (patterns[0] === 8 && gameStarted === true && e.key === "1") { chrono(), missed() }
    else if (patterns[0] === 8 && gameStarted === true && e.key === "2") { chrono(), missed() }
    else if (patterns[0] === 8 && gameStarted === true && e.key === "3") { chrono(), missed() }
    else if (patterns[0] === 8 && gameStarted === true && e.key === "4") { chrono(), missed() }
    else if (patterns[0] === 8 && gameStarted === true && e.key === "5") { chrono(), missed() }
    else if (patterns[0] === 8 && gameStarted === true && e.key === "6") { chrono(), missed() }
    else if (patterns[0] === 8 && gameStarted === true && e.key === "7") { chrono(), missed() }
    else if (patterns[0] === 8 && gameStarted === true && e.key === "9") { chrono(), missed() }

    else if (patterns[0] === 9 && gameStarted === true && e.key === "1") { chrono(), missed() }
    else if (patterns[0] === 9 && gameStarted === true && e.key === "2") { chrono(), missed() }
    else if (patterns[0] === 9 && gameStarted === true && e.key === "3") { chrono(), missed() }
    else if (patterns[0] === 9 && gameStarted === true && e.key === "4") { chrono(), missed() }
    else if (patterns[0] === 9 && gameStarted === true && e.key === "5") { chrono(), missed() }
    else if (patterns[0] === 9 && gameStarted === true && e.key === "6") { chrono(), missed() }
    else if (patterns[0] === 9 && gameStarted === true && e.key === "7") { chrono(), missed() }
    else if (patterns[0] === 9 && gameStarted === true && e.key === "8") { chrono(), missed() }

    if (e.key === "2" && patterns[0] === 2 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "3" && patterns[0] === 3 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "4" && patterns[0] === 4 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "5" && patterns[0] === 5 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "6" && patterns[0] === 6 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "7" && patterns[0] === 7 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "8" && patterns[0] === 8 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }

    if (e.key === "9" && patterns[0] === 9 && gameStarted === true && playerMiss === false) { removeArrows(), chrono(), move(), checkEnd() }
  }
})


// Fonction chrono lancé à chaque input réussi pour vérifier si il n'est pas lancé, alors le lancer et timer qui tant le jeu tourne, incrémente des variables
// et les injecte à l'écran en innerHTML 

function chrono() {

  if (seconds === 00 && milliseconds === 00) {
    timer = setInterval(function () {

      milliseconds++

      if (milliseconds < 9) {
        msec.innerHTML = "0" + milliseconds
      }

      if (milliseconds > 9) {
        msec.innerHTML = milliseconds
      }
      if (milliseconds > 99) {
        seconds++
        sec.innerHTML = "0" + seconds
        milliseconds = 0
        msec.innerHTML = "0" + 0;
      }
      if (seconds > 9) {
        sec.innerHTML = seconds
      }
    }, 10);
  }
}

// Fonction checkEnd lancé à chaque input réussi pour vérifier si il reste encore des patterns donc rien faire sinon mettre le texte de fin et jouer la fonction de fin

function checkEnd() {

  if (patterns.length === 0 && numberMiss === 0) { arrows.innerHTML = "Bravo ! Vous avez fini en " + seconds + "." + milliseconds + "s et sans faute !", end() }
  else if (patterns.length === 0 && numberMiss === 1) { arrows.innerHTML = "Bravo ! Vous avez fini en " + seconds + "." + milliseconds + "s et avec 1 faute !", end() }
  else if (patterns.length === 0 && numberMiss > 1) { arrows.innerHTML = "Bravo ! Vous avez fini en " + seconds + "." + milliseconds + "s et avec " + numberMiss + " fautes !", end() }
  else if (patterns.length === 0 && numberMiss === 0 && milliseconds === 0) { arrows.innerHTML = "Bravo ! Vous avez fini en " + seconds + ".0" + milliseconds + "s et sans faute !", end() }
  else if (patterns.length === 0 && numberMiss === 1 && milliseconds === 0) { arrows.innerHTML = "Bravo ! Vous avez fini en " + seconds + ".0" + milliseconds + "s et avec 1 faute !", end() }
  else if (patterns.length === 0 && numberMiss > 1 && milliseconds === 0) { arrows.innerHTML = "Bravo ! Vous avez fini en " + seconds + ".0" + milliseconds + "s et avec " + numberMiss + " fautes !", end() }
}

// Fonction de fin appellé si il ne reste plus de pattern après la vérification du checkEnd 

function end() {

  chronometre.style.display = "none"
  music.pause(),
    music.currentTime = 3.8;
  clearInterval(timer),
    gameStarted = false,
    mobileBackgroundHit.style.display = "none"
  replay.style.display = "block",
    menu.style.display = "block",
    enterPressable = true

  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { congrats.play() }

  //Vérifie le temps à la fin si il est dessous de certaines valeurs, active certains segments

  if (seconds < 10) { localStorage.setItem("SMJsegment1", "yes") }
  if (seconds < 9) { localStorage.setItem("SMJsegment2", "yes") }
  if (seconds < 8) { localStorage.setItem("SMJsegment3", "yes") }
  if (seconds < 7) { localStorage.setItem("SMJsegment4", "yes") }

  //Puis vérifie si les segments sont activés, alors afficher les icones des persos et des maps jouables 

  if (localStorage.getItem("SMJsegment1") === "yes") {

    luigiIcon.src = "images/hud/luigiClickable.png"
    bg2Icon.src = "images/hud/backgroundClickable2.png"
  }
  if (localStorage.getItem("SMJsegment2") === "yes") {

    warioIcon.src = "images/hud/warioClickable.png"
    bg3Icon.src = "images/hud/backgroundClickable3.png"
  }
  if (localStorage.getItem("SMJsegment3") === "yes") {

    waluigiIcon.src = "images/hud/waluigiClickable.png"
    bg4Icon.src = "images/hud/backgroundClickable4.png"
  }
  if (localStorage.getItem("SMJsegment4") === "yes") {

    hardModeIcon.src = "images/hud/hardModeClickable.png"
  }

  checkCharacters()
  checkMaps()
  checkHardode()
}

// Fonction appellé à chaque erreur du joueur

function missed() {

  numberMiss++
  sprite.style.backgroundPosition = "-480px"
  character.style.animation = "miss 0.25s"
  playerMiss = true
  hub.pause()
  hub.currentTime = 0

  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { miss.play() }

  setTimeout(() => {
    sprite.style.backgroundPosition = "0px",
      playerMiss = false,
      character.style.removeProperty('animation')
  }, 250);

}

// Fonction appellé à chaque inputs réussis

function move() {

  sprite.style.backgroundPosition = "-240px",
    hub.pause(),
    hub.currentTime = 0
  if (localStorage.getItem("SMJsoundOn") === null || localStorage.getItem("SMJsoundOn") === "yes") { jump.play() }

  distanceMario = distanceMario - 400
  ground.style.backgroundPosition = distanceMario + "px"

  distanceSkybox = distanceSkybox - 25
  skybox.style.backgroundPosition = distanceSkybox + "px"

  distanceBackground = distanceBackground - 50
  background.style.backgroundPosition = distanceBackground + "px"

  character.style.animation = "jump 0.25s"

  setTimeout(() => {
    character.style.removeProperty('animation'),
      sprite.style.backgroundPosition = "0px"
  }, 200);
}
// Pour tout autres renseignements, veuillez me contacter par mon formulaire de contact sur https://rida-mouhssine.fr