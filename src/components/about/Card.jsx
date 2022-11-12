import React from 'react'


export default function Card({member}) {
  return (
    <div className='card'>
        <div className="card-body">
        <img className='card-image' src={member.img} alt='meet the team' />
        <h3 className='card-title'>{member.name}</h3>
        <p className='card-desc'>{member.desc}</p>
        </div>
    </div>
  )
}
