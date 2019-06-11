import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react'

const Home = () => (
	<React.Fragment>
  <Segment inverted textAlign='center'
    style={{ minHeight: 700, padding: '1em 0em' }}
    vertical>
     <Icon inverted color='orange' circular name='print' size='huge' />
<Header
      as='h1'
      content='Shipping Label Maker'
      inverted
      style={{
        fontSize:'2em',
        fontWeight: 'normal',
        marginBottom: '2em',
        marginTop:'1.5em',
      }}
    />

      <Link to={`/Ship`}>

 <Button primary size='huge' animated>
      <Button.Content visible>Get Started</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
</Link>
    </Segment>
    </React.Fragment>
)
export default Home