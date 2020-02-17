import React, { useState, useEffect } from 'react';
import { Input, Button  } from 'antd';

import './form.css';

const Form = props => {
  const { template } = props;
  const [data, setData] = useState(template);
  // const { name, location, description, id } = data;
  const { name, id } = data;

  useEffect(() => {
    setData( template )
  }, [template])

  const onSubmitForm = () => {
    props.submit(data)
  }

  const hendleFormChange = (event) => {
    const { target: { name, value } } = event;
    setData({
      ...data,
      [name]: value 
    })
  }
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>

      <div className="example-input">
        <Input size="large" placeholder="number" name="name" onChange={hendleFormChange} value={name} type="text" />
      </div>
      {/* <div className="ui input">
        <input name="name" onChange={hendleFormChange} value={name} type="text" placeholder="Event Name" />
      </div> */}
      {/* <div className="ui input">
        <input name="location" onChange={hendleFormChange} value={location} type="text" placeholder="Event Location" />
      </div>
      <div className="ui form">
        <div className="field">
          <textarea name="description" onChange={hendleFormChange} value={description} placeholder="Description" rows="5"></textarea>
        </div>
      </div> */}
      {/* <div className="ui inverted segment">
        <button onClick={onSubmitForm} className={`ui inverted ${id ? 'green' : 'orange'} button`}>{id ? 'Update' : 'Create'}</button>
      </div> */}
      <Button onClick={onSubmitForm} className={`${id ? 'green' : 'orange'} button`} type="primary">Add</Button>
    </div>
  );
};

export default Form;