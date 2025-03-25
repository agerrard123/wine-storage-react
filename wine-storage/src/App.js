import './App.css';
import Tree from './components/Tree';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}


export default App;