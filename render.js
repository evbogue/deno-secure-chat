import { h } from './lib/h.js'
import { human } from './lib/human.js'

export const render = async (m) => {
  const pubkey = h('span', [m.author])

  const content = h('span', [m.text])

  const ts = h('span', [human(new Date(m.timestamp))])

  const raw = h('pre')

  const rawButton = h('a', {
    href: '',
    onclick: (e) => {
      e.preventDefault()
      if (!raw.textContent) {
        raw.textContent = m.raw
      } else { raw.textContent = ''} 
    }
  }, ['raw'])

  setInterval(() => {
    ts.textContent = human(new Date(m.timestamp))
  }, 10000)

  const right = h('span', {style: 'float: right;'}, [
    rawButton,
    ' ',
    ts
  ])

  const div = h('div', [
    right, 
    pubkey,
    ' ', 
    content,
    raw
  ])

  return div
}
