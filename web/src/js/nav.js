import { $, $$ } from './modules/common.js';
import { createRoutes } from './modules/router.js';

// Expand the navbar when the menu button is clicked
$('#menu-button').onclick = () => $('nav').classList.toggle('expand')

// Shrink the navbar when a menu link is clicked
$$('.links a').forEach(a => a.onclick = () => $('nav').classList.toggle('expand'))

createRoutes()
