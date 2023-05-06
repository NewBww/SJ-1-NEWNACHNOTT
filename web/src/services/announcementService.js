const VITE_ROOT_API = import.meta.env.VITE_ROOT_API
const ENDPOINT_PATH = 'api/announcements'

class AnnouncementService {
  async getAllAnnouncements() {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}`)
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
      if (response.ok) {
        const data = await response.json()
        return data
      } else if (response.status === 404 || response.status === 400) {
        return response.status
      }
    } catch (error) {
      console.error(`ERROR cannot find announcement id ${id}:` + error)
    }
  }

  async postAnnouncement(announcement) {
    // console.log(announcement.categoryId)
    // console.log(JSON.stringify(announcement))
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(announcement),
      })
      return await response.json()
    } catch (error) {
      console.error('ERROR cannot add announcement' + error)
    }
  }

  async deleteAnnouncement(id) {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      return response.status
    } catch (error) {
      console.error(`ERROR cannot find announcement id ${id}:` + error)
    }
  }

  async updateAnnouncement(id, announcement) {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(announcement),
      })
      return await response.json()
    } catch (error) {
      console.error('ERROR cannot edit announcement' + error)
    }
  }
}

class Announcement {
  static DEFAULT_DISPLAY = 'N'
  constructor(
    title,
    description,
    publishDate,
    closeDate,
    categoryId,
    display = 'N'
  ) {
    this.announcementTitle = title
    this.announcementDescription = description
    this.publishDate = publishDate
    this.closeDate = closeDate
    this.announcementDisplay =
      display === 'N' || display === 'Y'
        ? display
        : Announcement.DEFAULT_DISPLAY
    this.categoryId = categoryId
  }
}
export { Announcement, AnnouncementService }
