export default function() {
  this.get('/transactions', function() {
    return {
      data: [{
        type: 'transactions',
        id: 1,
        attributes: {
          sender_id: 1,
          receiver_id: 2,
          amount: 75.00,
          description: 'Meat for Sun City'
        }
      }, {
        type: 'transactions',
        id: 2,
        attributes: {
          sender_id: 1,
          receiver_id: 3,
          amount: 150.00,
          description: 'Cigarettes and drink'
        }
      }, {
        type: 'transactions',
        id: 3,
        attributes: {
          sender_id: 3,
          receiver_id: 2,
          amount: 100.00,
          description: 'Food from pizza di gio'
        }
      }]
    };
  });
    this.get('/parties', function() {
    return {
      data: [{
        type: 'parties',
        id: 1,
        attributes: {
          name: 'The Flying Duckmen'
        }
      }, {
        type: 'parties',
        id: 2,
        attributes: {
          name: 'The Dying Fuckmen'
        }
      }]
    };
  });
}