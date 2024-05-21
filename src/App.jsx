import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Body from "./Elements/Body"
import "./Styles/Style.css"
import Menupage from "./Elements/Menupage"
import Restopage from "./Elements/Restopage"
import Error from "./components/Error"
import Searchpage from "./Elements/Searchpage"
import Shimmer from "./components/Shimmer"
import Signinrout from "./Elements/Signinrout"
import Cartpage from "./Elements/Cartpage"

function App() {
  const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Body/>,
        
        children:[{
            path:"/",
            element: <Restopage/>,
          },
          {
            path:"/menu/:resId",
            element: <Menupage/>,
          },
          {
            path:"/search",
            element: <Searchpage/>
          },
          {
            path:"/demo",
            element: <Shimmer/>
          },
          {
            path:"/cart",
            element: <Cartpage/>
          },
    ],
    errorElement: <Error/>
    },
])
   
  return (
    <> 
      <RouterProvider router={appRouter} />  
    </>
  )
}

export default App
