//Convert given seconds to space age on all planets of our solar system
const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Earth: 1.0,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132,
	}
	for(x of Object.keys(yearsInAllPlanets))
    {
        var value = (seconds / (yearsInAllPlanets[x]*365.25*24*60*60)).toFixed(2)
        yearsInAllPlanets[x] = parseFloat(value) ;
    }
	return yearsInAllPlanets
}

console.log(spaceAge(Math.round(Math.random() * 99999999)))