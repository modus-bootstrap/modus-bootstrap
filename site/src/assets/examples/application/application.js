import { Dialog, Tooltip } from '@bootstrap'

function hideTooltipOnClick(tooltipElement, clickElement = tooltipElement) {
  if (!tooltipElement || !clickElement) {
    return
  }

  const tooltip = Tooltip.getOrCreateInstance(tooltipElement)
  clickElement.addEventListener('click', () => tooltip.hide())
}

function hideOpenTooltips() {
  for (const tip of document.querySelectorAll('.tooltip.show')) {
    const trigger = document.querySelector(`[aria-describedby="${tip.id}"]`)
    Tooltip.getInstance(trigger)?.hide()
  }
}

function initTooltipDismissOnEscape() {
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      hideOpenTooltips()
    }
  })
}

function initSidebarTooltips() {
  const titles = [
    'Routing',
    'Application Settings',
    'Account Settings',
    'Vehicle Routing Profiles',
    'QuickBatch'
  ]

  for (const [index, element] of document.querySelectorAll('.app-sidebar .nav-link').entries()) {
    const title = titles[index]
    if (!title) {
      continue
    }

    const tooltip = new Tooltip(element, {
      trigger: 'hover',
      placement: 'end',
      title
    })

    element.addEventListener('click', () => tooltip.hide())
  }
}

function initNavbarTooltips() {
  const tooltipConfig = [
    { element: document.getElementById('appMenuToggle'), title: 'My Apps' },
    {
      element: document.getElementById('userMenuToggle'),
      title: '<strong>Christian Oliff</strong><br>christian@example.com',
      html: true,
      placement: 'bottom-end'
    }
  ]

  for (const { element, title, html = false, placement = 'bottom' } of tooltipConfig) {
    if (!element) {
      continue
    }

    const tooltip = new Tooltip(element, {
      trigger: 'hover',
      placement,
      title,
      html
    })

    element.addEventListener('click', () => tooltip.hide())
  }

  hideTooltipOnClick(document.querySelector('[aria-label="Chat"]'))

  const helpButton = document.querySelector('[aria-label="Help"]')
  hideTooltipOnClick(helpButton?.closest('[data-bs-toggle="tooltip"]'), helpButton)
}

function syncAppLayoutInsets() {
  const navbar = document.querySelector('.app-with-sidebar header .navbar')
  const footer = document.querySelector('.app-with-sidebar .app-footer')
  if (!navbar) {
    return
  }

  const root = document.documentElement
  root.style.setProperty('--bs-app-navbar-height', `${navbar.offsetHeight}px`)
  if (footer) {
    root.style.setProperty('--bs-app-footer-height', `${footer.offsetHeight}px`)
  }
}

function detectOS() {
  const platform = navigator.platform.toLowerCase()
  const userAgent = navigator.userAgent.toLowerCase()
  return platform.includes('mac') || userAgent.includes('mac')
}

function initKeyboardShortcut() {
  const isMac = detectOS()
  const modalElement = document.getElementById('shortcutModal')
  if (!modalElement) {
    return
  }

  const modal = new Dialog(modalElement)

  function updateShortcutDisplay() {
    const modifierKey = isMac ? 'Cmd' : 'Ctrl'
    const modifierKeyElement = isMac ? '⌘' : 'Ctrl'
    const rows = document.querySelectorAll('#shortcutModal tbody tr')

    rows.forEach(row => {
      const shortcutCell = row.querySelector('td:first-child')
      if (shortcutCell) {
        let text = shortcutCell.textContent
        if (text.includes('Ctrl')) {
          text = text.replace(/Ctrl/g, modifierKey)
          shortcutCell.innerHTML = text
            .split(' + ')
            .map(key => {
              if (key.trim() === modifierKey) {
                return `<kbd>${modifierKeyElement}</kbd>`
              }

              return `<kbd>${key.trim()}</kbd>`
            })
            .join(' + ')
        }
      }
    })
  }

  updateShortcutDisplay()

  window.addEventListener(
    'keydown',
    event => {
      const { key } = event
      const { code } = event
      const keyCode = event.key || event.whichCode
      const isShift = event.shiftKey
      const isCtrl = event.ctrlKey
      const isMeta = event.metaKey
      const isAlt = event.altKey
      const modifierPressed = isMac ? isMeta : isCtrl

      if (isShift && (key === '?' || key === '/' || code === 'Slash' || keyCode === 191)) {
        event.preventDefault()
        event.stopPropagation()
        modal.show()
        return
      }

      if (modifierPressed && isShift) {
        if (key === 'N' || code === 'KeyN' || keyCode === 78) {
          event.preventDefault()
          event.stopPropagation()
        } else if (key === 'S' || code === 'KeyS' || keyCode === 83) {
          event.preventDefault()
          event.stopPropagation()
        }
      }

      if (isAlt) {
        if (key === 'F3' || code === 'F3' || keyCode === 114) {
          event.preventDefault()
          event.stopPropagation()
        } else if (key === 'F8' || code === 'F8' || keyCode === 119) {
          event.preventDefault()
          event.stopPropagation()
        }
      }

      if (key === 'F8' || code === 'F8' || keyCode === 119) {
        if (!isAlt) {
          event.preventDefault()
          event.stopPropagation()
        }
      } else if (key === 'F10' || code === 'F10' || keyCode === 121) {
        event.preventDefault()
        event.stopPropagation()
      } else if (key === 'F5' || code === 'F5' || keyCode === 116) {
        event.preventDefault()
        event.stopPropagation()
      } else if (key === 'F6' || code === 'F6' || keyCode === 117) {
        event.preventDefault()
        event.stopPropagation()
      }
    },
    true
  )
}

function initAppMenuClose() {
  document.getElementById('appMenuClose')?.addEventListener('click', () => {
    const toggle = document.getElementById('appMenuToggle')
    if (toggle?.getAttribute('aria-expanded') === 'true') {
      toggle.click()
    }
  })
}

function initMap() {
  const { maplibregl } = globalThis
  if (!maplibregl) {
    setTimeout(initMap, 50)
    return
  }

  const map = new maplibregl.Map({
    center: [-98.5795, 39.8283],
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    zoom: 3
  })

  map.addControl(new maplibregl.NavigationControl(), 'top-right')
  map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right')

  document.getElementById('drawerScrolling')?.addEventListener('shown.bs.drawer', () => {
    map.resize()
  })
  document.getElementById('drawerScrolling')?.addEventListener('hidden.bs.drawer', () => {
    map.resize()
  })
}

function initApplicationExample() {
  syncAppLayoutInsets()
  window.addEventListener('resize', syncAppLayoutInsets)
  initKeyboardShortcut()
  initNavbarTooltips()
  initSidebarTooltips()
  initTooltipDismissOnEscape()
  initAppMenuClose()
  initMap()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApplicationExample)
} else {
  initApplicationExample()
}
