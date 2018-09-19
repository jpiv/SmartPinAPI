const { expect } = require('chai')
const sinon = require('sinon')


describe('Place API', () => {
    it('Should create a pin correctly', done => {
        const PinAPI = require('../../api/pin-api.js')
        const PinData = require('../../data/pin-data.js')
        sinon.spy(PinData, 'createPlace')
        PinAPI.createPlace('test').then(() => {
            expect(PinData.createPlace.called).to.be.true
            expect(PinData.createPlace.calledWith('test'))
            done()
        })
    })
})