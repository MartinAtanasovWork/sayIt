import { Outlet } from "react-router-dom";

import usePersistedUser from "../../hooks/usePersistedUser";

export default function Persisted(){
    
   usePersistedUser(); 

   return (
      <>
      <Outlet />
      </>
   )
   }