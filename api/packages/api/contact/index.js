import nodemailer from 'nodemailer'

export const main = async ({ subject, text }) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'contact.hoytalley@gmail.com',
			pass: process.env.EMAIL_PASSWORD,
		}
	})

	const mailOptions = {
		from: 'contact.hoytalley@gmail.com',
		to: 'madison@aerware.com',
		//to: 'skycarv@gmail.com',
		subject,
		text,
	}

	try {
		await transporter.sendMail(mailOptions)
	} catch (e) {
		console.error(e)

		return {
			body: 'The email could not be sent',
			statusCode: 500,
		}
	}
}
