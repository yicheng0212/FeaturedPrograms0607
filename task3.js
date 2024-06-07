basic.forever(function () {
    if (CruiseE.sensorDistance(CruiseE.PingUnit.Centimeters) < 5) {
        CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.forward, 500)
        CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.backward, 500)
        basic.pause(400)
    } else {
        CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.forward, 800)
        basic.pause(1000)
    }
    CruiseE.stopAllMotor()
})
