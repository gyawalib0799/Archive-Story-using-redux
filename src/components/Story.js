import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions';
import { archivedActions } from '../actions/archivedActions';
import { Button, Container, Row, Col, Badge } from 'reactstrap';

class Story extends Component {
    state ={
    input1:'',    
  } 

  componentDidUpdate(){
    console.log(this.props.archive_posts);
  }

    onClick = e => {
      e.preventDefault();
      const searchtext=this.state.input1;
      console.log(searchtext);
      this.props.fetchPosts(searchtext);
   }      

   archiveHandler = (post) => {
     console.log(post);
     this.props.archivedActions(post);
     this.props.deletePost(post)
   }

   onChange =e =>{    
     this.setState({
       input1:e.target.value,
     })     
   }
   
  render() {
    
      const postItems = this.props.posts.map((post, index) =>(  //this.props because we mapped state to props
          <div 
          key={post.objectID}> 
          AUTHOR: &nbsp;{post.author}<br />
          TITLE:&nbsp;{post.title}<br />          
          URL:&nbsp;<a href={post.url}>Click Here for link</a><br />          
          <Button color="primary" size="sm" onClick={(e) => this.archiveHandler(post)} >Archive</Button>
          <hr />
          </div>         
      ));

      console.log(this.props.archive_posts.archive_posts);

      const archiveItems = this.props.archive_posts.archive_posts.length > 0 ? this.props.archive_posts.archive_posts.map((post, index) =>(  //this.props because we mapped state to props
        <div 
        key={post.objectID}>
        AUTHOR: &nbsp;{post.author}<br />
        TITLE:&nbsp;{post.title}<br />          
        URL:&nbsp;<a href={post.url}>Click Here for link</a><br />
        <hr />
        </div>
    )) : null;
      
    
    return (
      <div>       
        <form onSubmit={this.onClick}> 
        Enter your query here: &nbsp; 
        <input onChange={this.onChange} type="text" name="search" placeholder="Text">
        </input>
        <Button size="sm">Submit</Button>
       <hr />   
       <Container>
      <Row>
      
        <Col>  
        <Badge color="success" size="sm">  
        Fetched Story:
        </Badge>  
        {postItems}
        </Col> 
        <Col>
        <Badge color="success" size="sm">
        Archived Story:
        </Badge>
         {archiveItems}        
        </Col>    
      </Row>
      </Container>
      </form>  
      </div>
    )
  }
}

const mapStateToProps = state=>({ 
    posts: state.posts.items,
    archive_posts: state.archived_posts  
})

export default connect(mapStateToProps,  {fetchPosts, archivedActions, deletePost} )(Story);