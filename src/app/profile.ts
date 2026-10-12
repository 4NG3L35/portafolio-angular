export const profile = {
  name: 'Luis Angel Hurtado',
  fullName: 'Luis Angel Hurtado Sanchez',
  roles: ['Estudiante', 'Desarrollador', 'Soporte TI', 'Freelancer'],
  degree: 'Estudiante de Ingeniería de Sistemas',
  age: 20,
  birthday: '31/05/2006',
  email: 'luisangelhurtadosanchez@gmail.com',
  phone: '+591 63854194',
  whatsapp: 'https://wa.me/59163854194',
  city: 'Cochabamba',
  github: 'https://github.com/4NG3L35',
  freelance: true,
  bio: 'Soy un estudiante normal de Ingeniería de Sistemas, a mitad de carrera, con ganas de seguir aprendiendo y mejorando cada día en el mundo de la tecnología.',
};

export const socials = [
  { icon: 'bi-github', url: profile.github, label: 'GitHub' },
  { icon: 'bi-whatsapp', url: profile.whatsapp, label: 'WhatsApp' },
  { icon: 'bi-envelope', url: `mailto:${profile.email}`, label: 'Correo' },
];

export const skills = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 75 },
  { name: 'React', value: 70 },
  { name: 'PHP', value: 80 },
  { name: 'WordPress/CMS', value: 90 },
  { name: 'Photoshop', value: 55 },
  { name: 'Soporte TI', value: 85 },
];

export const education = [
  {
    title: 'Ingeniería de Sistemas',
    place: 'UNIFRANZ',
    period: 'En curso',
    text: 'Actualmente cursando la carrera, a mitad de camino, avanzando en programación, bases de datos y desarrollo de software.',
  },
  { title: 'Educación secundaria', place: 'Salí de promoción', period: 'Egresado', text: '' },
];

export const experience = [
  {
    title: 'Soporte técnico / TI',
    place: 'UNIFRANZ',
    period: '2 años',
    tasks: [
      'Soporte técnico a estudiantes y docentes',
      'Mantenimiento y atención de incidencias en equipos',
      'Apoyo en tareas de desarrollo y tecnología',
    ],
  },
];

export const filters = [
  { key: '*', label: 'Todos' },
  { key: 'app', label: 'App' },
  { key: 'web', label: 'Web' },
  { key: 'books', label: 'Libro' },
  { key: 'redes', label: 'Redes' },
  { key: 'foto', label: 'Fotografía' },
];

export const works = [
  { title: 'Tienda de Accesorios para Celular', text: 'Aplicación para una tienda de accesorios para celulares.', image: 'img/portfolio/app-1.jpg', category: 'app' },
  { title: 'Lavandería', text: 'Sitio web para una lavandería.', image: 'img/portfolio/product-1.jpg', category: 'web' },
  { title: 'Diseño de un Libro', text: 'Proyecto de diseño y maquetación de un libro.', image: 'img/portfolio/books-1.jpg', category: 'books' },
  { title: 'SIGEBRI', text: 'Sistema de monitoreo de brigadas contra el dengue (Proyecto Integrador).', image: 'img/sigebri.png', category: 'app' },
  { title: 'Ola Azul – Inicio', text: 'Panel web en Angular para una escuela de natación.', image: 'img/ola-azul-inicio.png', category: 'web' },
  { title: 'Ola Azul – Reportes', text: 'Ingresos y nadadores activos por horario.', image: 'img/ola-azul-reportes.png', category: 'web' },
  { title: 'Inter-VLAN con switch capa 3', text: 'Topología en Cisco Packet Tracer.', image: 'img/red-mls.png', category: 'redes' },
  { title: 'Router-on-a-stick', text: 'Inter-VLAN con subinterfaces en Packet Tracer.', image: 'img/red-roas.png', category: 'redes' },
  { title: 'Plano general', text: 'Vista de la ciudad.', image: 'img/foto-ciudad.jpg', category: 'foto' },
  { title: 'Luces de noche', text: 'Plano general nocturno.', image: 'img/foto-luces-xv.jpg', category: 'foto' },
  { title: 'Noche de fiesta', text: 'Plano general con luces.', image: 'img/foto-xv-noche.jpg', category: 'foto' },
  { title: 'Parque', text: 'Plano general al aire libre.', image: 'img/foto-parque.jpg', category: 'foto' },
  { title: 'Flor morada', text: 'Plano detalle.', image: 'img/foto-flor-morada.jpg', category: 'foto' },
  { title: 'Audífonos', text: 'Plano detalle.', image: 'img/foto-audifonos.jpg', category: 'foto' },
  { title: 'Flor roja', text: 'Plano detalle.', image: 'img/foto-flor-roja.jpg', category: 'foto' },
  { title: 'Peluches', text: 'Plano detalle.', image: 'img/foto-peluches.jpg', category: 'foto' },
];
