import login from "./components/login"
import mainpage from "./components/mainpage"

export default[
    {path:"/main/:id",component:mainpage},
    {path:"/login",component:login}
]