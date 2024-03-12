const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        orgName: {
        type: String,
        },
        firstName: {
        type: String,
        required: [true, "First name is required"]
        },
        firstName: {
        type: String,
        required: [true, "First name is required"]
        },
        lastName: {
        type: String,
        required: [true, "Last name is required"]
        },
        email: {
        type: String,
        required: [true, "Email is required"]
        },
        address: {
        type: String,
        required: [true, "address is required"]
        },
        city: {
        type: String,
        required: [true, "city is required"]
        },
        state: {
        type: String,
        required: [true, "state is required"]
        },
        password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be atleast 8 characters"]
        }
    }, {timestamps: true});

    // near the top is a good place to group our imports
    const bcrypt = require('bcrypt');
    // this should go after 
    UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
        });
    });    

    // add this after UserSchema is defined
    UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

    UserSchema.pre('validate', function(next) {
        if (this.password !== this.confirmPassword) {
            this.invalidate('confirmPassword', 'Password must match confirm password');
        }
        next();
    });

module.exports = mongoose.model('User', UserSchema);