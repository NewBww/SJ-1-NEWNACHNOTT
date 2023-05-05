const VITE_ROOT_API = import.meta.env.VITE_ROOT_API
const ENDPOINT_PATH = 'api/categories'

class CategoryService {
  async getAllCategories() {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}`)
      if (response.ok) {
        const data = await response.json()
        return data
      }
    } catch (error) {
      console.error('ERROR cannot find categories: ' + error)
    }
  }

  async getDefaultCategory() {
    try {
      const response = await fetch(`${VITE_ROOT_API}/${ENDPOINT_PATH}/default`)
      if (response.ok) {
        const data = await response.json()
        return data
      }
    } catch (error) {
      console.error('ERROR cannot find default category: ' + error)
    }
  }
}

export default CategoryService
