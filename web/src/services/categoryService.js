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
}

export default CategoryService
