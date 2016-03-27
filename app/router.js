import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('transactions', function() {
    this.route('create');
    this.route('list');
  });
  this.route('friends');
  this.route('parties');
  this.route('account', function() {
    this.route('login');
  });
  this.route('users');
});

export default Router;
