export default interface Post {
    id: string;
    user: User;
    text: string;
}

interface User {
    screen_name: string;
    profile_image_url_https: string;
}