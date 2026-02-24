/**
 * Reconocimiento de Voz - Permite al usuario hablar en lugar de escribir.
 */

const IAReconocimiento = {
    recog: null,
    activo: false,

    init() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return console.warn("Reconocimiento de voz no soportado.");

        this.recog = new SpeechRecognition();
        this.recog.lang = 'es-NI';
        this.recog.continuous = false;
        this.recog.interimResults = false;

        this.recog.onresult = (event) => {
            const transcripcion = event.results[0][0].transcript;
            const inputField = document.getElementById('user-input');
            if (inputField) {
                inputField.value = transcripcion;
                // Disparar click en enviar automáticamente
                document.getElementById('send-btn').click();
            }
        };

        this.recog.onend = () => {
            this.activo = false;
            document.getElementById('mic-btn')?.classList.remove('recording');
        };
    },

    escuchar() {
        if (this.activo) {
            this.recog.stop();
        } else {
            this.recog.start();
            this.activo = true;
            document.getElementById('mic-btn')?.classList.add('recording');
        }
    }
};

IAReconocimiento.init();