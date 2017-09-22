var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://usuario:password@servidor:27001,servidor:27002,servidor:27003/replicaDemo?replicaSet=replSet&&authSource=admin', function(err, db) {
	if (err) throw err;

	db.collection('replicaDemo').insert({ 'x' : 1 }, function(err, doc) {
		if (err) throw err;

		db.collection('replicaDemo').findOne({ 'x' : 1 }, function(err, doc) {
			if (err) throw err;

			console.log(doc);
			db.close();
		});
	});
});
