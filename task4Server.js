radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        CruiseE.stopAllMotor()
    }
    if (receivedNumber == 1) {
        CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.forward, 800)
        basic.pause(500)
    }
    if (receivedNumber == 2) {
        CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.backward, 800)
        basic.pause(500)
    }
    if (receivedNumber == 3) {
        CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.backward, 400)
        CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.forward, 400)
        basic.pause(500)
    }
    if (receivedNumber == 4) {
        CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.forward, 400)
        CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.backward, 400)
        basic.pause(500)
    }
})
radio.setGroup(8080)
