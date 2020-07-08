import { memo } from 'react'

export function memoComponent (Component: any) {
  function areEqual(prevProps: any, nextProps: any) {
    return true
  }
  return memo(Component, areEqual)
}
