input.onButtonPressed(Button.A, function () {
    basic.showString("Drinks That Match The Temperature")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Drinks That Match The Temperature")
})
input.onGesture(Gesture.Shake, function () {
    if (input.temperature() > 0 || input.temperature() < 10) {
        basic.showString("Ginger Tea")
    } else if (input.temperature() > 10 || input.temperature() < 15) {
        basic.showString("Hot Chocolate")
    } else if (input.temperature() > 15 || input.temperature() < 20) {
        basic.showString("Cappuccino")
    } else if (input.temperature() > 20 || input.temperature() < 25) {
        basic.showString("Matcha Latte")
    } else if (input.temperature() > 25 || input.temperature() < 30) {
        basic.showString("Virgin Piña Colada")
    } else if (input.temperature() > 30 || input.temperature() < 35) {
        basic.showString("Frozen Pink Lemonade")
    } else if (input.temperature() > 35 || input.temperature() < 40) {
        basic.showString("Blue Raspberry Shaved Ice")
    } else if (input.temperature() > 40 || input.temperature() < 45) {
        basic.showString("Frozen Coke Ice Cream Float")
    }
})
basic.showString("Drinks That Match The Temperature")
basic.showString("Shake Me")
