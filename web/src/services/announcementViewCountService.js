const VITE_ROOT_API = import.meta.env.VITE_ROOT_API
const ENDPOINT_PATH = 'api/counts'

class ViewCountService {
  async getCount(id) {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}/${id}`, {
        method: 'GET',
      })
      if (response.ok) {
        return await response.json()
      }
    } catch (error) {
      console.error('Failed to count: ' + error)
    }
  }
  async addCount(id) {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}/${id}`, {
        method: 'POST',
      })
      if (response.ok) {
        return await response.json()
      }
    } catch (error) {
      console.error('Failed to add: ' + error)
    }
  }
}

export { ViewCountService }
