for (let index = 0; index < 4; index++) {
    CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.forward, 800)
    basic.pause(1000)
    CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.forward, 600)
    CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.backward, 600)
    basic.pause(400)
}
CruiseE.stopAllMotor()
basic.forever(function () {
	
})
