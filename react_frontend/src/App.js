import React, {Component} from "react";
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'Your shortened link will appear here',
            shortened_url: 'Full url will appear here',
            inputUrl: '',
            inputShortCode: '',
        };

        this.shortenUrl = this.shortenUrl.bind(this);
        this.unshortenCode = this.unshortenCode.bind(this);
        this.handleInputUrl = this.handleInputUrl.bind(this);
        this.handleInputShortCode = this.handleInputShortCode.bind(this);

    }

    handleInputUrl(event) {
        this.setState({
            inputUrl: event.target.value
        });
    }

    handleInputShortCode(event) {

        this.setState({
            inputShortCode: event.target.value
        });
    }

    shortenUrl(event) {

        event.preventDefault();

        fetch('http://localhost:3000/shortcodes', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: this.state.inputUrl
                })
            }).then(function(response) {
                return response.text();
            })
            .then(myJson => this.setState({
                url: myJson
            }))
            .catch(function(error) {
                console.log(error);
            })



    }

    unshortenCode(event) {
        event.preventDefault();
        fetch('http://localhost:3000/shortcodes/' + event.target.elements["app__shortcode-input"].value, )
            .then(function(response) {
                return response.text();
            })
            .then(myJson => this.setState({
                shortened_url: myJson
            }))
            .catch(function(error) {
                console.log(error);
            })
    }

    render() {
      return (
        <div className="app">
          <h1>Shortener</h1>
          <div className="app__function">
            <form onSubmit={this.shortenUrl}>
              <input
                className="app__function-input"
                id="app__url-input"
                type="text"
                placeholder="Enter URL to shorten"
                value = {this.state.inputUrl}
                onChange = {this.handleInputUrl}
              />
              <input type="submit" value="Shorten" id="app__url-submit" />
              <div className="app__function-result">
                <code id="app__shortcode-result">
                  {this.state.url}
                </code>
              </div>
            </form>
          </div>

          <div className="app__function">
            <form onSubmit={this.unshortenCode}>
              <input
                className="app__function-input"
                id="app__shortcode-input"
                type="text"
                placeholder="Enter shortcode to expand into full URL"
                value = {this.state.inputShortCode}
                onChange = {this.handleInputShortCode}
              />
              <input type="submit" value="Unshorten" id="app__shortcode-submit" />
              <div className="app__function-result">
                <code id="app__url-result">
                  {this.state.shortened_url}
                </code>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

export default App;
