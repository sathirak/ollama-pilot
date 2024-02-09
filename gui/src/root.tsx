import './global.css'

import {router} from './route_config'
import {RouterProvider} from "react-router-dom";

function ROOT(){

  return <RouterProvider router={router} />

}

export default ROOT
