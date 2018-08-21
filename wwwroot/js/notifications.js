

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/notifyHub")
    .build();

//maybe make here some advanced structure for transactions validation

console.log("in notif...js");

connection.on("ReceiveNotification", (message) => {
    const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    //var OrderAddress = document.getElementById("BitcoinAddress").innerText;
   // const encodedMsg = user + " says " + msg;
        const li = document.createElement("li");
        li.textContent = msg;
    document.getElementById("messagesList").appendChild(li);

    console.log("in notif...js.connection.on() pozz iz notification.js");

});

connection.start().catch(err => console.error(err.toString()));

//document.getElementById("sendButton").addEventListener("click", event => {
//    const user = document.getElementById("userInput").value;
//    const message = document.getElementById("messageInput").value;
//    connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
//    event.preventDefault();
//});


//onExit - close the connection