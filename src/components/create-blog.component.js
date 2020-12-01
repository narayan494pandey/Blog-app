import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



export default class CreateBlog extends Component {
    constructor(props) {
        super(props)

        //setting up function
        this.onChangeTitleName = this.onChangeTitleName.bind(this);
        this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
        this.onChangeBlog = this.onChangeBlog.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        //setting up state
        this.state = {
            title: '',
            author: '',
            blog: ''
        }
    }
    onChangeTitleName(e) {
        this.setState({ title: e.target.value })
    }
    onChangeAuthorName(e) {
        this.setState({ author: e.target.value })
    }
    onChangeBlog(e) {
        this.setState({ blog: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const blogObject = {
            title: this.state.title,
            author: this.state.author,
            blog: this.state.blog
        };
        axios.post('http://localhost:4000/blogs/create-blog', blogObject)
            .then(res => console.log(res.data));
        this.setState({ title: '', author: '', blog: '' });

    }



    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitleName} />
                    </Form.Group>
                    <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" value={this.state.author} onChange={this.onChangeAuthorName} />
                    </Form.Group>
                    <Form.Group controlId="Blog">
                        <Form.Label>Write Blog</Form.Label>
                        <Form.Control as="textarea" rows="20" cols="30" value={this.state.blog} onChange={this.onChangeBlog} />
                    </Form.Group>
                    <Button variant="danger" size="lg" block="block" type="submit">
                        Create Blog
                    </Button>
                </Form>
            </div>
        )
    }

}