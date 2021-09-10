const chatLog = require('./chatLog')
describe('check chat log', () => {
    it('should return exactly this', () => {
        let input = ["Enter uid1234 Spiderman", "Enter uid4567 Ironman", "Leave uid1234", "Enter uid1234 Ironman", "Change uid4567 Hulk"],
            output = ["Ironman came in.", "Hulk came in.", "Ironman has left.", "Ironman came in."]
        expect(chatLog(input)).toEqual(output)
    })
})