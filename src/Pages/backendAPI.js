// backendAPI.js

export const getSessions = () => {
  return [
    {
      id: 1,
      title: 'Learn Spanish',
      description: 'Join our Spanish class and learn to speak like a native!',
      sessionImg: 'https://dummyimage.com/300x200/000/fff',
      creatorProfileImg: 'https://dummyimage.com/200x200/000/fff'
    },
    {
      id: 2,
      title: 'Introduction to HTML & CSS',
      description: 'Learn the basics of HTML and CSS to build your first website!',
      sessionImg: 'https://dummyimage.com/300x200/000/fff',
      creatorProfileImg: 'https://dummyimage.com/200x200/000/fff'
    },
    {
      id: 3,
      title: 'Intro to JavaScript',
      description: 'Get started with programming by learning JavaScript!',
      sessionImg: 'https://dummyimage.com/300x200/000/fff',
      creatorProfileImg: 'https://dummyimage.com/200x200/000/fff'
    }
  ];
};
export default getSessions;
