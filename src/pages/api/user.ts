import mongoose from 'mongoose';

const handler = async (req, res) => {
  try {
    const mongoUri = process.env.NEXT_PUBLIC_MONGO_URI;
    if (req.method === 'POST') {
      const username = req.body.username;

      if (Boolean(username.length)) {
        await mongoose.connect(mongoUri.toString());

        const db = mongoose.connection;
        if (db) {
          await db
            .collection('users')
            .findOne({ username })
            .then((user) => {
              if (user) {
                return res.status(204).json({
                  message: 'registered user',
                });
              } else {
                db.collection('users').insertOne({ username });
              }
            });
        }
      }
    } else if (req.method === 'GET') {
      await mongoose.connect(mongoUri.toString());

      const db = mongoose.connection;
      if (db) {
        await db
          .collection('users')
          .find()
          .toArray()
          .then((users) => {
            const usersCount = users.length;
            res.status(200).json(usersCount);
          });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
