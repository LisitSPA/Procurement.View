import axios from 'axios'
const users = {}
const baseUrl = 'https://procurementsoftys-api.azurewebsites.net/api'

users.storeUser = async (data) => {
	const res = await axios.post(baseUrl + '/Security/CrearUsuario', data)
	return res;
}

export default users