import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: "url('/img/dentistsstuff.jpeg')",
            backgroundPosition: '0, 20px',
          }}
        >
          <h2
            className="has-text-weight-bold display-4"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Contact
          </h2>
        </div>
        <section className="section">
          <div className="container">
            <div class="row justify-content-center">
            <div className="col-12 col-md-8">
            <div className="content">
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor={'name'}>
                    Your name
                  </label>
                    <input
                      className="form-control"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor={'email'}>
                    Email
                  </label>

                    <input
                      className="form-control"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />

                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor={'message'}>
                    Message
                  </label>

                    <textarea
                      className="form-control"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />

                </div>
                <p className="small">MPDSS are the data controllers of any personal data you provide to us on this form. For further information on our uses of your personal data, please see the MPDSS Privacy Policy.</p>
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
        </section>
      </Layout>
    )
  }
}
