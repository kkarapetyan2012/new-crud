import React from 'react';
import { Button } from 'antd';
import './card.css';

const Card = props => {
  // const { name, location, description, id } = props.data;
  const { name, id } = props.data;
  return (
    <div className="card" style={{display: 'flex'}}>
      <div className="content">
        <div className="header">
            {name}
        </div>
        {/* <div className="meta">
          <b>Location:</b>{location}
        </div> */}
        {/* <div className="description">
          <b>Description:</b> {description}
        </div> */}
      </div>
      <div className="">
        <div className="">
          {/* <button onClick={props.onUpdate.bind(null, id)} className="ui yellow basic button">Update</button> */}
          {/* <button onClick={props.onRemove.bind(null, id)} className="ui red basic button">Remove</button> */}
		      {/* <button onClick={props.onUpdate.bind(null, id)} className="ui yellow basic button">Update</button>
          <button onClick={props.onRemove.bind(null, id)} className="ui red basic button">Remove</button> */}

          <Button onClick={props.onRemove.bind(null, id)} className="ui red basic button">x</Button>
        </div>
      </div>
    </div>
  );
};


export default Card;