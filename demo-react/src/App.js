import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PRABHAS</h1>
      </header>
      
      <div className='IFrames'>
    <iframe src='https://en.wikipedia.org/wiki/Prabhas'></iframe>
  </div>

      <div className='PrabhasPara'>
        <p>Uppalapati Venkata Suryanarayana Prabhas Raju ([pɾabʱaːs] born 23 October 1979), known mononymously as Prabhas, is an Indian actor who predominantly works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has been featured in Forbes India's Celebrity 100 list since 2015.Referred to in the media as the "Rebel Star", he has appeared in over 20 films, and has received seven Filmfare Awards nominations, a Nandi Award, and a SIIMA Award.

Prabhas made his acting debut with the drama Eeswar (2002), and later attained his breakthrough with the action romance Varsham (2004). He went on to star in other commercially successful films such as Chatrapathi (2005), Bujjigadu (2008), Billa (2009), Darling (2010), Mr. Perfect (2011), and Mirchi (2013), winning the Nandi Award for Best Actor for his performance in the lattermost.He went on to play a dual role in the epic action duology Baahubali: The Beginning (2015) and Baahubali 2: The Conclusion (2017), with the latter emerging as the highest-grossing Indian film at that point, establishing Prabhas as the first pan-Indian star. After a brief period of decline, he made a career comeback with the action drama Salaar: Part 1 – Ceasefire (2023) and the science fiction film Kalki 2898 AD (2024)
        </p>
      </div>

      <div className='FlexImg'>
      <img className="PrabhasPics Pic1" src='https://m.media-amazon.com/images/M/MV5BZDY5YmE3ZDMtNGY2NS00NGYwLWEzNDctZTk1Yjk1MGQ3ZDJiXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg' alt='pic1'></img>
    <img className="PrabhasPics Pic2" src='https://i.pinimg.com/736x/ab/03/d3/ab03d387134d4fc16d57c638fbb9383e.jpg' alt='pic2'></img>
    <img className="PrabhasPics Pic3" src='https://m.media-amazon.com/images/M/MV5BMjliZmI3YmMtYWU1NS00MjVlLTkxZTQtYjIzYzFkNWNjOTZkXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg' alt='pic3'></img>
    <img className="PrabhasPics Pic4" src='https://static.india.com/wp-content/uploads/2023/12/prabhas4.jpg?impolicy=Medium_Widthonly&w=400&h=800'alt='pic4'></img>
    <img className="PrabhasPics Pic5" src='https://w0.peakpx.com/wallpaper/112/617/HD-wallpaper-hero-prabhas-formal-hero-prabhas-prabhas-hero-telugu-actor.jpg' alt='pic5'></img>
  </div>

    </div>
  );
}

export default App;
