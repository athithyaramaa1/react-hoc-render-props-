import './App.css';
import IncreaseCount from './components/IncreaseCount';
import LikeImage from './components/LikeImage';
import LikeImage2 from './components/LikeImage2';
import LikePost from './components/LikePost';
import LikePost2 from './components/LikePost2';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost />
        <LikeImage />
      </div>
      <IncreaseCount render={({count,handleChange})=>(
        <LikePost2 count={count} handleChange={handleChange}/>)}/>       
      <IncreaseCount render={({count,handleChange})=>(
        <LikeImage2 count={count} handleChange={handleChange}/>)}/>
    </div>
  );
}

export default App;
