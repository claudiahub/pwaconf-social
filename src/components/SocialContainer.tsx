import React, { useState, useEffect } from 'react';
import SocialPost from './SocialPost';
import Post from '../interfaces/Post';

interface SocialContainerProps {
  trackedTag: string[];
}

export default function SocialContainer (props: SocialContainerProps) {
  const {trackedTag} = props;
  const [hasUiUpdates, setHasUiUpdates] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    trackedTag.map(tag => {
        return tag;
        // Get social post from network https://api.twitter.com/1.1/search/tweets.json
    });
    
    setPosts([
      {
          id: "abc123",
          text: "test post",
          user : {
            screen_name: "test user",
            profile_image_url_https : ""
          }
      }
  ]);
  }, [trackedTag]);

  // TODO Polling to check for updates on social
  if(!hasUiUpdates) { 
    setHasUiUpdates(true);
  }

  const renderedPost = posts ? posts.map((post: Post) => (
    <SocialPost post={post} />
  )) : [];

  return (
    <div>
       <div className="posts-list">
        {renderedPost}
      </div>
    </div>
  );
}
