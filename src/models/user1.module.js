const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema(
  {
    phone: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
     LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // gender: { type: String, required: true, default:"Male"},
    // dob: { type: Date, required: true },
    // password: { type: String },

  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

// userSchema.pre("save", function (next) {
//   if (!this.isModified("password")) return next();

//   var hash = bcrypt.hashSync(this.password, 8);
//   this.password = hash;
//   return next();

// });

// userSchema.methods.checkPassword= function(password){
//   return bcrypt.compareSync(password,this.password); 
// }

User = mongoose.model("authon", userSchema); // user => users



module.exports = User