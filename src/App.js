import Hd from './layout/Hdtwo'
import Banner from './component/Banner'
import Contents from './component/Contents'


import Ft from './layout/footer'
import './sass/App.css'

import db from './db/db.json'

const App = () => {
  return (
    <>
    <Hd dbpath={db} ></Hd>
    <Banner dbpath={db}></Banner>
    
    <Contents  dbpath={db} ></Contents>

  
    <Ft dbpath={db} ></Ft>
    </>
  );
}

export default App;
