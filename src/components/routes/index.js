import Home from "../pages/Home"
import About from "../pages/About"
import Garbagedump from "../pages/Garbagedump"
import Playground from "../pages/Playground"

export const publicRoutes = [
    { content: 'home', path: '', component: Home },
    { content: 'about', path: process.env.PUBLIC_URL + '/about', component: About },
    { content: 'dump', path: process.env.PUBLIC_URL + '/garbagedump', component: Garbagedump },
    { content: 'playground', path: process.env.PUBLIC_URL + '/playground', component: Playground },
]