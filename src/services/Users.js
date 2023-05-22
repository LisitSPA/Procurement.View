import axios from 'axios'
const users = {}
const baseUrl = 'https://procurementsoftys-api.azurewebsites.net/api'

users.storeUser = async (data) => {
	const res = await axios.post(baseUrl + '/Security/CrearUsuario', data)
	return res;
}

users.getUsers = async () => {
	const res = await axios.get(baseUrl + '/Security/ObtenerUsuarios')
	return res
}

users.getRoles = async () => {
	const res = await axios.get(baseUrl + '/Security/ObtenerRoles')
	return res
}

export default users