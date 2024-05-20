import { $ } from './common.js'

const endpoint = 'https://faas-sfo3-7872a1dd.doserverless.co/api/v1/web/fn-f1b5f43f-4f5d-40fb-a530-5abe7770e71f/api'

export const contact = async (subject, text) => fetch(`${endpoint}/contact`, {
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify({
        subject,
        text
    })
})
