import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";


function SingleProduct({_id, image, name, price, audio}) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [song, setSong] = useState(new Audio(audio)) 
    
  
    return ( 

        <Col md={3} className="contain">
                <img src={image} alt="" className='img-fluid rounded mb-3'/>
                <p className="play" onClick={()=>{
                  if(isPlaying){
                    song.pause()
                  }else{
                    song.play()
                  }
                  setIsPlaying(!isPlaying)
                }}>{isPlaying ? <FaPause /> : <FaPlay /> }</p>
                    <p><Link to={`/product/${_id}`}>{name}</Link> </p>
                     <p>{price}</p>
               
                     </Col>
     );
}

export default SingleProduct;