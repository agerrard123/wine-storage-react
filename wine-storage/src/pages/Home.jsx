import './css/Home.css';
import Tree from '../components/Tree';
import HomeDescription from '../components/HomeDescription';

function App() {
  return (
    <>
      <div>
        <section id = "main-content">
          <HomeDescription
            image="images/grape-vine.jpg"
            description="Welcome to Sip & Store, your ultimate wine storage companion! Our platform allows you to effortlessly manage your personal wine cellar, ensuring that every bottle is cataloged and easily accessible. Add wines to your virtual cellar and visualize their placement with our cellar map. When it's time to enjoy a bottle, move it to your wine history page and add tasting notes to remember every detail of the experience. You can explore reviews and ratings from other wine enthusiasts to discover new favorites. Plus, stay informed with the latest trends, expert insights, and industry news through news articles available right on the homepage. Whether you're a seasoned collector or just starting your journey, Sip & Store makes organizing and enjoying your wine collection simple and enjoyable."/>
        </section>
        <section className="columns">
          <Tree 
            name="Live Oak"
            description="Doesn't lose it's leaves"
            image="images/live-oak-tree.jpg"/>
          <Tree 
            name="Dogwood"
            description="Flowers in spring"
            image="images/dogwood-tree.jpg"/>
        </section>
      </div>
    </>
  );
}

export default App;