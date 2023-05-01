import { expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'

test("mount component",async()=>{
  expect(SingleButton).toBeTruthy();

  const wrapper = mount(SingleButton,{
      props:{
        text:"Test Button!",
      },
  });
  expect(wrapper.text()).toContain("Test Button!");
})

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })