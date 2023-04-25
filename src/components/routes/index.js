import Home from "../pages/Home"
import About from "../pages/About"
import Garbagedump from "../pages/Garbagedump"
import Playground from "../pages/Playground"

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/garbagedump', component: Garbagedump },
    { path: '/playground', component: Playground },
]