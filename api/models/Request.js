import mongoose from 'mongoose'
import validator from 'validator'

const RequestSchema = new mongoose.Schema({
	unit: {
		type: mongoose.Types.ObjectId,
		ref: 'Unit',
	},
	request: {
		type: String
	},
	urgent: {
		type: Boolean,
		default: false
	},
	completed: {
		type: Boolean,
		default: false
	}
})

export default mongoose.model('Request', RequestSchema)