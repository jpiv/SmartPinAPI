const log = require('../utils/logger.js')

const Notify = {
	_ws: null,
	_callbacks: {},

	sub(key, fn) {
		this._callbacks[key] = this._callbacks[key]
			? [fn, ...this._callbacks[key]]
			: []
	},

	notify(key, payload={}) {
		const cbs = this._callbacks[key]
		if (cbs && cbs.length) {
			cbs.forEach(cb => cb(payload))
		}
	},

	push(key, payload={}) {
		if (!this._ws) {
			log.info('No websocket connection')
			return 
		}
		this._ws.send(JSON.stringify({ key, payload }))
	},

	connect(ws) {
		this._ws = ws
		ws.on('message', ({ data }) => {
			const { key, payload } = JSON.parse(data)
			this.notify(key, payload)
		})
		ws.on('error', err => log.error(err.message))
		return this
	}
}

module.exports = Notify
