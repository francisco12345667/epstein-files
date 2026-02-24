const chatWindow = document.getElementById('ia-mensajes');
const sendBtn = document.getElementById('send-btn');

sendBtn?.addEventListener('click', async () => {
    const input = document.getElementById('user-input');
    const texto = input.value;
    if(!texto) return;

    // Agregar mensaje usuario
    chatWindow.innerHTML += `<div class="chat-bubble user-query">${texto}</div>`;
    input.value = '';

    // Respuesta IA
    const respuesta = await IACore.procesarMensaje(texto);
    chatWindow.innerHTML += `<div class="chat-bubble ia-response">${respuesta}</div>`;
    IAVoz.speak(respuesta); // Activa la voz automáticamente
    chatWindow.scrollTop = chatWindow.scrollHeight;
});