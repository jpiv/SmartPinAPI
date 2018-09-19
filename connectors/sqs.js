
// Just use in memory store for now
const SQS = {
	set(key, val) {
		this[key] = val
	}

	get(key) {
		return this[key]
	}
}