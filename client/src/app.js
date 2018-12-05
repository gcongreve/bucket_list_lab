const Goals = require('./models/goals.js');
const FormView = require('./views/form_view.js');
const DisplayView = require('./views/display_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#goals-form');
  const formView = new FormView( form );
  formView.bindEvents();

  const location = document.querySelector('#goals');
  const displayView = new DisplayView(location);
  displayView.bindEvents();


  const goals = new Goals();
  goals.bindEvents();

});
