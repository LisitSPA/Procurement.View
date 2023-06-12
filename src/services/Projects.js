import axios from 'axios'
import baseUrl from './baseUrl'

const projects = {}
const userStorage = JSON.parse(localStorage.getItem("usuario"))

projects.getProjectTypes = async () => {
	const res = await axios.get(baseUrl + '/Archivos/ObtenerTipos', {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res
}

projects.getProjects = async () => {
	const res = await axios.get(baseUrl + '/Archivos/ObtenerDocumentos', {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		}
	})
	return res
}




export default projects