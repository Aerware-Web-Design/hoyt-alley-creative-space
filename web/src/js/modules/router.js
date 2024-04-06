import { $, $$ } from './common.js';

export const routes = {}

export const createRoutes = () => {
	const parser = new DOMParser()

	$$('a').forEach( async a => {
		if (!a.href) return
		if (!a.href.includes(`${location.protocol}//${location.hostname}`)) return

		const href = a.href
		const prev = a.onclick

		a.removeAttribute('href')
		a.onclick = () => {
			prev && prev()
			go(href)
		}

		if (routes[href]) return

		const response = await fetch(href)

		routes[href] = parser.parseFromString(await response.text(), 'text/html')
	})

	addEventListener('popstate', ({ state }) => go(state.href))

	return routes
}

export const go = href => {
	const link = document.createElement('a')

	link.href = href

	$('body').classList.add('loading')

	setTimeout(() => {
		$('head').innerHTML = routes[href].querySelector('head').innerHTML
		$('main').innerHTML = routes[href].querySelector('main').innerHTML

		createRoutes()
	}, 500)

	setTimeout(() => $('body').classList.remove('loading'), 800)

	link.hash
		? $(link.hash)?.scrollIntoView()
		: window.scroll(0, 0)
	
	if (location.href == href) return

	history.pushState({ href }, "", href)
}
