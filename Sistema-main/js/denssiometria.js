document.addEventListener('DOMContentLoaded', function() {
    var denssiometriaEl = document.getElementById('denssiometria');

    var denssiometria = new FullCalendar.Calendar(denssiometriaEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      locale:'pt-br',
      navLinks: true, // pode clicar nos nomes dos dias/semanas para navegar pelas visualizações
      businessHours: {
        // dias da semana. uma matriz de inteiros de dias da semana baseados em zero (0 = domingo)
        daysOfWeek: [ 1, 2, 3, 4, 5 ], // Segunda-feira sexta-feira
        
        startTime: '08:00', //  hora de início (8h neste exemplo)
        endTime: '18:00', //  horário de término (18h neste exemplo)
      },
      dayMaxEvents: 1,
      editable: true,
      selectable: true,

      events: [
        {
          title: 'Business Lunch',
          start: '2023-02-03T13:00:00',
          constraint: 'businessHours'
        },
        {
          title: 'Meeting',
          start: '2023-02-13T11:00:00',
          constraint: 'availableForMeeting', // definido abaixo
          color: '#257e4a'
        },
        {
          title: 'Conference',
          start: '2023-02-18',
          end: '2023-02-20'
        },
        {
          title: 'Conference',
          start: '2023-02-18',
          end: '2023-02-20'
        },{
          title: 'Conference',
          start: '2023-02-18',
          end: '2023-02-20'
        },{
          title: 'Conference',
          start: '2023-02-18',
          end: '2023-02-20'
        },{
          title: 'Conference',
          start: '2023-02-18',
          end: '2023-02-20'
        },
        {
          title: 'Party',
          start: '2023-02-29T20:00:00'
        },

        // áreas onde "Meeting" deve ser descartado
        {
          groupId: 'availableForMeeting',
          start: '2023-02-11T10:00:00',
          end: '2023-02-11T16:00:00',
          display: 'background'
        },
        {
          groupId: 'availableForMeeting',
          start: '2023-02-13T10:00:00',
          end: '2023-02-13T16:00:00',
          display: 'background'
        },

        // áreas vermelhas onde nenhum evento pode ser descartado
        {
          start: '2023-01-24',
          end: '2023-01-28',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        },
        {
          start: '2023-01-06',
          end: '2023-01-08',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        }
      ]
    });

    denssiometria.render();
  });