const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the structure (Schema) of the User
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  // user must enter name
  },
  email: {
    type: String,
    required: true,
    unique: true    // no two users can have the same email
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],  // only these 3 allowed
    default: 'student'
  }
});

// Before saving, encrypt the password
UserSchema.pre('save', async function (next) {
  // If password is already encrypted, skip this step
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);  // generate salt
  this.password = await bcrypt.hash(this.password, salt); // encrypt
  next();
});

// Export the model so we can use it in other files
module.exports = mongoose.model('User', UserSchema);
