import React from 'react';

// const Card = (props) => {
// destructuring props right inside of their call, see above
const Card = ({name, id, email}) => {
        // this avoids have to write props.name, props.email, every time you want to use it
        // const {name, email, id} = props
  return (
        // this is JSX read by React, not HTML
        // can only return a single element, 
        // like a single div container or an array

        // initially it was
        // <h2>Jane Doe</h2>
        // <p>jane.doe@gmail.com</p>

        // back ticks `` on the img src

        // tachyon classNames bg-light-green
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          <img src={`https://robohash.org/${id}`} style={{height: '200px', width: '200px'}} alt='ROBOT'/>
          <div>
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
        </div>
        );
};

export default Card;