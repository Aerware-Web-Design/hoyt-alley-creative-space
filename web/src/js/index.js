import { $$ } from './modules/common.js'

const infoGroups = [
	[
		'Welcome to Hoyt Alley, where creativity knows no bounds. Our spaces are designed to support your business growth and foster innovation.',
		'Discover the perfect small business workspace in Greater Seattle to fuel your inspiration in a space designed to bring ideas to life.',
		'Affordable Small Business Workspace in Everett tailored for your creative endeavors.',
	],
	[
		'Take your creativity to the next level with our business broiler™.',
		'Benefit from having a startup workspace in Greater Seattle, with resources and a supportive ecosystem.',
		'Turn your passion into a thriving business right here at Hoyt Alley.',
		'Find the ideal small business workspace in Everett that suits your needs.',
	],
	[
		'Connect, network, and grow your business with fellow creatives.',
		'Explore creative workspace options for startups and business space rentals in Everett.',
		'Join a thriving community of like-minded individuals.',
		'Experience the best Greater Seattle business space rentals at Hoyt Alley.',
		'Hoyt Alley is not just a space: it\'s a hub for collaboration and innovation.',
	],
]

// Switch through info for a specific target
const switchInfo = (target, info) => {
	let infoIdx = 0

	setInterval(() => {
		target.classList.toggle('hidden')

		setTimeout(() => {
			infoIdx = (infoIdx + 1) % info.length
			target.classList.toggle('hidden')
			target.textContent = info[infoIdx]
		}, 200)
	}, 10000)
}

$$('.switch-info').forEach((target, i) => switchInfo(target, infoGroups[i]))
