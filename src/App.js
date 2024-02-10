
import './App.css';
import { useState } from "react";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
      
      
  }}>
    {yesPressed ? (
      <>
  
  <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" width={250} height={250} />
  
      <div className="text-4xl font-bold my-4">Ok yay!!!</div>
      </>
    ) : (
      <>
        <img className="valimage1" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" width={250} height={250} />
        <h1 className="willyoubemyval">Will you be my Valentine? </h1>
        <div style={{display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',}}>
          <button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4` }
            style={{ fontSize: yesButtonSize, color:"white", backgroundColor: 'green', margin: '30px', paddingBottom: '5px', paddingTop: '5px', paddingLeft:'8px', paddingRight: '8px'}}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button >
          <button
            onClick={handleNoClick}
            className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            style={{color:"white", backgroundColor: 'red', paddingBottom: '6px', paddingTop: '6px', paddingLeft:'10px', paddingRight: '10px',}}
          >
            {noCount === 0 ? "No" : getNoButtonText()}
          </button>
        </div>
      </>
    )}
  </div>
  );
}

export default App;
