import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import Body from './components/Body'
// import Header from './components/Header'
import NewHeader from './components/NewHeader'

import './Styles.css'

export default function App() {
  const myState = useSelector((state) => state.addtocart);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      {/* <Header/> */}
      <NewHeader />
      <Body myState={myState} dispatch={dispatch} />

    </div>
  )
}
