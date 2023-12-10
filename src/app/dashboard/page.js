'use client'

import ListBanks from "@/components/ListBanks";
import UseFetchGetListBanks from "@/components/hooks/useFetchDataListBank";
import {useSelector,useDispatch} from 'react-redux';
import { updateContent } from "../../redux/features/initialSlice";

export default function Dashboard() {

  const name = useSelector((state) => state.initial.userName);
  const dispatch = useDispatch();
  console.log(name)
  const handleGetListBanks = async () => {
    try {
      const data = await UseFetchGetListBanks();
      dispatch(updateContent(data));
      console.log(data);

    } catch (error) {
      console.log(error)
    }
  
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <div className="border border-gray-500 w-11/12 lg:h-1/2 lg:w-1/3 z-50 relative backdrop-blur-md p-6">
       <h2 className="text-white">Bienvenido {name}</h2>
       <button 
        className="p-2 w-full text-white"
        onClick={handleGetListBanks}
        >
          Mostrar bancos
       </button>

       <hr/>

       <div className="">
          <ListBanks/>
       </div>
      </div>
    </main>
  )
}