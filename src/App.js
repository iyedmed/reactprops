
import './App.css';
import Profile from './components/Profile';

function App() {
  const handleName=(name)=> {alert (`Hi Im ${name}`)}
  return (
    <div className="App">
       <Profile  fullName="med iyed"
           bio="Hi! there"
           profession="runnnier"
           handleName={handleName}
          >
            <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-1/311598593_197924892671546_2563983635605735399_n.jpg?stp=cp0_dst-jpg_s74x74&_nc_cat=104&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=grin4nxa_egAX_ziBMD&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDbizzL-i9V3_e1zzHRn1Tc2hCUFxD3V_9RyPHCC4s7Gw&oe=64852CB5"/>
          </Profile>
    
        
        </div>
     


   

  );
}

export default App;