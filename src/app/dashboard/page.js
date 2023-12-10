'use client'
import { useEffect, useState } from "react";
import ListBanks from "@/components/ListBanks";
import UseFetchGetListBanks from "@/components/hooks/useFetchDataListBank";
import {useSelector,useDispatch} from 'react-redux';
import { updateContent } from "../../redux/features/initialSlice";
import LoaderData from "@/components/shared/LoaderData";

export default function Dashboard() {
  
  const name = useSelector((state) => state.initial.userName);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setLoading(false);
    }

    return () => (isMounted = false);
  }, [name]);

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
      <div className="w-11/12 lg:h-4/5 lg:w-4/5 z-50 relative backdrop-blur-md p-6">
       {
        loading 
        ?
        <LoaderData/>
        :
        <h2 className="text-white">Bienvenido {name}</h2>
       }
       <button 
        className="p-2 w-full text-white"
        onClick={handleGetListBanks}
        >
          Mostrar bancos
       </button>

       <hr/>

       <div className="flex w-full">
          <ListBanks/>
       </div>
      </div>
    </main>
  )
}