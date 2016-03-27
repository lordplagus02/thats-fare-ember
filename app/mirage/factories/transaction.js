import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  amount(i) { return faker.list.random(180, 20, 300, 320, 45, 50)(i); },
  description() { return 'Some pizza or something'; },
  transaction_date() { return faker.date.past(); },
  authorization_date() { return faker.date.recent(); }
  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
});