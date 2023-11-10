import { h } from './lib/h.js'
import { ws } from './ws.js'
import { ed25519 } from './keys.js'
import { publish, open } from './sbog.js' 
import { find } from './blob.js'

const pubkey = await ed25519.pubkey()

const id = h('div', [pubkey])

const textarea = h('textarea', {style: 'width: 98%;'})

const button = h('button', {
  onclick: async () => {
    if (textarea.value) {
      const signed = await publish(textarea.value)
      const opened = await open(signed)
      const blob = await find(opened.data)
      ws.send(JSON.stringify({
        type: 'post',
        payload: signed,
        blob: blob
      }))
      textarea.value = ''
    }
  }
}, ['Send'])

export const composer = h('div', [
  id,
  textarea,
  h('br'),
  button
])

