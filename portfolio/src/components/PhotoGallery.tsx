import ReactTabs from "../assets/ReactTabs.jpg";
import ReactChips from "../assets/ReactChips.jpg";


const PhotoGallery = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:'center',alignItems:"center",width:'100%', gap:'0.2rem', flexWrap:"wrap"}}>
      {/* <div style={{gap:'2rem',display:"flex",paddingTop:"50px",flexDirection:'column'}}> */}
        <img src={ReactTabs} alt="React Tabs" style={{width:'50%'}} />
        <img src={ReactChips} alt="React Chips" style={{width:'50%'}}/>
      {/* </div> */}
      <aside>These are screenshots of the React Typescript components in production environment</aside>
      {/* <img src={ProjectImage} alt="Girl with Computer" style={{width:'60%'}} /> */}
    </div>
  );
};

export default PhotoGallery;