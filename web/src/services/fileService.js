const VITE_ROOT_API = import.meta.env.VITE_ROOT_API
const ENDPOINT_PATH = 'api/files'

class FileService {
  async uploadFile(file) {
    const formData = new FormData()
    formData.append('file', file)
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}`, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      // console.log(response)
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export { FileService }
