import React, { Component } from "react";
import { TextInput, Button } from "react-materialize";


class Search extends Component{
    render(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                        <TextInput
                        onChange={this.props.handleInputChange}
                        value={this.props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Coffee Shop"
                        id="search"
                        />
                    <Button type="submit" waves="light" onClick={this.props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
                    </Button>
                </div>
            </form>
        );
    }
}

export default Search;