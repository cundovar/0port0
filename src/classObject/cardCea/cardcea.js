import React, { Component } from 'react';

class CardCrea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };

    this.cardRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      width: this.cardRef.current.offsetWidth,
      height: this.cardRef.current.offsetHeight,
    });
  }

  handleMouseMove = (e) => {
    const { offsetLeft, offsetTop } = this.cardRef.current;
    const { width, height } = this.state;

    this.setState({
      mouseX: e.pageX - offsetLeft - width / 2,
      mouseY: e.pageY - offsetTop - height / 2,
    });
  };

  handleMouseEnter = () => {
    clearTimeout(this.state.mouseLeaveDelay);
  };

  handleMouseLeave = () => {
    const mouseLeaveDelay = setTimeout(() => {
      this.setState({
        mouseX: 0,
        mouseY: 0,
      });
    }, 1000);

    this.setState({ mouseLeaveDelay });
  };

  render() {
    const { dataImage } = this.props;
    const { mouseX, mouseY, width, height } = this.state;

    const cardStyle = {
        
      transform: `rotateY(${mouseX / width * 20}deg) rotateX(${mouseY / height * 3}deg)`,
    };

    const cardBgTransform = {
      transform: `translateX(${mouseX / width * 10}px) translateY(${mouseY / height *50}px)`,
    };

    const cardBgImage = {
      backgroundImage: `url(${dataImage})`,
    };

    return (
      <div
        className="card-wrap cursor"
        onMouseMove={this.handleMouseMove}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        ref={this.cardRef}
      >
        <div className="card" style={cardStyle}>
          <div className="card-bg" style={{...cardBgTransform ,...cardBgImage }}></div>
          <div className="card-info">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default CardCrea;


