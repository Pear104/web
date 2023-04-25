import Home from "../pages/Home"
import About from "../pages/About"
import Garbagedump from "../pages/Garbagedump"
import Playground from "../pages/Playground"

export const publicRoutes = [
    { content: 'home', path: '', component: Home },
    { content: 'about', path: '/about', component: About },
    { content: 'dump', path: '/garbagedump', component: Garbagedump },
    { content: 'playground', path: '/playground', component: Playground },
]