import React, { useState, useEffect } from "react";
import Nav from "../components/Nav_nothome";
import Footer from "../components/Footer";
import "./Contact.css";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Add state for success popup

  useEffect(() => {
    // Update document title when component mounts
    document.title = "InnerCalm - Contact Us";
    // Clean up document title when component unmounts
    return () => {
      document.title = "InnerCalm";
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/contact/create-contact", {
        name,
        email,
        phone,
        subject,
        message,
      });
      if (data?.success) {
        toast.success(" send successfully");
        // handleCloseForm();
        // FetchPosts();
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        //  setShowSuccessPopup(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in input: form");
    }
  };

  return (
    <>
      <Nav />
      <div className="contactpage">
        {showSuccessPopup && (
          <div className="overlay">
            <div className="success_popup">
              <p>Your form has been successfully submitted! ✅</p>
              <button onClick={() => setShowSuccessPopup(false)}>Close</button>
            </div>
          </div>
        )}
        <section className="contt">
          <div className="wrapper">
            <div className="title">
              <h1>CONTACT US</h1>
            </div>
            <div className="contact-form">
              <div className="input-fields">
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="msg">
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="btnsend" onClick={handleSubmit}>
                  send
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {/* Conditionally render success popup */}
    </>
  );
};

export default Contact;
