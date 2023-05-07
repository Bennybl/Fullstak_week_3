import '../App.css';
import Main from '../components/Main';
import Left from '../components/Left';



function Home(props) {
  const posts = props.posts
  
  return (
    <div className="Home">
      <Main posts={posts}/>
      <Left/>
    </div>
  );
}
export default Home;