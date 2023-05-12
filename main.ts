basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    # # # # #
    # # . # #
    # . . . #
    # # . # #
    # # # # #
    `)
basic.pause(500)
basic.showString("!")
serial.writeLine("Hello!")
serial.writeLine("STI2D")
basic.pause(1000)
basic.forever(function () {
	
})
