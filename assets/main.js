import barba from '@barba/core';

$('document').ready(function() {
    
    barba.init({
            transitions: [
            {
                name: 'svg-circle',
                leave(data) {
                  // retrieves the current page url
                  const from = data.current.url;
                },
                enter({ next }) {
                  // retrieves the next page url (short syntax)
                  const to = next.url;
                },
            },
        ],
    });
});