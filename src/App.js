import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Taskcomponent from './components/Taskcomponent';
import Recapday1 from './components/Recapday1';
import Productscomponent from './components/Productscomponent';
import Secondcomponent from './components/Secondcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Introduction to ReactJS</h1>
      </header>
      <h2>About me</h2>
      <p> 17 years old. I enjoy engaging in activities which are fulfilling and feed my soul. I take long walks and i love bakking and cooking</p>

      <h3>Die My Love</h3>
      <p>Starring Robert Pattison and Jniffer Lawrence, this is a coming of age film. It tackles post-maternal depression, a form of depression which is desperately seeking awareness and attention. Society has not acquainted itself with this monster. Lawrence shows how  post-maternal depression slowly destroys marital relationships and may lead to insanity.</p>

      <h4>Is it better to speak or to die</h4>
      <p>This statement has been all over substack, tiktok and anywhere where you'll find cmbyn enthusiasts. To speak is to die as speaking your truth will eventually lead to contempt from members of the society. To die itself is an act of expression. This is evident through Neil in Dead Poets Society. He spoke his truth and was despised by his father. He felt that his way of being free was to go. </p>

    <Firstcomponent/>
    <Taskcomponent/>
    <Recapday1/>
    <Productscomponent/>
    <Secondcomponent/>
    </div>
  );
}

export default App;

