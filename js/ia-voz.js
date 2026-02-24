const IAVoz = {
    speak: (texto) => {
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'es-ES'; // Intentar es-NI si está disponible
        utterance.rate = 0.85; // Voz pausada y solemne
        window.speechSynthesis.speak(utterance);
    }
};