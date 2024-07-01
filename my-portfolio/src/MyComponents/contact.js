import React,{useState} from 'react'
export default function Contact() {
  function submission(e) {
    e.preventDefault();
    console.log({ name, mail, msg });
    const data = { name, mail, msg };

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl ='http://localhost:4000/'; 
  
    fetch(proxyUrl+apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error(`Network response was not ok: ${result.status}`);
        }
        return result.json();
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
       console.error('Error:', error);
      });
  }
  
  
  const[name,setName] = useState('');
  const[mail,setMail] = useState('');
  const[msg,setMsg] = useState('');
  return (
    <div style={{marginTop:'50px',marginLeft:'500px'}}>
          <h1 style={{color:'yellow',marginRight:'500px'}}><u>Contact Us</u></h1>
      <form style={{border:'1px solid white',width:'500px',borderRadius:'5px'}} onSubmit={submission}>
        <br/> <br/>
       <span style={{color:'white'}}>Enter your Name:</span> <input type='text' onChange={(e)=>{setName(e.target.value)}} style={{width:'250px',backgroundColor:'white',borderRadius:'5px'}}/> <br/> <br/>
        <span style={{color:'white'}}>Enter your mail id:</span><input type='text' onChange={(e)=>{setMail(e.target.value)}} style={{width:'250px',backgroundColor:'white',borderRadius:'5px'}}/> <br/> <br/>
        <span style={{color:'white'}}>Enter your message:</span><input type='text' onChange={(e)=>{setMsg(e.target.value)}}style={{width:'250px',height:'100px',backgroundColor:'white',borderRadius:'5px'}}/> <br/> <br/>
        <button type='submit'style={{color:'white',width:'150px',height:'25px',backgroundColor:'blue',borderRadius:'5px'}} onClick={submission}>Send</button>
        <br/>
        <br/>
      </form>
    </div>
  )
}



