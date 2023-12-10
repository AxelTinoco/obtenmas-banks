import { useEffect } from "react";
import Image from "next/image";

const ListItemBank = ({bankName,imageBank,age,description}) => {
  console.log(imageBank)

  useEffect(() => {
    let isMounted = true;
    () => (isMounted = false);
  }, [bankName,imageBank,age,description]);

  return (

    <div 
      className='col-span-12 md:col-span-6 lg:col-span-4 flex h-auto p-2 items-center'>
    <div className="flex w-1/3 h-auto">
      <Image 
        src={imageBank}
        className="flex w-20 h-20 rounded-full object-fill" 
        width={30} 
        height={30} 
        alt={bankName} />
    </div>

    <span className="flex w-1/2 flex-col space-y-2">
      <p className="text-white text-xl">{bankName}</p>
      <p className="text-white text-sm">{description}</p>
    </span>
      
    </div>
  )
}

export default ListItemBank