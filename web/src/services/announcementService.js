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

  getAnnouncementPage() {
    return Promise.resolve({
      "content": [
          {
              "id": 4,
              "announcementTitle": "กิจกรรมพี่อ้อย พี่ฉอด On Tour 2566",
              "announcementCategory": "ทั่วไป",
              "publishDate": "2023-04-18T23:00:00Z",
              "closeDate": "2023-05-08T11:00:00Z",
              "announcementDisplay": "Y"
          }, 
          {
              "id": 3,
              "announcementTitle": "แนวปฎิบัติการสอบออนไลน์ พ.ศ. 2565",
              "announcementCategory": "ทั่วไป",
              "publishDate": "2023-01-26T23:00:00Z",
              "closeDate": null,
              "announcementDisplay": "Y"
          }, 
          {
              "id": 2,
              "announcementTitle": "รายชื่อนักศึกษาที่ได้รับทุนการศึกษาประเภท \"ทุนจ้างงาน\" 2/2565",
              "announcementCategory": "ทุนการศึกษา",
              "publishDate": null,
              "closeDate": "2023-05-31T11:00:00Z",
              "announcementDisplay": "Y"
          }, 
          {
              "id": 1,
              "announcementTitle": "บริษัท เน็ตเซอร์พลัส จำกัด รับสมัครงาน 2 ตำแหน่ง",
              "announcementCategory": "หางาน",
              "publishDate": null,
              "closeDate": null,
              "announcementDisplay": "N"
          }
      ],
      "last": true,
      "first": true,
      "totalPages": 1,
      "totalElements": 4,
      "size": 5,
      "page": 0
  } )
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
