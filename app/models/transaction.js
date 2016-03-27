import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('number'),
  description: DS.attr('string'),
  transaction_date: DS.attr('date'),
  authorization_date: DS.attr('date'),
  sender: DS.belongsTo('user'),
  receiver: DS.belongsTo('user')
});