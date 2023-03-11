const Navbar = (props) => { 
    return (
        props.navList.map((nav,index) => {    
        return (
            <button key={index} onClick ={()=>{props.toggleTab(index)}}  className={props.isActive===index ? "btn-active disable" : "btn" }>{nav}</button>
        )}
        )   
    ) 
}

export default Navbar;