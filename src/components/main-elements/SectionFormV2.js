import React, { useState } from 'react';

const SectionFormV2 = () => {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    topic: 'Friends',
    isChecked: true,
    message: ''
  });

  const handleUpdate = (field, { target }) => {
      setFormData({
        ...formData,
        [field]: target.value,
        [field]: target.checked
      });
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    alert(`Form Submission Details:
            ${formData.username}
            ${formData.useremail}
            ${formData.topic}
            ${formData.isChecked}
            ${formData.message}
            `);
  };

  return (
    <section className="section-form">
      <div className="wrapper">
      <div className="row">
        <h2 className="title__secondary">We're happy to hear from you</h2>
      </div>
      <div className="row">
        <form method="post" action="#" className="contact-form" onSubmit={handleSubmitForm}>
          <fieldset className="row">
            <ul>
              <li className="inner-flex">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={formData.username}
                  onChange={e => handleUpdate('username', e)}
                  required
                />
              </li>

              <li className="inner-flex">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  value={formData.useremail}
                  onChange={e => handleUpdate('useremail', e)}
                  required
                />
              </li>
              <li className="inner-flex">
                <label htmlFor="find-us">How did you find us?</label>
                <select
                  name="find-us"
                  id="find-us"
                  value={formData.topic}
                  onChange={e => handleUpdate('topic', e)}
                >
                  <option value="friends">Friends</option>
                  <option value="search">Search Engine</option>
                  <option value="ad">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </li>
              <li className="inner-flex">
                <label htmlFor="news">Newsletter</label>
                <div className="input-container">
                  <input
                    type="checkbox"
                    name="news"
                    id="news"
                    checked={formData.newsLetter}
                    onChange={e => handleUpdate('newsLetter', e)}
                  />
                  Yes Please!
                </div>
              </li>
              <li className="inner-flex">
                <label htmlFor="message">Drop us a line</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={e => handleUpdate('message', e)}
                ></textarea>
              </li>
              <li className="submit__btn--container">
                <input type="submit" value="Send it!"  className="btn__outline"/>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
      </div>
    </section>
  );
};

export default SectionFormV2;
