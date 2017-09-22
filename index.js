var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://usuario:password@servidor:27001,servidor:27002,servidor:27003/replicaDemo?replicaSet=replSet&&authSource=admin', function(err, db) {
	if (err) throw err;

	var documentNumber = 0;
	function insertDocument() {

		db.collection('foo').insert({ 'documentNumber' : documentNumber++ }, function(err, doc) {
			if (err) throw err;
			console.log(doc);
		});

		console.log('Dispatched insert');
		setTimeout(insertDocument, 1000);
	}

	insertDocument();
});
