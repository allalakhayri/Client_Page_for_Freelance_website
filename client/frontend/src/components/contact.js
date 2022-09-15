import  "../App.css"
import React from 'react'

export const Contact = ()=>{
    return (
        <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact us</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>We're a big team, powered by  unique<br/> minds so feel free to contact us .</p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user" />
                  <div className="info">
                    <div className="head">Platfrom name</div>
                    <div className="sub-title">TuniJob</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt" />
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Manouba , Tunis</div>
                  </div>
                </div>
                <br/>
                <div className="row">
                  <i className="fas fa-envelope" />
                  <div className="info">
                    <div className="head">Emails</div>
                    <div className="sub-title">mohamedkhayri.allala@ensi-uma.tn</div>
                    <div className="sub-title">mohamedhosni.selmi@ensi-uma.tn</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message Us</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea cols={30} rows={10} placeholder="Message.." required defaultValue={""} />
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}