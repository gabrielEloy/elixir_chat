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
            const newMessage = document.createElement("div");
            newMessage.className = "message-container";
            newMessage.innerHTML = `<span>${payload.message}</span>`

            document.getElementById('messages').appendChild(newMessage);
        })
    }
};

export default messageHandler;