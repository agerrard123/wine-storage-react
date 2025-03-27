import './css/Home.css';
import Tree from '../components/Tree';

function App() {
  return (
    <>

        <div id = "content">
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