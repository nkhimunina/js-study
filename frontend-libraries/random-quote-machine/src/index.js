import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const QUOTES = [
  {
    text: "Java is to JavaScript what Car is to Carpet.",
    author: "Chris Heilmann"
  },
  {
    text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian W. Kernighan"
  },
  {
    text: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    author: "Anonymous"
  },
  {
    text: "Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots. So far the Universe is winning.",
    author: "Rick Cook"
  },
  {
    text: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    author: "C.A.R. Hoare"
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    author: "Edsger Dijkstra"
  },
  {
    text: "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V Berard"
  },
  {
    text: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
    author: "Louis Srygley"
  },
  {
    text: "Most of you are familiar with the virtues of a programmer.  There are three, of course: laziness, impatience, and hubris.",
    author: "Larry Wall"
  },
  {
    text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates"
  },
  {
    text: "Rules of Optimization: Rule 1: Don't do it. Rule 2 (for experts only): Don't do it yet.",
    author: "Michael A. Jackson"
  },
  {
    text: "Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.",
    author: "Anonymous"
  },
  {
    text: "Everyday life is like programming, I guess. If you love something you can put beauty into it.",
    author: "Donald Knuth"
  },
  {
    text: "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
    author: "Seymour Cray"
  },
  {
    text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "John Woods"
  },
  {
    text: "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    author: "John Romero"
  },
  {
    text: "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
    author: "Eric Raymond"
  },
  {
    text: "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.",
    author: "Bjarne Stroustrup"
  },
  {
    text: "A good programmer is someone who always looks both ways before crossing a one-way street.",
    author: "Doug Linder"
  },
  {
    text: "The best programmers are not marginally better than merely good ones.  They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.",
    author: "Randall E. Stross"
  },
  {
    text: "When debugging, novices insert corrective code; experts remove defective code.",
    author: "Richard Pattis"
  },
  {
    text: "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck"
  }
]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      twitterLink: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let rnd = Math.floor(Math.random() * QUOTES.length);
    let currentIndex = this.state.index === rnd ? (rnd + 1) % QUOTES.length : rnd;
    this.setState({
      index: currentIndex,
      twitterLink: "https://twitter.com/intent/tweet?hashtags=quotes&amp;text=" + encodeURIComponent(QUOTES[currentIndex].text + " --" + QUOTES[currentIndex].author)
    })
  }

  render() {
    return (
      <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div id="quote-box" class="card w-50 border border-primary">

          <div class="card-header d-flex justify-content-between">
            <span class="d-flex align-self-center">Quote</span>

            <span class="d-flex">
              <a 
                id="tweet-quote" 
                title="Share on Twitter" 
                target="_blank" 
                rel="noreferrer" 
                href={this.state.twitterLink} 
                class="btn btn-link"
               >
                  <i class="fa-brands fa-twitter fa-lg"></i>
              </a>
            </span>
          </div>

          <div class="card-body">
            <blockquote class="blockquote mb-0 text-center">
              <p id="text">
                <i class="fas fa-quote-left fa-lg text-primary me-2"></i>
                {QUOTES[this.state.index].text}
                <i class="fas fa-quote-right fa-lg text-primary ms-2"></i>
              </p>
              <footer id="author" class="blockquote-footer text-end me-4">{QUOTES[this.state.index].author}</footer>
            </blockquote>
          </div>

          <div class="card-footer d-flex justify-content-center">
            <button 
              id="new-quote" 
              type="button" 
              class="btn btn-primary" 
              onClick={this.handleClick}
            >
              New Quote
            </button>
          </div>

        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));