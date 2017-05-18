/* eslint-env jest */
'use strict'

import noop from './src'

test('should be function', () => {
  expect(noop).toBeDefined()
  expect(typeof noop).toBe('function')
})

test('should do nothing', () => {
  const fn = jest.fn(noop)
  fn()
  expect(fn).toBeCalled()
})
