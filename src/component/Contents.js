
import Se1 from '../layout/Section1'
import Se2 from '../layout/section2'
import Se3 from '../layout/Section3'
const Contents = (props) =>{
    
    const sectionId =  props.dbpath.navi.gnb.map((v, i)=>{
        return v.alink
      })   
      console.log( sectionId )
    return(
        <>
        <Se1></Se1>
        <Se2></Se2>
        <Se3></Se3>
       
        {/* {
            sectionId.map(( v, i) =>{
                return(
              <section id={v} style={{ "height" : "100vh"}}>
              </section>
                )
              })
           
           
        } */}
        </>
    )
}
export default Contents