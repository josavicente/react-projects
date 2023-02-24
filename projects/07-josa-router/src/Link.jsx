import { EVENTS } from './consts.js'

export function navigate(href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navEvent = new Event(EVENTS.PUSH_STATE)
  window.dispatchEvent(navEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0 // primary click
    const isNotModified =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === '_blank' || target === '_self'
    if (isMainEvent && !isNotModified && isManageableEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
