import axios from 'axios'
import baseUrl from './baseUrl'

const newsletters = {}
const userStorage = JSON.parse(localStorage.getItem("usuario"))

newsletters.getNewsletters = async () => {
	const res = await axios.get(baseUrl + '/Assets/Listar', {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res
}

newsletters.getNewslettersTypes = async () => {
	const res = await axios.get(baseUrl + '/Assets/ObtenerTipos', {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res
}

newsletters.storeNewsletter = async (data) => {
	const res = await axios.post(baseUrl + '/Assets/CrearAsset', data, {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token,
			"Content-Type": "multipart/form-data",
		}
	})
	return res
}

export default newsletters