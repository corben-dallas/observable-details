import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.servicesReducer);

  useEffect(() => {
    dispatch();
    return () => {}
  }, [dispatch])

  return (
    <div>
      <ul>
        <li>lololo</li>
      </ul>
    </div>
  );
};

export default App;
