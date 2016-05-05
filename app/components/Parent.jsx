import React from 'react';
import Child from './Child.jsx';
import ParentStyle from './Parent.scss';


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Parent';
    
    console.log('constructor');
  }

  render() {

    return (
      <div>
        <Child/>
    </div>);
  }
}

export default Parent;
