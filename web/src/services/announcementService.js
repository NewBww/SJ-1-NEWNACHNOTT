const VITE_ROOT_API = import.meta.env.VITE_ROOT_API
const ENDPOINT_PATH = 'api/announcements'

class AnnouncementService {
  async getAllAnnouncements() {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}`)
      // console.log(...response.clone().headers)
      if (response.ok) {
        const data = await response.json()
        return data
      }
    } catch (error) {
      console.error('ERROR cannot find announcement: ' + error)
    }
  }

  async getAnnouncementById(id) {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}/${id}`)
      // console.log(...response.clone().headers)
      if (response.ok) {
        const data = await response.json()
        // console.log(data)
        return data
      }
      else if (response.status === 404) {
        return response.status
      }
    } catch (error) {
      console.error(`ERROR cannot find announcement id ${id}:` + error)
    }
  }
}

export default AnnouncementService
