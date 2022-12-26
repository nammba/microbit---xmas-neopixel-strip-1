input.onButtonPressed(Button.AB, function () {
    strip.clear()
    strip.show()
    if (mode == Number_of_Modes) {
        mode = 0
    } else {
        mode += 1
    }
    if (mode == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (mode == 2) {
        for (let index = 0; index <= Number_of_Lights; index++) {
            if (Math.randomBoolean()) {
                colour = neopixel.rgb(255, 0, 0)
            } else {
                colour = neopixel.rgb(0, 255, 0)
            }
            strip.setPixelColor(index, colour)
        }
    } else if (mode == 3) {
        strip.showRainbow(1, Number_of_Lights)
    }
    strip.show()
    basic.showNumber(mode)
})
let colour = 0
let strip: neopixel.Strip = null
let Number_of_Lights = 0
let mode = 0
let Number_of_Modes = 0
Number_of_Modes = 3
mode = 0
let defaultBrightness = 40
Number_of_Lights = 150
strip = neopixel.create(DigitalPin.P0, Number_of_Lights, NeoPixelMode.RGB)
strip.setBrightness(defaultBrightness)
strip.clear()
strip.show()
basic.showNumber(mode)
basic.forever(function () {
    if (mode == 2) {
        basic.pause(1000)
        strip.rotate(1)
        strip.show()
    } else if (mode == 3) {
        basic.pause(20)
        strip.rotate(1)
        strip.show()
    }
})
