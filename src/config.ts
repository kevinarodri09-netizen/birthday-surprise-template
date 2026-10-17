export const config = {
  // 1. CONTROL DE ACCESO
  recipientName: "michelle",         
  nameHint: "8 letras, empieza con M de mujer magnífica", 

  // 2. TÍTULOS DE LAS SECCIONES
  soloGalleryTitle: "✨ Nuestros recuerdos en foto ✨",
  messageTitle: "My niña única y especial",
  footerText: "Espero te guste este pequeño detalle",

  // 3. TEXTO DE LOS BOTONES
  buttons: {
    hero: "Lista para una sorpresita mas?",
    soloGallery: "Quieres ver mas?",
  },

  // 4. EL MENSAJE DE CUMPLEAÑOS
  message: [
    "Feliz cumpleaños mi Miche!!",
    "",
    "Espero que hoy estés llena de alegría, risas y de todos los pequeños momentos que te hacen sonreír. Al dar el paso hacia este nuevo año, que te traiga oportunidades emocionantes, recuerdos significativos y la confianza para perseguir todo lo que sueñas.",
    "",
    "Tienes mucho por delante, y espero que nunca dejes de creer en ti misma y en todo de lo que eres capaz. Que este año sea amable contigo, gratificante y lleno de motivos para celebrar.",
    "",
    "Te deseo un hermoso cumpleaños y un año aún más increíble por venir.",
    "",
    "- Con amor, Ariel",
  ],

  colors: {
    primary: "#ec4899",
    light: "#fdf2f8",
    medium: "#f9a8d4",
    dark: "#db2777",
  },

  typingText: {
    first: "Hey, espera un segundito mas",
    second: "Este sitio web solo es para alguien que se llama Michelle",
  }
};

export type Config = typeof config;
