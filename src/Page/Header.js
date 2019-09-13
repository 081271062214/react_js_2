import React, {Component} from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      daftar: "Home | Product | Kontak | Tentang Kami",
    };
  }
  render(){
    return (
      <div>
          <h4><center>{this.state.daftar}</center></h4>
      </div>
    );
  }
}

export default Header;
