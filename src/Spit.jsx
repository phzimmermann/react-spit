import React from 'react';

export default event => class Spit extends React.Component {
  constructor(props) {
    super(props);
    event.addListener(this);
    this.state = {
      data: event.get(),
    }
  }

  set = data => this.setState({
    data,
  });

  render() {
    const { children } = this.props;
    return children({ data: this.state.data, set: event.set });
  }

  componentWillUnmount() {
    event.removeListener(this);
  }
}
