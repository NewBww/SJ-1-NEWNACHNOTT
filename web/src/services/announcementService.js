const VITE_ROOT_API = import.meta.env.VITE_ROOT_API
const ENDPOINT_PATH = 'api/announcements'

class AnnouncementService {
  async getAllAnnouncements() {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}`, {
        method: 'GET',
      })
      if (response.ok) {
        return await response.json()
      }
    } catch (error) {
      console.error('ERROR cannot find announcement: ' + error)
    }
  }

  async getAnnouncementById(id) {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}/${id}`, {
        method: 'GET',
      })
      if (response.ok) {
        const data = await response.json()
        // console.log(data)
        return data
      } else {
        // console.log(response)
        return response.status
      }
    } catch (error) {
      console.error(`ERROR cannot find announcement id ${id}:` + error)
    }
  }

  async postAnnouncement(announcement) {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(announcement),
      })
      const data = await response.json()
      // console.log(response)
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    } catch (error) {
      console.error('There is an error: ' + error)
      throw error
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
      const data = await response.json()
      // console.log(response)
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    } catch (error) {
      console.error('There is an error: ' + error)
      throw error
    }
  }

  async getAnnouncementPage(category, mode = 'active', page = 0, size = 5) {
    try {
      let params = ''
      let paramCount = 0
      if (mode || page || size || category) params = params + '?'
      const addParam = (name, value) => {
        if (value) {
          if (paramCount > 0) params = params + '&'
          params = params + name + '=' + value
          paramCount++
        }
      }
      addParam('mode', mode)
      addParam('page', page)
      addParam('size', size)
      addParam('category', category)
      const response = await fetch(
        `${VITE_ROOT_API}/${ENDPOINT_PATH}/pages${params}`,
        {
          method: 'GET',
        }
      )
      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        return response.status
      }
    } catch (error) {
      console.error(`ERROR cannot find announcement page` + error)
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
    // title
    if (title?.length !== 0 && title?.length <= 200) {
      this.announcementTitle = title
    } else {
      this.addValidationError(
        'announcementTitle',
        'size must be between 1 and 200'
      )
    }

    // description
    if (description?.length !== 0 && description?.length <= 10000) {
      this.announcementDescription = description
    } else {
      this.addValidationError(
        'announcementDescription',
        'size must be between 1 and 10000'
      )
    }

    // publish date
    if (publishDate === null) {
      this.publishDate = publishDate
    } else if (new Date(publishDate) < new Date()) {
      this.addValidationError(
        'publishDate',
        'must be a date in the present or in the future'
      )
    } else {
      this.publishDate = publishDate
    }

    // close date
    if (closeDate === null) {
      this.closeDate = closeDate
    } else if (new Date(closeDate) < new Date()) {
      this.addValidationError('closeDate', 'must be a future date')
    } else if (new Date(closeDate) < new Date(publishDate)) {
      this.addValidationError('closeDate', 'must be later than publish date')
    } else {
      this.closeDate = closeDate
    }

    // display
    if (display !== 'N' && display !== 'Y') {
      this.addValidationError('announcementDisplay', "must be 'Y' or 'N'")
    } else {
      this.announcementDisplay =
        display === 'N' || display === 'Y'
          ? display
          : Announcement.DEFAULT_DISPLAY
    }

    // category
    if (categoryId?.length !== null) {
      this.categoryId = categoryId
    } else {
      this.addValidationError('categoryId', 'can not be null')
    }

    // error alert
    if (this.errors !== undefined) {
      alert('There is an error:' + JSON.stringify(this.errors))
    }
  }
  addValidationError(field, message) {
    if (this.errors === undefined) {
      this.errors = []
      this.errors.push({ field: field, errorMessage: message })
    } else {
      this.errors.push({ field: field, errorMessage: message })
    }
  }
}

export { Announcement, AnnouncementService }
