import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initFetch } from './redux/actions/servicesAction';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { items, error, isLoading } = useSelector(state => state.servicesReducer);

  console.log(items, error);

  useEffect(() => {
    dispatch(initFetch());
    return () => {}
  }, [dispatch])

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {
        (!!error.trim().length && !isLoading) ? 
          <p>
            {error}
            <span onClick={() => dispatch(initFetch())}>/ Click to reload</span>
          </p> :
          <ul>
            {items.map(item => {
              return (
              <li key={item.id}>
                <a href={item.id} onClick={(e) => e.preventDefault()}>{item.name}</a>
              </li>
              )
            })}
          </ul>
      }
    </div>
  );
};

export default App;
