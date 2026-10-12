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
];

export const works = [
  { title: 'SIGEBRI', text: 'Sistema de monitoreo de brigadas contra el dengue (Proyecto Integrador).', image: 'img/sigebri.png', category: 'app' },
  { title: 'Cine Latino', text: 'Plataforma de cine latinoamericano hecha en Angular.', image: 'img/cine-latino.png', category: 'web' },
  { title: 'Ola Azul', text: 'Panel web en Angular para una escuela de natación.', image: 'img/ola-azul-inicio.png', category: 'web' },
];
