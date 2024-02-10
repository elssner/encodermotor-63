input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Umdrehungen += -1
    basic.showNumber(Umdrehungen)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Encoder = 0
    motors.dualMotorPower(Motor.M0, Prozent)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Umdrehungen += 1
    basic.showNumber(Umdrehungen)
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    Encoder += 1
    o4digit.show(Encoder)
    if (Encoder >= Umdrehungen * 190 / 3) {
        motors.dualMotorPower(Motor.M0, 0)
    }
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Hold), function () {
    Prozent += -5
    basic.showNumber(Prozent)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    Prozent += 5
    basic.showNumber(Prozent)
})
let Umdrehungen = 0
let Prozent = 0
let Encoder = 0
let o4digit: grove.TM1637 = null
o4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
o4digit.set(7)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
Encoder = 0
Prozent = 20
