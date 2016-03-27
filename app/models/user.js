import DS from 'ember-data';

export default DS.Model.extend({
    first_name: DS.attr('string'),
  	last_name: DS.attr('string'),
  	email: DS.attr('string'),
  	nickname: DS.attr('string'),
 	transactions: DS.hasMany('transaction')
});
