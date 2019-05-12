$('document').ready(function() {
  barba.init({
    transitions: [
      {
        leave({ current, next, trigger }) {
          // Do something with `current.container` for your leave transition
          // then return a promise or use `this.async()`
        },
        enter({ current, next, trigger }) {
          // Do something with `next.container` for your enter transition
          // then return a promise or use `this.async()`
        },
      },
    ],
  });
});