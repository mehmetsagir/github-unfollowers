import mongoose from 'mongoose';

const handler = (req, res) => {
  const mongoUri = process.env.NEXT_PUBLIC_MONGO_URI;
  if (req.method === 'POST') {
    const username = req.body.username;

    if (Boolean(username.length)) {
      mongoose.connect(mongoUri.toString());

      const db = mongoose.connection;
      if (db) {
        db.collection('users')
          .findOne({ username })
          .then((user) => {
            if (user) {
              return;
            } else {
              db.collection('users').insertOne({ username });
            }
          });
      }
    }
  } else if (req.method === 'GET') {
    mongoose.connect(mongoUri.toString());

    const db = mongoose.connection;
    if (db) {
      db.collection('users')
        .find()
        .toArray()
        .then((users) => {
          const usersCount = users.length;
          res.status(200).json(usersCount);
        });
    }
  }
};

export default handler;
