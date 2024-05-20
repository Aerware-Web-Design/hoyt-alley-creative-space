import './modules/common.js'
import { $ } from './modules/common.js'
import { contact } from './modules/api.js'

const emailTemplate = (fullName, companyName, email, message) => `
From: ${fullName} - ${companyName}
Email: ${email}

Message:
${message}
`

// go to the stripe checkout page when the checkout button is pressed
$('#send-message').onclick = () => {
    const subject = "From Hoyt Contact Form"
    const text = emailTemplate(
        $('#full-name').value,
        $('#company-name').value,
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
