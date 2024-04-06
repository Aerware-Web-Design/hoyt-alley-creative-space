import { $ } from './common.js'

const endpoint = `${location.protocol}//api.${location.host}`

export const contact = async (subject, text) => fetch(`${endpoint}/contact`, {
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify({
        subject,
        text
    })
})
