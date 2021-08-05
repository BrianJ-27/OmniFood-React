import React, { Component } from 'react';

class SectionForm extends Component {
  
 
  state = { 
    username:'',
    useremail: '',
    topic: 'Friends',
    isChecked: true,
    message: '',
   }

   handleNameChange = event => {
    this.setState ({
      username: event.target.value
    })
  }

  handleEmailChange = event => {
    this.setState ({
        useremail: event.target.value
    })  
  }

  handleTopicChange = event => {
    this.setState ({
    topic: event.target.value
  })
  }

  handleCheckedChange = event => {
    const isChecked = event.target
    let newValue = isChecked.type ==='checkbox' ? isChecked.checked : false
    
    this.setState ({
      isChecked: newValue
    })
  }

  handleMessageChange = event => {
    this.setState ({
      message: event.target.value
    })
  }

  handleSubmitForm = (event) => {
    alert(`Form Submission Details:
            ${this.state.username} 
            ${this.state.useremail}
            ${this.state.topic}
            ${this.state.isChecked}
            ${this.state.message}
            `
          );
    event.preventDefault();
  }

  

  render() { 
    return (
      <section className="section-form">
        <div className="row">
          <h2>We're happy to hear from you</h2>
        </div>
        <div className="row">
          <form method="post" action="#" className="contact-form" onSubmit={this.handleSubmitForm}>
            <fieldset className="row">
              <ul>
                <li className="inner-flex">
                  <label htmlFor="name">Name</label>
                  <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Your Name" 
                  value={this.state.username}
                  onChange={this.handleNameChange} 
                  required/>
                </li>
  
                <li className="inner-flex">
                  <label htmlFor="email">Email</label>
                  <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Your email" 
                  value={this.state.useremail}
                  onChange={this.handleEmailChange}
                  required/>
                </li>
                <li className="inner-flex">
                <label htmlFor="find-us">How did you find us?</label>
                  <select 
                  name="find-us" 
                  id="find-us" 
                  value={this.state.topic} 
                  onChange={this.handleTopicChange}
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
                    checked={this.state.newsLetter}
                    onChange={this.handleCheckedChange}
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
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                  >
                  </textarea>
                </li>
                <li className="submit-btn-container">
                  <input type="submit" value="Send it!" />
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}
 
export default SectionForm;

