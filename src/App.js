import './App.scss';
import Logo from './assets/soundnext-logo.png';
import LeftText from './assets/left-text.png';
import RightText from './assets/right-text.png';
import ClaimText from './assets/claim-text.png';
import DownText from './assets/down-text.png';
import UpText from './assets/up-text.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Left-Text" src={LeftText} alt="soundnext" />
        <div className="Main">
          <img className="Logo" src={Logo} alt="soundnext" />
          <img className="Claim" src={ClaimText} alt="soundnext" />
          <img className="Down-Text" src={DownText} alt="soundnext" />
        </div>
        <img className="Right-Text" src={RightText} alt="soundnext" />
      </header>
      <body>
        <div className="Second-Layout">
          <div className="Text-Container">
            <p className="Layout-Main-Text">Welcome to Sound Next</p>
            <p className="Layout-Text">There is a new way to lear music</p>
          </div>
          <img className="Up-Text" src={UpText} alt="soundnext" />
        </div>
        <div className="Third-Layout">
          <p className="Layout-Main-Text">New class by <span className="size">Edu Imbernón</span></p>
          <p className="Layout-Text">Dj <span className="color">&</span> Deep House Production</p>
        </div>
      </body>
    </div>
  );
}

export default App;