import Image from "next/image";

const ListItemBank = ({bankName,imageBank,age,description}) => {
  console.log(imageBank)
  return (

    <li 
      className='flex justify-between'>
    <span>
      <Image 
        src={imageBank} 
        width={30} 
        height={30} 
        alt={bankName} />
    </span>
      <p className="text-white">Nombre del banco {bankName}</p>
      <p className="text-white">Descripción {description}</p>
    </li>
  )
}

export default ListItemBank