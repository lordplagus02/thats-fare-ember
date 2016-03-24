import DS from 'ember-data';

export default DS.Model.extend({
  sender_id: DS.attr('string'),
  receiver_id: DS.attr('string'),
  amount: DS.attr('number'),
  description: DS.attr('string'),
  transaction_date: DS.attr('date'),
  authorization_date: DS.attr('date')
});