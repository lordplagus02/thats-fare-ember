import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
        create: function() {
            var transaction = this.getProperties('amount', 'description');
            alert(transaction.amount + ' ' + transaction.description);
        }
    }
});
