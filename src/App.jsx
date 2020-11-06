import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initFetch, initFetchServiceInfo } from './redux/actions/servicesAction';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { items, error, isLoading, service } = useSelector(state => state.servicesReducer);

  console.log(items, error);

  useEffect(() => {
    dispatch(initFetch());
    return () => {}
  }, [dispatch])

  const handleServiceClick = (id) => {
    dispatch(initFetchServiceInfo(id));
  }

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
            {items && !!items.length && !isLoading && items.map(item => {
              return (
              <li key={item.id}>
                <p href={item.id} onClick={() => handleServiceClick(item.id)}>{item.name}</p>
              </li>
              )
            })}
          </ul>
      }

      {
        service && !isLoading && !error.trim().length &&
        <div>
          <p>Selected: </p>
          <p>Name: {service.name}</p>
          <p>Price: {service.price}</p>
          <p>Description: {service.content}</p>
        </div>
      }
    </div>
  );
};

export default App;
