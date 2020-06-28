let Random_Nuber = 0
input.onButtonPressed(Button.A, function () {
    Random_Nuber = randint(1, 6)
    if (Random_Nuber == 1) {
        basic.showString("Archhery")
    } else if (Random_Nuber == 2) {
        basic.showString("Sit")
    } else if (Random_Nuber == 3) {
        basic.showString("Go to Bed")
    } else if (Random_Nuber == 4) {
        basic.showString("Read")
    } else if (Random_Nuber == 5) {
        basic.showString("Walk")
    } else {
        basic.showString("Bike Ride")
    }
})
