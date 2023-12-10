import React, { useEffect } from 'react'
import ListItemBank from './ListItemBank';
import {useSelector} from 'react-redux';

const ListBanks = () => {

  const banks = useSelector((state) => state.initial.content);


  useEffect(() => {
    let isMounted = true;
    () => (isMounted = false);
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
    <ul>
      {_renderListItem(banks)}
    </ul>
  )
}

export default ListBanks