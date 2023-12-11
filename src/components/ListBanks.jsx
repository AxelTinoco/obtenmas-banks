import React, { useEffect, useState } from 'react'
import ListItemBank from './ListItemBank';
import {useSelector} from 'react-redux';
import LoaderData from './shared/LoaderData';

const ListBanks = () => {

  const banks = useSelector((state) => state.initial.content);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setLoading(false);
    }

    return () => (isMounted = false);
  }, [banks]);

  const _renderListItem = (data) =>
  data.map((i) => (
    <ListItemBank 
      key={i.bankName} 
      bankName={i.bankName}
      imageBank={i.url}
      age={i.age}
      description={i.description}
      />
  ));

  return (
    <div className='grid grid-cols-12 gap-4'>
      {
        loading
        ?
        <LoaderData/>
        :
        _renderListItem(banks)
      }
    </div>
  )
}

export default ListBanks