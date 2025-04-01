import {useState} from "react";
import './css/Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "eab119bd-db9f-4652-9e63-b17721b6bd30");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div id = "form-map">
        <form id = "contact" className = "contact-style" onSubmit={onSubmit}>
            <p>
                <label for="name">Name:</label><br/>
                <input
                    id="name"
                    type="text"
                    placeholder="First and Last"
                    name="name"
                    required
                />
            </p>
            <p>
                <label for="email-address">E-mail:</label><br/>
                <input id="email-address" type="email" name="email" placeholder="Must include '@'" required/>
            </p>
            <p>
                <label for="message">Write Your Message:</label><br/>
                <textarea id="message" name="message" required></textarea>
            </p>
            <button type="submit">Submit</button><br/><br/>
            <span id = "final-message">{result}</span>
        </form>
        
      </div>
    );
  }

  export default Contact;