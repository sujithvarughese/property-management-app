import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	REGISTER_USER_BEGIN,
	REGISTER_USER_ERROR,
	REGISTER_USER_SUCCESS,
	LOGIN_USER_BEGIN,
	LOGIN_USER_ERROR,
	LOGIN_USER_SUCCESS,
	LOGOUT_USER,
	CREATE_PROPERTY_SUCCESS,
	CREATE_PROPERTY_BEGIN,
	CREATE_PROPERTY_ERROR,
	READ_PROPERTIES_BEGIN,
	READ_PROPERTIES_SUCCESS,
	READ_PROPERTIES_ERROR,
	CREATE_TENANT_BEGIN,
	CREATE_TENANT_SUCCESS,
	CREATE_TENANT_ERROR,
	READ_TENANTS_BEGIN,
	READ_TENANTS_SUCCESS,
	READ_TENANTS_ERROR,
	CREATE_UNIT_BEGIN,
	CREATE_UNIT_SUCCESS,
	CREATE_UNIT_ERROR,
	READ_UNITS_BEGIN,
	READ_UNITS_SUCCESS,
	READ_UNITS_ERROR,
	CREATE_PAYMENT_BEGIN,
	CREATE_PAYMENT_SUCCESS,
	CREATE_PAYMENT_ERROR,
	READ_PAYMENTS_BEGIN,
	READ_PAYMENTS_SUCCESS,
	READ_PAYMENTS_ERROR,
	CREATE_RENT_BEGIN,
	CREATE_RENT_SUCCESS,
	CREATE_RENT_ERROR,
	READ_RENTS_BEGIN,
	READ_RENTS_SUCCESS,
	READ_RENTS_ERROR,
} from "./actions.jsx";

import {initialState} from "./GlobalContext.jsx"

const Reducer = (state, action) => {

	if (action.type === DISPLAY_ALERT) {
		return {
			...state,
			showAlert: true,
			alertType: 'danger',
			alertText: 'Please provide all values!'
		}
	}

	if (action.type === CLEAR_ALERT) {
		return {
			...state,
			showAlert: false,
			alertType: '',
			alertText: ''
		}
	}

	if (action.type === REGISTER_USER_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === REGISTER_USER_SUCCESS) {
		return {
			...state,
			user: action.payload.user,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'user created! redirecting...'
		}
	}

	if (action.type === REGISTER_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}

	if (action.type === LOGIN_USER_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === LOGIN_USER_SUCCESS) {
		return {
			...state,
			user: action.payload.user,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'user logged in! redirecting...'
		}
	}

	if (action.type === LOGIN_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}

	if (action.type === LOGOUT_USER) {
		return {
			...initialState,
		};
	}

	if (action.type === CREATE_PROPERTY_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === CREATE_PROPERTY_SUCCESS) {
		return {
			...state,
			property: action.payload.property,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'property created! redirecting...'
		}
	}

	if (action.type === CREATE_PROPERTY_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}
	if (action.type === READ_PROPERTIES_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === READ_PROPERTIES_SUCCESS) {
		return {
			...state,
			properties: action.payload.properties,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'retrieving properties...'
		}
	}

	if (action.type === READ_PROPERTIES_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}

	if (action.type === CREATE_TENANT_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === CREATE_TENANT_SUCCESS) {
		return {
			...state,
			tenant: action.payload.tenant,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'tenant created! redirecting...'
		}
	}

	if (action.type === CREATE_TENANT_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}
	if (action.type === READ_TENANTS_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === READ_TENANTS_SUCCESS) {
		return {
			...state,
			tenants: action.payload.tenants,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'retrieving tenants...'
		}
	}

	if (action.type === READ_TENANTS_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}

	if (action.type === CREATE_UNIT_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === CREATE_UNIT_SUCCESS) {
		return {
			...state,
			unit: action.payload.unit,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'unit created! redirecting...'
		}
	}

	if (action.type === CREATE_UNIT_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}
	if (action.type === READ_UNITS_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === READ_UNITS_SUCCESS) {
		return {
			...state,
			units: action.payload.units,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'retrieving units...'
		}
	}

	if (action.type === READ_UNITS_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}

	if (action.type === CREATE_PAYMENT_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === CREATE_PAYMENT_SUCCESS) {
		return {
			...state,
			payment: action.payload.payment,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'unit created! redirecting...'
		}
	}

	if (action.type === CREATE_PAYMENT_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}
	if (action.type === READ_PAYMENTS_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === READ_PAYMENTS_SUCCESS) {
		return {
			...state,
			payments: action.payload.payments,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'retrieving payments...'
		}
	}

	if (action.type === READ_PAYMENTS_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}

	if (action.type === CREATE_RENT_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === CREATE_RENT_SUCCESS) {
		return {
			...state,
			rent: action.payload.rent,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'rent created! redirecting...'
		}
	}

	if (action.type === CREATE_RENT_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}
	if (action.type === READ_RENTS_BEGIN) {
		return {
			...state,
			isLoading: true
		}
	}

	if (action.type === READ_RENTS_SUCCESS) {
		return {
			...state,
			rents: action.payload.rents,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'retrieving rents...'
		}
	}

	if (action.type === READ_RENTS_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg
		}
	}

	throw new Error(`No such action: ${action.type}`)
};

export default Reducer;