export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  	//server.createList('transaction', 6);
  	var sender = server.create('user');
	var receiver = server.create('user');

	server.createList('transaction', 3, { sender: sender, receiver: receiver });
}
