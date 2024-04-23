import { $$ } from './modules/common.js'

const infoGroups = [
	[
		'Take your creativity to the next level with our business broiler.',
		'Benefit from having a homebase, resources, and a supportive ecosystem.',
		'Turn your passion into a thriving business right here at Hoyt Alley.',
	],
	[
		'Join a thriving community of like-minded individuals.',
		'Hoyt Alley is not just a space: it\'s a hub for collaboration and innovation.',
		'Connect, network, and grow your business with fellow creatives.',
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
