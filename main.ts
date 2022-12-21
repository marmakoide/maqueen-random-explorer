input.onButtonPressed(Button.A, function () {
    if (activated == 1) {
        activated = 0
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else {
        activated += 1
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
let turn_direction = 0
let ticks_count = 0
let activated = 0
activated = 0
let backward_mode = 0
loops.everyInterval(200, function () {
    if (activated == 1) {
        if (backward_mode == 1) {
            if (ticks_count < 2) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 63)
            } else {
                while (maqueen.Ultrasonic(PingUnit.Centimeters) <= 5) {
                    if (turn_direction == 0) {
                        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 127)
                        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 127)
                    } else {
                        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 127)
                        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 127)
                    }
                }
                backward_mode = 0
            }
        } else {
            if (maqueen.Ultrasonic(PingUnit.Centimeters) > 5) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 239)
            } else {
                backward_mode = 1
                turn_direction = randint(0, 1)
                ticks_count = 0
            }
        }
        ticks_count += 1
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
