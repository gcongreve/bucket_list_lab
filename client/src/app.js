const Goals = require('./models/goals.js');
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#goals-form');
  const formView = new FormView( form );
  formView.bindEvents();


  const goals = new Goals();

});
