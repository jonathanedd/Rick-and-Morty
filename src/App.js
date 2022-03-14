import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LocalInfo from './components/LocalInfo';
import SearchBox from './components/SearchBox';
import ResidentList from './components/ResidentList';

function App() {


  const [ localInfo , setLocalInfo ] = useState({});




  useEffect(() => {

    const random = Math.ceil(Math.random() * 126 ) + 1; 
    
    axios.get(`https://rickandmortyapi.com/api/location/${random}` )
      .then( res => setLocalInfo(res.data));
  }, []);




  console.log(localInfo);
  



  return (
    <div className="App">

      <div className='head'>
        <h1>Rick and Morty </h1>
      </div>
      

      <LocalInfo 
        name={localInfo.name}
        type={localInfo.type}
        dimension={localInfo.dimension}
        population={localInfo.residents?.length}
        />

      <SearchBox  setLocalInfo={setLocalInfo} /> 

      <ResidentList resident={localInfo.residents} key={LocalInfo.id} />
      
    </div>
  );
}

export default App;
