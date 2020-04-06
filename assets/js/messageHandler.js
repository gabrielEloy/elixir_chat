// const messageInput = document.getElementById("message");
// const submitButton = document.getElementById("send-message");

// messageInput.addEventListener("keydown", e => {
  
// });

// submitButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(messageInput.value)
// })

const messageHandler = {
    init(socket) {
        const channel = socket.channel('water_cooler:lobby', {})
        channel.join();
        this.listenForChats(channel)
    },

    listenForChats(channel) {
        document.getElementById('message-form').addEventListener('submit', e => {
            e.preventDefault();

            const messageInput = document.getElementById('message');

            channel.push('shout', {message: messageInput.value});
            messageInput.value = '';
        })

        channel.on('shout', payload => {
            console.log({payload})
        })
    }
};

export default messageHandler;