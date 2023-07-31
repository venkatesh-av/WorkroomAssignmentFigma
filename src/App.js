import {Component} from 'react'

import './App.css';
import Topsection from './components/Topsection/'
import Sidebar from './components/Sidebar/'
import BodyContainer from './components/BodyContainer'
import PopUpItem from './components/PopUpItem'
import HedingSection from './components/HedingSection'
import SecondBodyCanva from './components/SecondBodyCanva'


class App extends Component {

  state = {popUp:false,nextItem:false,secondBool:false,Selecting:false,canvaState:false,imagestate:false,itisTrue:false}

  geTheSecondPage = ()=>{

    this.setState({secondBool:true,popUp:false,nextItem:false} )

  }

  setSelect = ()=>{
    this.setState({Selecting:true})
  }


  getThePopup = () => {
    this.setState((prevState) => {
      const { popUp } = prevState;
      return { popUp: !popUp };
    })
  }
  onClickMaindiv = ()=>{
    if(this.state.popUp)
    {
      this.setState({popUp:false,nextItem:false})

    }
   
  }
  imagefun = ()=>{
    this.setState({imagestate:true})
  }


  changePopItem = ()=>{

      this.setState({nextItem:true,})
  }

  setSelectDelete = ()=>{
    this.setState({Selection:false})
  }
  
  setSelectReverse = ()=>{
    this.setState({Selecting:false})
  }

  canvaStatefun=()=>{
    this.setState({canvaState:true})

  }

  gotoMainPage =()=>{
    this.setState({secondBool:false})
  }
  deleteFunc = ()=>{
    this.setState({itisTrue:true})
  }

  render(){
    
    const {popUp,nextItem,secondBool,Selecting,canvaState,imagestate,itisTrue} = this.state

    const mainStyle = this.state.popUp ? "display-low":"App"

  return  secondBool ?(
    <div className={mainStyle} onClick={this.onClickMaindiv}>
      <Topsection  />
      <HedingSection gotoMainPage={this.gotoMainPage}/>
    <SecondBodyCanva Selecting={Selecting} setSelect={this.setSelect} setSelectDelete={this.setSelectDelete} setSelectReverse={this.setSelectReverse} canvaStatefun={this.canvaStatefun} canvaState={canvaState} imagestate={imagestate} imagefun={this.imagefun} itisTrue={itisTrue} deleteFunc={this.deleteFunc}/>
      </div>
  ) :(
    <>
    <div className={mainStyle} onClick={this.onClickMaindiv}>
      <Topsection  />
      <div className="side-body-container">
      <Sidebar  />
      <BodyContainer getThePopup={this.getThePopup}  />
      </div>
    </div>
   {popUp && <div className='pop-up-main-container'>
    <PopUpItem className="pop" changePopItem={this.changePopItem} nextItem={nextItem} geTheSecondPage={this.geTheSecondPage}/>
  </div>} 
  </>
    
  )
}
}

export default App;
