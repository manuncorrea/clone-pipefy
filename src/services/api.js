export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg'
        },
        {
          id: 2,
          content: 'Escrever  TCC sobre Metodos Ageis',
          labels: ['#7159c1'],
          user: 'https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg'
        },
        {
          id: 4,
          content: '"NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg'
        },
        {
          id: 5,
          content: 'Fazer testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Estudar React Native',
          labels: [],
          user: 'https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Estudar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg'
        },
        {
          id: 8,
          content: 'Gerar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Recriando clone do Pipefy',
          labels: [],
        },
        {
          id: 12,
          content: 'Estudar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Estudar "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}