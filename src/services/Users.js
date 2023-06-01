import axios from 'axios'
import baseUrl from './baseUrl'

const users = {}
const userStorage = JSON.parse(localStorage.getItem("usuario"))

users.storeUser = async (data) => {
	const res = await axios.post(baseUrl + '/Security/CrearUsuario', data, {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res;
}

users.getUsers = async () => {
	const res = await axios.get(baseUrl + '/Security/ObtenerUsuarios', {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res
}

users.getRoles = async () => {
	const res = await axios.get(baseUrl + '/Security/ObtenerRoles', {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res
}

users.disableUser = async (id) => {
	const res = await axios.get(baseUrl + '/Security/ActualizarEstado/'+ id, {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res;
}

users.login = async (data) => {
	const res = await axios.post(baseUrl + '/Security/Login', data, {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token,
			"Content-Type": 'application/json'
		}
	 })
	return res;
}

export default users