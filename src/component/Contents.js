
// import Se1 from './layout/Section1'
// import Se3 from './layout/Section3'
const Contents = (props) =>{
    
    const sectionId =  props.dbpath.navi.gnb.map((v, i)=>{
        return v.alink
      })   
      console.log( sectionId )
    return(
        <>
       
        {
            sectionId.map(( v, i) =>{
                return(
              <section id={v} style={{ "height" : "100vh"}}>


              </section>
                )
            })
           
           
        }
        </>
    )
}
export default Contents