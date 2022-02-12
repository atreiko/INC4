function cloneDeep (obj) {
	const pull = new Map
	const clone = cloneDeepMaster(obj)

	pull.clear()
	return clone

	function cloneDeepMaster (obj) {
		if (typeof obj !== 'object' || obj === null) {
			return obj
		}

		if (obj instanceof Array) {
			const clone = []
			pull.set(obj, clone)

			for (let i = 0; i < obj.length; i++) {
				if (pull.has(obj[i])) {
					clone.push(pull.get(obj[i]))
				}

				else {
					clone.push(cloneDeepMaster(obj[i]))
				}
			}

			return clone
		}

		else {
			const clone = {}
			pull.set(obj, clone)

			for (const key in obj) {
				if (pull.has(obj[key])) {
					clone[key] = pull.get(obj[key])
				}

				else {
					clone[key] = cloneDeepMaster(obj[key])
				}
			}

			return clone
		}
	}
}


const object = { name: 'Leonardo', prop: { weapon: 'swords' } }
const clone = cloneDeep(object)

console.log(clone);