import React from 'react'

function Room({room}) {
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
                <button classname=" btn btn-primary">View Details</button>
            </div>

        </div>
      </div>





    </div>
  )
}

export default Room
