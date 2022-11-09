import {Link} from "react-router-dom"
export default function About() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <div  style={{ 
        display: 'flex',
        justifyContent: 'center',
        padding: "1rem 0" 
        }}>
        <h2>About Us</h2>
        
        </div>
       
        <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        padding: "1rem 0", 
        fontSize:'20px'
        }}>
           <p >Tech Shop is the number 1 
          Technology E-commerce Website in Kenya.
           We specialize in</p>
        
        </div>
        <div style={{ 
        display: 'flex',
        justifyContent: 'center', 
        fontSize:'20px'
        }}>
          <ul style={{listStyle:'none',color:'blue',display : 'block'}}>
            <li><Link to ="/">Laptops </Link></li>
            <li><Link to ="/">Cameras </Link></li>
            <li><Link to ="/">Smartphones</Link></li>
            <li><Link to ="/">Music Systems</Link></li>
           </ul>
      </div>
        
      </main>
    );
  }