let mongoose = require('mongoose')

let studentSchema = new mongoose.Schema({
    enrollment: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birth: {
        type: Date,
        required: true
    },
    qualification: {
            type: Object,
            required: true,
            school: {
                type: String,
                required: true
            },
            grade: {
                type: String,
                required: true
            },
            passing_year: {
                type: Number,
                required: true
            }
    },
    result: {
            type: Array,
            required: true,
            sem: {
                type: Number,
                required: true
            },
            grade: {
                type: String,
                required: true
            },
            backlog: {
                type: Number,
                required: true
            }
        },
    event_info: {
                type: Array,
                required: true,
                _type: {
                        type: String,
                        required: true
                },
                name: {
                        type: String,
                        required: true
                },
                location: {
                        type: String,
                        required: true
                },
                date : {
                        type: Date,
                        required: true
                }
        }
}, { timestamps: true, collection: "studentdetails"}
)

module.exports = mongoose.model('Student', studentSchema)