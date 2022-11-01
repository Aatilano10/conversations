namespace SpriteKind {
    export const Princess = SpriteKind.create()
}
function conversation () {
    mySprite.sayText("hELlo")
    pause(500)
    Princess.sayText("HELLO")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    conversation()
    changeScore()
})
function changeScore () {
    info.changeScoreBy(1)
    music.powerUp.play()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Princess, function (sprite, otherSprite) {
    conversation()
})
let Princess: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
Princess = sprites.create(assets.image`Princess`, SpriteKind.Player)
Princess.setPosition(50, 50)
