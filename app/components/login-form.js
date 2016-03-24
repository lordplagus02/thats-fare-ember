import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
        authenticate: function() {
            var credentials = this.getProperties('username', 'password', 'rememberMe');
            alert(credentials.username + ' ' + credentials.password + ' ' + credentials.rememberMe);
        }
    }
});
