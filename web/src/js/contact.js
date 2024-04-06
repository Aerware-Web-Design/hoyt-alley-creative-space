import './modules/common.js'
//import './modules/load-service-worker.js'
import { $ } from './modules/common.js'
import { contact } from './modules/api.js'

const emailTemplate = (firstName, lastName, email, message) => `
From: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
`

// go to the stripe checkout page when the checkout button is pressed
$('#send-message').onclick = () => {
    const subject = $('#subject').textContent
    const text = emailTemplate(
        $('#first-name').value,
        $('#last-name').value,
        $('#email').value,
        $('#message').value
    )

	$('#send-message').style['pointer-events'] = 'none'

    contact(subject, text)
	.then(res => {
		alert('Message sent successfully!')
		location = '/'
	})
	.catch(err => {
		alert('Oops! Something went wrong...')
		$('#send-message').style['pointer-events'] = 'unset'
	})
}
