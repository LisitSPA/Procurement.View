import axios from 'axios'
import baseUrl from './baseUrl'

const awards = {}
const userStorage = JSON.parse(localStorage.getItem("usuario"))

awards.getAwards = async () => {
	const res = await axios.get(baseUrl + '/Awards/ObtenerAwards', {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res
}

awards.getAwardsCategories = async () => {
	const res = await axios.get(baseUrl + '/Awards/ObtenerTipos', {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res
}

awards.storeAwards = async (data) => {
	const res = await axios.post(baseUrl + '/Awards/Asignar', data, {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token,
			"Content-Type": 'application/json'
		}
	})
	return res
}

export default awards