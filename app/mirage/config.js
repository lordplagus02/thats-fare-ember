export default function() {
  this.get('/transactions', function(db) {
    return {
      data: db.transactions.map(attrs => (
        { type: 'transactions', id: attrs.id, attributes: attrs }
      ))
    };
  });
    this.get('/users', function(db) {
    return {
    data: db.users.map(attrs => (
      { type: 'users', id: attrs.id, attributes: attrs }
    ))
  };
  });
}