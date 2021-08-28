import React from 'react'
export default function User(props) {

    const {email,name,avatar}=props;
    console.log(email)

    return (
        <>

        <div className="card" style={{width:"200px",marginLeft:"15px",marginTop:"100px"}} id="cspace">
        <img src={avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#k" className="btn btn-primary w-100">{email}</a>
        </div>
       </div>
      
        </>
    )
}
