import { Router } from './router.js'

const router = new Router()
router.add("/", '/Pages/home/index.html')
router.add('/universe', '/Pages/universe/index.html')
router.add('/explorer', '/Pages/explorer/index.html')
router.add(404, '/Pages/error/index.html')

router.handle()

window.onpopstate = () => router.handle()

window.route = () => router.route()
