import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="Home-body">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card id="homeMainCard">
              <Card.Body>
                <Card.Title id="homeMainTitle">
                  <h3>Why are we here?</h3>
                </Card.Title>
                <Card.Text>
                  Sprout is a platform for developers to connect and grow together. Stay on top of what is fresh and trending in tech so that you can grow your business, or even just yourself.
                </Card.Text>
                <i className="fas fa-seedling" id="mainCardIcon"></i>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="subCardRow">
          <Col md={{ span: 3 }}>
            <Card id="homeSubCard">
              <Card.Body>
                <Card.Title id="homeSubTitle">Trending</Card.Title>
                <Card.Text>
                  Here you can check out the libraries and APIs that are most recommended by other users. With so many new technologies emerging so quickly, it is easy to feel lost and not know what you should focus on learning next. The trending section will help you narrow your focus so that you don't get lost along the path of discovery.
                    </Card.Text>
                    <Card.Link href="/trending">
                <i className="fas fa-fire hvr-grow" aria-hidden="true" id="subCardI1"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{ span: 3 }}>
            <Card id="homeSubCard">
              <Card.Body>
                <Card.Title id="homeSubTitle">Collaborate</Card.Title>
                <Card.Text>
                  Found something that you'd like to share? Made a tool that has made your life easier? Spread the love to the rest of the Sprout community on our Collaborate page. Libraries and APIs will update our Trending page. Projects will be submitted to the Sprout team for review. If your project gels with our vibe, we will add it to the Projects page.
                </Card.Text>
                <Card.Link href="/collaborate">
                  <i className="fas fa-book-open hvr-grow" aria-hidden="true" id="subCardI2" />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{ span: 3 }}>
            <Card id="homeSubCard">
              <Card.Body>
                <Card.Title id="homeSubTitle">Projects</Card.Title>
                <Card.Text>
                  Looking to test your mettle? Check out our Projects page for starter ideas. Challenge yourself to complete challenges suggested by other users and hone your own skills. If you have a project that you think would make great practice for other users, please submit it to the Sprout team on the Collaborate page.
                </Card.Text>
                <Card.Link href="/projects">
                  <i className="fas fa-project-diagram hvr-grow" aria-hidden="true" id="subCardI3"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;  