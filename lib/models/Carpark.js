import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const carparkSchema = new Schema({
    name: Schema.Types.String,
    address: {
        shortAddress: {
            type: Schema.Types.String,
            minLength: 3,
            maxLength: 128
        }
    },
    occupancy: {
        totalLots: {
            type: Schema.Types.Number,
            min: 0,
            max: 9999
        },
        freeLots: {
            type: Schema.Types.Number,
            min: 0,
            max: 9999
        }
    }
}, {
    autoCreate: true,
    strict: true,
    strictQuery: true,
    timestamps: true
});

// carparkSchema.methods.findParkingSession = () => {};

const Carpark = mongoose.model('Carpark', carparkSchema, 'carparks');

export default Carpark;