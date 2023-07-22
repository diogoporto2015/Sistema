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
        
        startTime: '07:00', //  hora de início (7h neste exemplo)
        endTime: '18:00', //  horário de término (18h neste exemplo)
      },
      dayMaxEvents: 1,
      editable: true,

      //hiddenDays: [0,6], // Oculta todas as quintas-feiras (0 - Domingo, 1 - Segunda, ..., 6 - Sábado)
      
      slotMinTime: '07:00:00', // Horário mínimo a ser exibido (07:00 AM)
      slotMaxTime: '18:00:00', // Horário máximo a ser exibido (05:00 PM)

      selectable: true,
      select: function(){
        
      },
      events: [
        
      ]
    });

    denssiometria.render();
  });