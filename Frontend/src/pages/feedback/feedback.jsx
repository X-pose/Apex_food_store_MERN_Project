import React, { useEffect, useState } from "react"
import './feedback.css'
import { MdOutlineMail } from "react-icons/md";
import FaqList from '../../components/faqList/faqList'
import FeedbackCard from "../../components/feedbackCard/feedbackCard";
import axios from 'axios';

export default function Feedback() {

    //add states -> ex :- useState
    const [results, setResults] = useState([]);
    //add hooks -> ex :- useEffect
    useEffect(() => {

        const getFaqList = async () => {
            try {

                console.log('getFAQList is running!')
                await axios.get('/api/feedbackFAQs/page')
                    .then(res => {

                        const json = res.data;
                        setResults(json.getFAQs);
                        console.log(res)
                        console.log(results)

                    })
                    .catch(() => {
                        console.log(`Data retrivel failed`)
                    })

            } catch (error) {
                console.log(error)

            }
        }

        getFaqList()

    }, []);
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

        console.log(formData.yourName, formData.yourEmail, formData.yourFeedback)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/feedbackFAQs/sendData', {
                fbUserName: formData.yourName,
                fbUserEmail: formData.yourEmail,
                fbContext: formData.yourFeedback,
            });

            console.log('Axios POST Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }

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
                    {results !== undefined && <FaqList queries={results} />}
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
                        <FeedbackCard userName='TestUser1' feedback='Test feedback' proPic='' />
                    </div>
                    <div className="feedback">
                        <FeedbackCard userName='TestUser1' feedback='Test feedback' />
                    </div>
                    <div className="feedback">
                        <FeedbackCard userName='TestUser1' feedback='Test feedback' />
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <div className="titleContainer_bottom">
                    <p>Contact Us</p>
                </div>
                <div className="feedbackFormContainer">
                    <div className="infoDiv">
                        <p className="info_label">Info</p>
                        <div className="infoInnerContainer">
                            <div className="infoRow">
                                <MdOutlineMail className="iconClass" />

                                <span className="spaceBefore">apexFoods@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="feedbackForm">
                        <form className="feedbackFRM" onSubmit={handleSubmit}>
                            <label htmlFor="yourName" className="feedbackFromLabel">Your Name:</label><br />
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
                            <div className="submitBtnDiv">
                                <button type="submit" className="feedbackFormSubmitBtn"> Send </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}