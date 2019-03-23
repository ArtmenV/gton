import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> 
            <CommentDetail 
                author="Sam"
                timeAgo="Today at 4:45"
                content="Nice blog post"
                avatar="https://fappeningsauce.com/wp-content/uploads/2017/04/MilaKunis_626_1.jpg"
            />   
            </ApprovalCard>
           
           <ApprovalCard>
            <CommentDetail 
                author="Alex"
                timeAgo="Today at 2:45"
                content="I like the subject"
                avatar="https://c.wallhere.com/photos/c4/b2/brunette_brown_eyed_girl_face-1014735.jpg!d"
            /> 
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail 
                author="Jane"
                timeAgo="Today at 3:45"
                content="I like the writing"
                avatar="https://avatars.mds.yandex.net/get-zen_doc/1245815/pub_5b010fb31aa80c57154388ac_5b011a891410c3e49332e888/scale_1200"
            />  
            </ApprovalCard>   
        </div>
    
     );
};
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);
  