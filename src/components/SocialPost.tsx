import React from 'react';
import Post from '../interfaces/Post';

interface Props {
   post: Post;
}

const SocialPost = (props: Props) => {
    const {post} = props;
    return (
        <div className="card hover " key={post.id}>
              <img
                className="card-image"
                src={post.user.profile_image_url_https}
                alt={post.user.screen_name + ' image'}
              />
              <p>{post.text}</p>
              <a href={`https://www.twitter.com/${post.user.screen_name}`}>
                <p>by: {post.user.screen_name}</p>
              </a>
            </div>
    )
}

export default SocialPost;
