// Vue 3
const { createApp } = Vue;

createApp({
  data() {
    return {
      frases: [
        { quote: "Lo nuestro sera inmortal", author: "Deadpool"},
        { quote: "Eres mi fuerza", author: "Hulk"},
        { quote: "Pasaria mis 7 vidas a tu lado", author: "Catwoman"},
        { quote: "Eres la cosa mas bonita", author: "The thing"},
        { quote: "La fuerza es intensa entre nosotros", author: "Darth vader"}
      ],
      fraseActual: 'Hola Mundo en Vue 3',
      autorActual: 'Evan Yu'
     
    };
  },
  methods: {
    mostrarFecha() {
      const fecha = new Date();

      alert(fecha);
    },
    changeQuote() {
      const random = Math.floor(Math.random() * 5) 
      this.fraseActual = this.frases[random].quote
      this.autorActual = this.frases[random].author
      this.capitalize()
    },
    capitalize(){
        this.fraseActual = this.fraseActual.toUpperCase()
    }
  },
}).mount("#myApp");
