import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: 'string', required: true },
  email: { type: 'string', required: true },
  password: { type: 'string', required: true },
  id: { type: 'string', required: true },
});

const user = mongoose.model('User', userSchema);

export default user;
