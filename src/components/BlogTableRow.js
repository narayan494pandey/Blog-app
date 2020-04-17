import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class BlogTableRow extends Component {
    constructor(props) {
        super(props)
        this.deleteBlog = this.deleteBlog.bind(this);
    }
    deleteBlog() {
        axios.delete('http://localhost:4000/blogs/delete-blog/' + this.props.obj._id)
            .then((res) => {
                console.log('Blog successfull deleted');
            })
            .catch((error) => {
                console(error);
            })
    }


    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.author}</td>
                <td>{this.props.obj.blog}</td>
                <td>
                    <div className="link__button">
                        <Link className="edit-link" to={"/edit-blog/" + this.props.obj._id}>Edit</Link>

                        <Button size="sm" variant="danger" onClick={this.deleteBlog}>Delete</Button>
                    </div>
                </td>
            </tr>
        )
    }
}
