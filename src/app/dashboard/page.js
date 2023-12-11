'use client'
import { useEffect, useState } from "react";
import ListBanks from "@/components/ListBanks";
import UseFetchGetListBanks from "@/components/hooks/useFetchDataListBank";
import { useSelector, useDispatch } from 'react-redux';
import { updateContent } from "../../redux/features/initialSlice";
import LoaderData from "@/components/shared/LoaderData";

export default function Dashboard() {

  const name = useSelector((state) => state.initial.userName);
  const [contentStorage, setContentStorage] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedDataContent = localStorage.getItem(`data_content`);

    if (storedDataContent) {
      setContentStorage(JSON.parse(storedDataContent));
      setLoading(false); // Set loading to false as you have the data now
    } else {
      setLoading(false);
    }

    return () => {
      // Cleanup if needed
    };
  }, [name]);

  const handleGetListBanks = async () => {
    try {
      if (!contentStorage || Object.keys(contentStorage).length === 0) {
        // Only make the request if contentStorage is empty or undefined
        const data = await UseFetchGetListBanks();
        localStorage.setItem(`user_name`, name);
        localStorage.setItem('data_content', JSON.stringify(data));

        dispatch(updateContent(data));
        console.log(data);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 md:p-24 bg-black">
      <div className="w-11/12 lg:h-4/5 lg:w-4/5 z-50 relative backdrop-blur-md p-6">
        {
          loading
            ?
            <LoaderData />
            :
            <h2 className="text-white">Bienvenido {name}</h2>
        }
        <button
          className="p-2 w-full text-white"
          onClick={handleGetListBanks}
        >
          Mostrar bancos
       </button>

        <hr />

        <div className="flex w-full">
          {
            contentStorage
            &&
            <ListBanks />
          }
        </div>
      </div>
    </main>
  )
}
