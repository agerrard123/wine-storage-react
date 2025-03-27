import "./css/NewsSection.css";
import NewsArticles from "./NewsArticles"

function NewsSection() {
    return (
        <section>
            <h2 id = "news-articles-header">News Articles</h2>
            <section className="blocks">
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
        </section>
    )
}

export default NewsSection;