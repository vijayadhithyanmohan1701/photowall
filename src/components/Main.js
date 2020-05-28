import React, {Component} from 'react';
import Title from './Title';
import Tabs from './UI/Tabs';
import PhotoWall from './PhotoWall';
import ArchiveWall from './Archives/ArchiveWall';
import AddPhoto from './AddPhotos/AddPhoto';
import {Route} from 'react-router-dom';

class Main extends Component{
  constructor(){
    super()
    this.state = {
      posts :[{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
        }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }],
      archivedPosts :[],
      screen: 'photos'
    }
    this.removePost = this.removePost.bind(this)
    this.navigate = this.navigate.bind(this)
    this.addPhoto = this.addPhoto.bind(this)
  }
    removePost(postRemoved){
      console.log(postRemoved.description);
      this.state.archivedPosts.push(postRemoved)
      this.setState((state) => ({
        posts: state.posts.filter(post => post !== postRemoved),
        archivedPosts: state.archivedPosts
      }))
      console.log(this.state.archivedPosts);
    }
    navigate(setScreen){
      this.setState({
        screen: setScreen
      })
    }
    addPhoto(postAdded){
      this.setState((state) => ({
        posts: state.posts.concat([postAdded])
      }))
    }
    render(){
      return(
        <div>
          <Title title = {'Photowall'} />
          <Route exact path="/" render = {() => (
            <div>
              <Tabs onNavigate = {this.navigate} currentScreen = {this.state.screen}/>
            {
              this.state.screen === 'photos' && (
                <PhotoWall posts= {this.state.posts} onRemovePhoto = {this.removePost} onNavigate = {this.navigate} />
              )
            }
            {
              this.state.screen === 'archives' && (
                <ArchiveWall archivedPosts= {this.state.archivedPosts} />
              )
            }
          </div>
          )}>
          </Route>
          <Route path="/AddPhoto" render = {({history}) => (
              <div>
                <AddPhoto onAddPhoto = {(addedPost) => {
                  this.addPhoto(addedPost)
                  history.push('/')
                }} />
              </div>
          )}></Route>
        </div>
      );
    }
}
export default Main;