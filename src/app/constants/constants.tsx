export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: true,
  price: false,
  objectCover: '50%',
  id: 'legarretaautomotores',
  name: 'Legarreta Automotores',
  adress: 'Sarmiento 655',
  city: 'Tandil',
  email: 'legarretaautomotores@gmail.com',
  instagram: 'legarretaautomotores',
  facebook: 'https://www.facebook.com/legarretaautomotores/',
  whatsapp: ['2494585374', '1133438645'],
  googlemapsLink: 'https://maps.app.goo.gl/4WKTJ5iEKLLrp53HA',
  googlemaps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.738550936865!2d-59.13644600000001!3d-37.3250203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b3f40739b%3A0x443cbdfb39ce0f2!2sLegarreta%20Automotores!5e0!3m2!1ses-419!2sar!4v1762128165822!5m2!1ses-419!2sar',
  openDays: [
    'Lunes a Viernes 09:00 a 17:00hs',
    'Sábado y Domingo Cerrado',
    // { day: 'Domingo', hours: ['09:00 a 13:00hs'] },
  ],
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://only-motors.agenciagrvity.com';
export const TENANT = 'pozner';

export const metadataCompany = {
  metadataBase: 'https://legarretaautomotores.vercel.app/',
  title: 'Legarreta Automotores - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const preguntas = [
  {
    id: 'preg-1',
    question: '¿Trabajan con financiación?',
    answer:
      'Sí, trabajamos con opciones de financiación para que puedas acceder al vehículo que buscás. Te asesoramos sobre las mejores alternativas disponibles según tu situación. Contactanos para conocer los planes y requisitos.',
  },
  {
    id: 'preg-2',
    question: '¿Los autos pasan por alguna revisión técnica?',
    answer:
      'Todos los vehículos que ofrecemos son inspeccionados por nuestro equipo técnico. Revisamos el estado general, mecánica, documentación y funcionamiento para asegurarte un auto en las mejores condiciones posibles.',
  },
  {
    id: 'preg-3',
    question: '¿Qué documentación necesito para comprar?',
    answer:
      'Necesitás tu DNI vigente y constancia de ingresos. Si vas a financiar, pueden pedirte documentación adicional. Te detallamos todos los requisitos cuando te contactes con nosotros y te ayudamos con el proceso.',
  },
  {
    id: 'preg-4',
    question: '¿Puedo probar el auto antes de comprarlo?',
    answer:
      'Por supuesto, podés venir a conocer y probar el vehículo que te interese. Agendamos una cita para que lo veas personalmente, lo pruebes y resuelvas todas tus consultas. Te invitamos a visitarnos.',
  },
  {
    id: 'preg-5',
    question: '¿Dan algún tipo de respaldo después de la compra?',
    answer:
      'Sí, seguimos acompañándote después de la compra. Si tenés alguna consulta o necesitás asesoramiento sobre el mantenimiento o cualquier tema relacionado con tu vehículo, podés contactarnos cuando quieras.',
  },
];

export const navigation = [
  {
    id: '0',
    title: 'Inicio',
    url: '/',
  },
  {
    id: '1',
    title: 'Catálogo',
    url: '/catalogo',
  },
  {
    id: '2',
    title: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: '3',
    title: 'Contacto',
    url: '/contacto',
    button: true,
  },
];
