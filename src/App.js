import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import CreateBlog from "./components/create-blog.component";
import EditBlog from "./components/edit-blog.component";
import BlogList from "./components/blog-list.component";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to="/create-blog" className="nav-link">
                  Home
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to="/create-blog" className="nav-link">
                    Create Blog
                  </Link>
                </Nav>
                <Nav>
                  <Link to="/blog-list" className="nav-link">
                    Blog List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="warpper">
                <Switch>
                  <Route exact path="/" component={CreateBlog} />
                  <Route path="/create-blog" component={CreateBlog} />
                  <Route path="/edit-blog/:id" component={EditBlog} />
                  <Route path="/blog-list" component={BlogList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
