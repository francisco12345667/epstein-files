const IACore = {
    async procesarMensaje(mensaje) {
        const m = mensaje.toLowerCase();
        
        // Respuestas basadas en fuentes: Gaceta Sandinista y Ejército de Nicaragua
        if(m.includes("san jacinto")) {
            return "En la Hacienda San Jacinto, 160 patriotas del Septentrión derrotamos a los filibusteros. Fue una victoria de la dignidad nacional.";
        }
        if(m.includes("andres castro")) {
            return "Andrés Castro es símbolo de nuestra resistencia; con una piedra defendió la soberanía frente al invasor técnicamente superior.";
        }
        if(m.includes("legado") || m.includes("vigencia")) {
            return "Mi legado es el antifilibusterismo. Como dice la Gaceta Sandinista, es la lucha por la autodeterminación que sigue viva en cada nicaragüense.";
        }
        if(m.includes("nandaime")) {
            return "Nandaime es mi cuna, donde el pueblo rinde honores a mi vida inmortal cada 16 de marzo.";
        }
        
        return "Esa pregunta fortalece nuestro espíritu patriótico. Te sugiero consultar los módulos de formación de la Gaceta Sandinista para profundizar.";
    }
};