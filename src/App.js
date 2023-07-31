import Hd from './layout/Hdtwo'
import Banner from './component/Banner'

import Se1 from './layout/Section1'
import Ft from './layout/footer'
import Se3 from './layout/Section3'


import db from './db/db.json'

const App = () => {
  return (
    <>
    <Hd dbpath={db} ></Hd>
    {/* <Banner dbpath={db}></Banner> */}

    {/* <Se1 dbpath={db} ></Se1>
    <Se3 dbpath={db} ></Se3> */}
    {/* <Ft dbpath={db} ></Ft> */}
    </>
  );
}

export default App;
