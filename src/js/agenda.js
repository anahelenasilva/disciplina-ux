document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid' ],
	  locale:"pt-br",
      defaultDate: '2019-03-12',
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Evento 1 (Dia Todo)',
          start: '2019-03-01'
        },
        {
          title: 'Evento 2 (Longo)',
          start: '2019-03-07',
          end: '2019-03-10'
        },
        {
          groupId: 999,
          title: 'Evento 1',
          start: '2019-03-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Evento 2',
          start: '2019-03-16T16:00:00'
        },
        {
          title: 'Conferencia Microsoft',
          start: '2019-03-11',
          end: '2019-03-13'
        },
        {
          title: 'Meeting',
          start: '2019-03-12T10:30:00',
          end: '2019-03-12T12:30:00'
        },
        {
          title: 'Almoço Comunitário',
          start: '2019-03-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2019-03-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2019-03-12T17:30:00'
        },
        {
          title: 'Jantar',
          start: '2019-03-12T20:00:00'
        },
        // {
        //   title: 'Birthday Party',
        //   start: '2019-03-13T07:00:00'
        // },
        // {
        //   title: 'Click for Google',
        //   url: 'http://google.com/',
        //   start: '2019-03-28'
        // }
      ]
    });

    calendar.render();
  });