namespace SpriteKind {
    export const SocialMedia = SpriteKind.create()
    export const fahh = SpriteKind.create()
    export const person = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fahh, function (sprite, otherSprite) {
    story.spriteSayText(mySprite3, "Hey I made a super food called Jakis", 2, 15)
    story.spriteSayText(mySprite3, "It is super healthy ", 2, 15)
    story.spriteSayText(mySprite3, "This is the main ingredient: MSG", 2)
    story.spriteSayText(mySprite3, "Want a pack?", 2, 15)
    story.showPlayerChoices("Buy", "Pass")
    if (story.checkLastAnswer("Buy")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(1)
        story.spriteSayText(mySprite3, "Peace", 7, 15)
        sprites.destroy(mySprite3, effects.none, 100)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Video`, function (sprite, location) {
    story.startCutscene(function () {
        story.printCharacterText("This video explains how minecraft has been hacked", "Not clickbait")
        story.showPlayerChoices("belive", "not belive")
        if (story.checkLastAnswer("not belive")) {
            info.changeScoreBy(1)
        } else {
            info.changeScoreBy(-1)
        }
        story.cancelAllCutscenes()
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SocialMedia, function (sprite, otherSprite) {
    story.setPagePauseLength(2000, 2000)
    story.spriteSayText(mySprite2, "Hey I made a drink called Red Cow", 2, 15)
    story.spriteSayText(mySprite2, "Its a super food", 9, 15)
    story.spriteSayText(mySprite2, "Wanna get a can?", 1, 15)
    story.showPlayerChoices("Buy", "Pass")
    if (story.checkLastAnswer("Buy")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(1)
        sprites.destroy(mySprite2, effects.none, 100)
        story.spriteSayText(mySprite2, "Peace", 7, 15)
    }
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    info.setScore(10000000000000000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`AI`, function (sprite, location) {
    story.startCutscene(function () {
        story.printCharacterText("Is this video AI generated", "AI")
        story.showPlayerChoices("belive", "not belive", "IDK")
        if (story.checkLastAnswer("not belive")) {
            info.changeScoreBy(1)
        } else if (story.checkLastAnswer("IDK")) {
            game.setDialogFrame(img`
                bcb111111111111111111bcb
                cfc111111111111111111cfc
                bcb111111111111111111bcb
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                111111111111111111111111
                bcb111111111111111111bcb
                cfc111111111111111111cfc
                bcb111111111111111111bcb
                `)
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            info.changeScoreBy(-1)
        }
        story.cancelAllCutscenes()
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.person, function (sprite, otherSprite) {
    story.spriteSayText(mySprite4, "Hi this is yuck yuck", 5, 15)
    story.spriteSayText(mySprite4, "It is the most healthy super food", 5, 15)
    story.spriteSayText(mySprite4, "It has a ton of MSG in it which is totally healthy", 5)
    story.spriteSayText(mySprite4, "Want a pack?", 5, 15)
    story.showPlayerChoices("Buy", "Pass")
    if (story.checkLastAnswer("Buy")) {
        info.changeScoreBy(-1)
    } else {
        info.changeScoreBy(1)
        story.spriteSayText(mySprite4, "Peace", 7, 15)
        sprites.destroy(mySprite4, effects.none, 100)
    }
})
function Intro () {
    music.play(music.stringPlayable("C C5 E A D A G C5 ", 199), music.PlaybackMode.LoopingInBackground)
    game.setDialogCursor(assets.image`YouB`)
    color.setPalette(
    color.DIY
    )
    game.setDialogFrame(img`
        bcb111111111111111111bcb
        cfc111111111111111111cfc
        bcb111111111111111111bcb
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        bcb111111111111111111bcb
        cfc111111111111111111cfc
        bcb111111111111111111bcb
        `)
    game.showLongText("Oh you finally woke up", DialogLayout.Center)
    story.startCutscene(function () {
        story.printCharacterText("This is your training before you can save the internet", "Intro")
        story.printCharacterText("What is the healthiest drink", "Training")
        story.showPlayerChoices("Red cow", "Water")
        if (story.checkLastAnswer("Water")) {
            game.showLongText("Well done you got it correct Please move to continue", DialogLayout.Full)
        } else {
            game.showLongText("Uh oh ", DialogLayout.Full)
            game.reset()
        }
    })
}
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(assets.image`YouB`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 90, 90)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite2 = sprites.create(assets.image`influencer1`, SpriteKind.SocialMedia)
mySprite3 = sprites.create(assets.image`Influencer2`, SpriteKind.fahh)
mySprite4 = sprites.create(assets.image`influencer3`, SpriteKind.person)
mySprite2.follow(mySprite, 50)
mySprite3.follow(mySprite, 50)
mySprite4.follow(mySprite, 50)
mySprite.setPosition(101, 39)
mySprite2.setPosition(44, 63)
mySprite3.setPosition(107, 88)
mySprite4.setPosition(132, 92)
forever(function () {
    if (info.score() < 4) {
        controller.moveSprite(mySprite, 160, 160)
    }
})
forever(function () {
    if (info.score() < 3) {
        controller.moveSprite(mySprite, 150, 150)
    }
})
forever(function () {
    if (info.score() < 5) {
        controller.moveSprite(mySprite, 170, 170)
    }
})
forever(function () {
    if (info.score() < 6) {
        controller.moveSprite(mySprite, 180, 180)
    }
})
