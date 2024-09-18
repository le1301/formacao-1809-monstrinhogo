let steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps)
    } else if (steps == 15) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # # . # #
            . # # # .
            `)
        basic.pause(1000)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Duck)
        basic.pause(5000)
        basic.clearScreen()
        steps = 0
    }
})
