import React, {useState} from 'react'
import {Modal, Button, Carousel} from 'react-bootstrap';

function Room({room}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>


      <div className="row bs">
        <div classname="col-md-4">
            <img src={room.imageurls[0]} classname='smallimg' />


        </div>
        <div classname="col-md-7 ">
            <h1>{room.name}</h1>
            <p><b>Max Count:</b> {room.maxcount}</p>
            <p><b>Type:</b> {room.type}</p>
            <div style={{float:'right'}}>
                <button classname=" btn btn-primary" onclick = {handleShow}>View Details</button>
            </div>

        </div>
        
      

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header >
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
    <Carousel prevLabel='' nextLabel=''>
      {room.imageurls.map(url=>{
        return <Carousel.Item>
        <img classname='d-block w-100 bigimg'
        src ={url} />
        
      </Carousel.Item>
      })}
    </Carousel>
    <p>{room.description}</p>
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    
      </div>


    </div>
  )
}

export default Room
