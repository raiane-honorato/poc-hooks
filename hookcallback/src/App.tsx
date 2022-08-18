import React, { useCallback, useMemo, useState } from 'react';
import { Item } from './components/item';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [wishList, setWishList] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  const countItemsWithOne = useMemo(() => {
    return items.filter(item => item.includes('1')).length;
  }, [items]);

  const addToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item])
  },[]);

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem}/>
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => {
          return <Item key={item} title={item} onAddToWishList={addToWishList}/>
        })}
      </ul>
      <div>Contagem: {countItemsWithOne}</div>
    </div>
  );
}

export default App;
