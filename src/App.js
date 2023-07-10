import { useState } from 'react';
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import TextArea from './Components/TextArea'

function App() {
  const [mode,setMode]=useState('light');
  const [alertText, setAlertText] = useState('Welcome to Text-correct');
  function switchMode(){
    if(mode==='light'){
      setMode('dark')
      document.body.style.background = 'grey';
  }
    else{
      setMode("light")
      document.body.style.background = 'white';
    }
    
  }
  const showAlertText = (text)=>{
    setTimeout(()=>{
      setAlertText();
      
    }
    ,2000)
    setAlertText(text)
  }

  return (
    <>
      <Navbar text="Text-Correct" mode={mode} switchMode={switchMode}/>
      <Alert text={alertText}/>
      <TextArea mode={mode} showAlertText={showAlertText}/>
    </>
  );
}

export default App;
