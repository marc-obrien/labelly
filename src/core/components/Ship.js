import React from 'react';
import ShippingLabelMaker from '../../features/shipping-label-maker/ShippingLabelMaker';
import steps from '../..//core/components/wizard/index';
import shippingObj from '../..//core/components/shippingObj';
import Header from '../../core/components/header';
import ShippingLabel from '../../features/shipping-label-maker/ShippingLabel';

export default class Ship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelReady: false
    };
    this.createLabel = this.createLabel.bind(this);
  }

  createLabel(val) {
    this.setState({
      labelReady: true,
      info: val
    });
  }
  render() {
    return (
      <div>
        {this.state.labelReady ? (
          <ShippingLabel info={this.state.info} />
        ) : (
          <ShippingLabelMaker
            header={Header}
            steps={steps}
            shippinglabelmakerContext={shippingObj}
            onComplete={this.createLabel}
          />
        )}
      </div>
    );
  }
}
