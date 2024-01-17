//your JS code here. If required.
function allMethods() {
	let op = [];
  return Object.getOwnPropertyNames(Math).filter((key)=>typeof(Math[key]) == 'function')
}

alert(allMethods());
