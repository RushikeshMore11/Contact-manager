import React from 'react';
import user from "../images/user.png";

const ContactCard = (props) => {
    const{id,name,email} = props.contact;
  return (
    <div className="item">
                    <img className='ui avatar image' src={user} alt="" />
                <div key={id} className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <i 
                onClick={()=>props.clickHandler(id)} 
                 className='trash alternate outline icon end' style={{color:'maroon'}}></i>
            </div>
  )
}

export default ContactCard;