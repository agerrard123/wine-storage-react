import './css/Home.css';
import HomeDescription from '../components/HomeDescription';
import NewsArticles from '../components/NewsArticles';
import ContactUs from '../components/ContactUs';

function App() {

  return (
    <>
      <div>
        <section id = "main-content">
          <HomeDescription
            image="images/grape-vine.jpg"
            description="Welcome to Sip & Store, your ultimate wine storage companion! Our platform allows you to effortlessly manage your personal wine cellar, ensuring that every bottle is cataloged and easily accessible. Add wines to your virtual cellar and visualize their placement with our cellar map. When it's time to enjoy a bottle, move it to your wine history page and add tasting notes to remember every detail of the experience. You can explore reviews and ratings from other wine enthusiasts to discover new favorites. Plus, stay informed with the latest trends, expert insights, and industry news through news articles available right on the homepage. Whether you're a seasoned collector or just starting your journey, Sip & Store makes organizing and enjoying your wine collection simple and enjoyable."/>
        </section>
        <div>
          <h2 id = "news-articles-header">News Articles</h2>
          <section className="news-blocks">
            <NewsArticles
              name="You Should Know the Difference Between Vermouth and Vermouth di Torino"
              image="images/article01.png"/>
            <NewsArticles
              name="Here's the Trick To Tell if a Riesling Is Going to Be Dry or Sweet"
              image="images/article02.png"/>
            <NewsArticles
              name="Is Older Wine Better Than Younger Wine? Wine Profoessionals Weigh In"
              image="images/article03.png"/>
          </section>
        </div>
        <section>
          <ContactUs />
        </section>
      </div>
    </>
  );
}

export default App;