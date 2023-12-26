import React, { useEffect, useState } from "react"
import './feedback.css'

export default function Feedback() {

    //add states -> ex :- useState
    //add hooks -> ex :- useEffect
    //add other function -> ex :- handleChange() and other related things
    const [formData, setFormData] = useState({
        yourName: '',
        yourEmail: '',
        yourFeedback: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form Data:', formData);
      };

    return (
        <div>
            <div className="topContainer">
                <div className="titleContainer_top">
                    <p>Frequently Asked Questions</p>
                </div>
                <div className="faqListDiv">
                    <p>Hello</p>
                </div>
            </div>
            <div className="middleContainer">
                <div className="titleContainer_middle">
                    <p>What our customers say</p>
                </div>
                <div className="subTitileContainer_middle">
                    <p>“Customer Voices: Why We're the Best - Fast Service, Delicious Picks,</p>
                    <p> Happy Customers!”</p>
                </div>
                <div className="customerFeedbackDiv">
                    <div className="feedback">
                        <p>Hello</p>
                    </div>
                    <div className="feedback">
                        <p>Hello</p>
                    </div>
                    <div className="feedback">
                        <p>Hello</p>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <div className="titleContainer_bottom">
                    <p>Contact Us</p>
                </div>
                <div className="feedbackFormContainer">
                    <div className="infoDiv">
                        <p></p>
                    </div>
                    <div className="feedbackForm">
                        <form className= "feedbackFRM" onSubmit={handleSubmit}>
                            <label htmlFor="yourName" className="feedbackFromLabel">Your Name:</label><br/>
                            <input className="feedbackFromInput"
                                type="text"
                                id="yourName"
                                name="yourName"
                                value={formData.yourName}
                                onChange={handleChange}
                                required
                            />

                            <br />

                            <label htmlFor="yourEmail" className="feedbackFromLabel">Your Email:</label>
                            <input className="feedbackFromInput"
                                type="email"
                                id="yourEmail"
                                name="yourEmail"
                                value={formData.yourEmail}
                                onChange={handleChange}
                                required
                            />

                            <br />

                            <label htmlFor="yourFeedback" className="feedbackFromLabel">Your Feedback:</label>
                            <textarea className="feedbackFromInput"
                                id="yourFeedback"
                                name="yourFeedback"
                                value={formData.yourFeedback}
                                onChange={handleChange}
                                rows="4"
                                required
                            ></textarea>

                            <br />

                            <input type="submit" className="feedbackFormSubmitBtn" value="Send" />
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}