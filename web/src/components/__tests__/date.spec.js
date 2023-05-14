import { expect, test } from 'vitest'
import { useDateValidation, useFormatTime } from '../../composables/date'

test('date time', () => {
  expect(useFormatTime('2023-05-08T11:00:00Z')).toEqual('8 May 2023, 18:00')
  expect(useFormatTime('2023-04-18T23:00:00Z')).toEqual('19 Apr 2023, 06:00')
})

test('validate publish', () => {
  expect(useDateValidation('2023-04-04T11:00:00Z', null, 'publish')).toEqual(
    true
  )

  // expect(
  //   useDateValidation(new Date(), '2021-03-04T11:00:00Z', 'close')
  // ).toEqual(true)
  // expect(
  //   useDateValidation('2023-04-04T11:00:00Z', '2024-03-04T11:00:00Z', 'close')
  // ).toEqual(true)
})

// test('validate close ' => {
//   expect(useDateValidation(null, '2023-04-04T11:00:00Z', 'close')).toEqual(
//     false
//   )
// })
