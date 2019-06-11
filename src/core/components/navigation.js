import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const hidden = {
    display: 'none'
}
const Navigation = props => (
    <div style={props.show ? {} : hidden}>
    <Button icon labelPosition='left' style={props.showPrev ? {} : hidden}
                  
                  onClick={props.prev}>
       <Icon name='left arrow' />
      Previous
    </Button> 

      <Button icon labelPosition='right' style={props.showNext ? {} : hidden}
                  onClick={props.next}>
      Next
      <Icon name='right arrow' />
    </Button>  

          

        </div>
);

  export default Navigation;