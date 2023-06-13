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

projects.storeProject = async(data) => {
	const res = await axios.post(baseUrl + '/Archivos/CrearDocumento', data, {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token,
			"Content-Type": "multipart/form-data",
		},
	})
	return res
}

projects.downloadProject = async(project) => {
	const res = await axios.get(baseUrl + '/Archivos/Descargar/' + project.id, {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token
		},
		responseType: 'blob'
	})
	.then((response) => {
		const url = window.URL.createObjectURL(new Blob([response.data]));
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', project.nombreArchivo);
		document.body.appendChild(link);
		link.click();
	})
	return res
}

projects.deleteProject = async(id) => {
	const res = await axios.delete(baseUrl + '/Archivos/BorrarDocumento/'+ id, {
		headers: {
			'Authorization': 'Bearer ' + userStorage.token,
		},
	})
	return res
}

export default projects