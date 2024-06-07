CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.forward, 880)
basic.pause(1000)
CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.backward, 880)
basic.pause(1000)
CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.backward, 500)
CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.forward, 500)
basic.pause(1000)
CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.forward, 500)
CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.backward, 500)
basic.pause(1000)
CruiseE.stopAllMotor()
basic.forever(function () {
	
})
