import { h } from './lib/h.js'
import { open } from './sbog.js'
import { make } from './blob.js'
import { render } from './render.js'

export const process = async (m, scroller) => {
  const msg = await JSON.parse(m)

  if (msg.type === 'post') {
    console.log('POST')
    const opened = await open(msg.payload)
    opened.text = msg.blob
    const rendered = await render(opened)
    if (!scroller.firstChild) {
      scroller.appendChild(rendered)
    } else {
      scroller.insertBefore(rendered, scroller.firstChild)
    }

  }
}
