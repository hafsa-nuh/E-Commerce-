export default function  Contact() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        padding: "1rem 0", 
        fontSize:'20px'
        }}>
        <h2>Contact Us</h2>
        </div>
        <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        padding: "1rem 0", 
        fontSize:'20px'
        }}>
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text" placeholder="Enter name"/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" placeholder="Enter Email"/>
                </div>
                <div>
                    <label>Reason: </label>
                    <input type="text" placeholder="Enter reason"/>
                </div>
            </form>

        </div>
        
      </main>
    );
  }