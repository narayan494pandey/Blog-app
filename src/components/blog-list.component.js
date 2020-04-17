import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import BlogTableRow from './BlogTableRow';
import axios from 'axios';


export default class BlogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/blogs/')
            .then(res => {
                this.setState({
                    blogs: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.blogs.map((res, i) => {
            return <BlogTableRow obj={res} key={i} />
        })
    }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Blog</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>

            </div>
        )
    }
}
