import { mount } from '@vue/test-utils'
import DetailText from '@/components/UI/atoms/DetailText.vue'

describe('DetailText', () => {
  test('renders the correct heading and detail', () => {
    const wrapper = mount(DetailText, {
      props: {
        heading: 'Test Heading',
        detail: 'Test Detail',
      },
    })

    expect(wrapper.find('h2').text()).toBe('Test Heading')
    expect(wrapper.find('p').text()).toBe('Test Detail')
  })

  test('uses default values when props are not provided', () => {
    const wrapper = mount(DetailText)

    expect(wrapper.find('h2').text()).toBe('heading')
    expect(wrapper.find('p').text()).toBe('detail')
  })
})
