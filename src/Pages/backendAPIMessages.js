const users = [
  { id: 1, username: "John", image: "https://via.placeholder.com/150" },
  { id: 2, username: "Jane", image: "https://via.placeholder.com/150" },
  { id: 3, username: "Bob", image: "https://via.placeholder.com/150" },
];

const mockBackendData = {
  getUsers: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 1000);
    }),
};

export default mockBackendData;
