input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    _("Uhr stellen langsam rückwärts")
    bUhrstellen = true
    motors.dualMotorPower(Motor.M0, -40)
    basic.setLedColors(0xff9da5, 0x000000, 0x000000)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    _("Uhr stellen vorwärts")
    bUhrstellen = true
    motors.dualMotorPower(Motor.M0, 80)
    basic.setLedColors(0x000000, 0x000000, 0xff8000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    _("Uhr stellen Stop")
    motors.dualMotorPower(Motor.M0, 0)
    bUhrstellen = false
    Minuten = 0
    Encoder = 0
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    Encoder += 1
    if (Encoder >= Minuten * (Umdrehungen * 191 / 3)) {
        if (!(bUhrstellen)) {
            motors.dualMotorPower(Motor.M0, 0)
            basic.turnRgbLedOff()
        }
        o4digit.show(Encoder % 10000)
    }
})
function _ (Kommentar: string) {
	
}
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Hold), function () {
    MotorProzent += -5
    basic.showNumber(MotorProzent)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    MotorProzent += 5
    basic.showNumber(MotorProzent)
})
let bUhrstellen = false
let MotorProzent = 0
let Encoder = 0
let Minuten = 0
let Umdrehungen = 0
let o4digit: grove.TM1637 = null
o4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
o4digit.set(7)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
Umdrehungen = 1
Minuten = 0
Encoder = 0
MotorProzent = 20
bUhrstellen = false
loops.everyInterval(60000, function () {
    if (!(bUhrstellen)) {
        Minuten += 1
        motors.dualMotorPower(Motor.M0, MotorProzent)
        basic.setLedColors(0x000000, 0xb09eff, 0x000000)
    }
})
