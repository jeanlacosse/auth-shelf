import React from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';
import { useSelector, useDispatch } from 'react-redux'; 
import { useEffect } from 'react'; 
import ShelfFrom from './ShelfForm';

function ShelfPage() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch ({type: 'FETCH_SHELF'});
  }, []); 
  
  const shelf = useSelector(store=> store.shelfReducer);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfFrom />
      {/* TODO
      []add new item form from here to DB using img URLs 
    [] delete item ont if same user logged in*/}
      <p>All of the available items can be seen here.</p>
    {shelf.length > 0 && 
      <ul>
        {shelf.map(item => 
          <ShelfItem 
            item={item} 
            key={item.id}
          />
        )}
      </ul>
    }
     
    </div>
        
  );
}

export default ShelfPage;
