const chatLog = (logs) => {
    let newLogs = []
    let users = []

    logs.forEach(log => {
        if(log.split(" ")[0] == "Enter" || log.split(" ")[0] == "Change")
        {
            let check = users.findIndex(user => user.split(" ")[0] == log.split(" ")[1])
            if(check != -1) users[check] = `${log.split(" ")[1]} ${log.split(" ")[2]}`
            else users.push(`${log.split(" ")[1]} ${log.split(" ")[2]}`)
        }   
    })

    logs.filter(log => {
        if(log.split(" ")[0] == "Enter"){
            newLogs.push(`${users.find(user => user.split(" ")[0] == log.split(" ")[1]).split(" ")[1]} came in.` )
        }
        else if(log.split(" ")[0] == "Leave"){
            newLogs.push(`${users.find(user => user.split(" ")[0] == log.split(" ")[1]).split(" ")[1]} has left.` )
        }
    })

    return newLogs
}
console.log(chatLog(["Enter uid1234 Spiderman", "Leave uid1234", "Enter uid1234 Hulk", "Leave uid1234"]
))
module.exports = chatLog