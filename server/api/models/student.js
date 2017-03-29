import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  sexe: {
    type: String
  },
  birthdate: {
    type: Date,
    required: true
  },
  city: {
    type: String
  },
  zipCode: {
    type: String
  },
  adress: {
    type: String
  },
  github: {
    type: String,
    unique: true
  },
  email: {
      type: String,
      required: [true, 'Email address is required'],
      validate: [function(email) {
          return /^\w+([\.-]?\w+)*@\w+([\@.-]?\w+)*(\.\w{2,3})+$/.test(email);
      }, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      unique: true
  }
});

let model = mongoose.model('Student', studentSchema);

export default class Student {

  create (req, res) {
    model.create(req.body, (err, student) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json({
          success: true,
          student: student
        });
      };
    });
  };

  getAll (req, res) {
    model.find({}, (err, students) => {
      if (err || !students) {
        res.status(403).send(err.message);
      } else {
        res.json(students);
      };
    });
  };

};
