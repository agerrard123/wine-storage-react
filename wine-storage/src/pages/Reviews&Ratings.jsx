import './css/Reviews&Ratings.css';
import BlackWhiteField from "../images/black-white-field.jpg";
import Review from '../components/Review';

function ReviewsRatings() {
    return (
        <>
            <div id = "img-div" className = "picture">
                <img id = "image" src = {BlackWhiteField} alt = "black and white vineyard"/>
                <div id = "img-div-header">
                    <h3>Welcome to Reviews & Ratings!</h3>
                    <p>Take a look at various wine reviews from professionals,<br/> and you might even find your next favorite wine!</p>
                </div>
            </div>
            <div id = "review-text">
                <Review
                    image = "images/review01.jpg"
                    name = "Clos des Andes Review"
                    paragraph1 = "The 2006 Clos des Andes is a hidden gem from the heart of Mendoza, offering a surprisingly refined experience at an unbeatable price. This Malbec-driven red opens with a deep ruby hue and an inviting nose of ripe blackberries, plum, and a touch of dark chocolate."
                    paragraph2 = "On the palate, the wine is well-structured, balancing bold fruit flavors with hints of leather, tobacco, and a whisper of vanilla from subtle oak aging. The tannins are smooth yet persistent, providing a velvety mouthfeel that lingers with a pleasant spice on the finish."
                    paragraph3 = "While not the most complex bottle from the region, Clos des Andes 2006 delivers impressive depth and drinkability for under $15. It pairs beautifully with grilled meats, hearty pastas, or an aged Manchego cheese."
                    rating = "8.5/10"/>
                <Review
                    image = "images/review02.jpg"
                    name = "Carnival of Love Review"
                    paragraph1 = "The 2012 Carnival of Love is a showstopper from South Australia, delivering a bold and hedonistic Shiraz experience that lives up to its name. This wine pours an inky purple with an almost hypnotic depth, teasing the senses with an intoxicating bouquet of blackberry compote, blueberry jam, dark chocolate, and a swirl of exotic spices."
                    paragraph2 = "On the palate, it's a powerhouse-lush, velvety, and unabashedly rich. Waves of ripe black fruits coat the mouth, layered with hints of mocha, licorice, and a touch of toasted vanilla from well-integrated oak. The texture is opulent, the tannins silky, and the finish lingers with a seductive mix of spice and dark berry sweetness."
                    paragraph3 = "Though undeniably bold, the 2012 Carnival of Love maintains balance, making it an indulgence worth savoring. Decant for an hour to let its full complexity shine, and pair it with a perfectly grilled ribeye or slow-braised short ribs."
                    rating = "6/10"/>
                <Review
                    image = "images/review03.jpg"
                    name = "Uncle Dick Review"
                    paragraph1 = "Uncle Dick is a bold and boisterous Australian red blend that doesn't take itself too seriously but still delivers plenty of character for the price. This non-vintage selection pours a deep garnet with purple hues, offering a lively nose of ripe black cherries, plums, and a touch of eucalyptus."
                    paragraph2 = "On the palate, it's fruit-forward and juicy, bursting with flavors of blackberry jam, dark chocolate, and a hint of cracked black pepper. Medium-bodied with soft tannins, it has a smooth, easy-drinking quality that makes it a crowd-pleaser. A touch of oak adds a subtle vanilla note, while the finish lingers with a pleasant mix of spice and dark fruit."
                    paragraph3 = "Uncle Dick is a no-nonsense, everyday red that pairs perfectly with barbecued meats, pizza, or a good old-fashioned burger. Whether you're kicking back with friends or just looking for a solid weeknight wine, this bottle gets the job done."
                    rating = "7.5/10"/>
                <Review
                    image = "images/review04.jpeg"
                    name = "Humo Blanco Review"
                    paragraph1 = "Humo Blanco 2020 is a delightful and expressive white from Chile's Central Valley, offering a fresh yet complex experience that belies its approachable price point. This Sauvignon Blanc showcases a pale, straw-yellow color, with an aromatic nose of citrus zest, green apple, and delicate floral notes, alongside a hint of freshly cut grass."
                    paragraph2 = "On the palate, it strikes a perfect balance between crisp acidity and fruit-driven flavors. Notes of lime, grapefruit, and green melon lead the way, while a subtle minerality adds depth and structure. The finish is clean, refreshing, and vibrant, with just the right amount of tang to keep you coming back for another sip."
                    paragraph3 = "This wine is an excellent choice for seafood lovers, pairing effortlessly with oysters, ceviche, or a fresh goat cheese salad. Its versatility makes it a great option for a variety of occasions, whether it's a summer picnic or a casual dinner party."
                    rating = "8/10"/>
            </div>
        </>
    )
};

export default ReviewsRatings;