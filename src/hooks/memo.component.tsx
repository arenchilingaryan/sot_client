import { memo } from 'react'

export function memoComponent (Component: any) {
  function areEqual(prevProps: any, nextProps: any) {
    /*
    возвращает true, если nextProps рендерит
    тот же результат что и prevProps,
    иначе возвращает false
    */
    return true
  }
  return memo(Component, areEqual)
}
