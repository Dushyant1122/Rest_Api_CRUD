import { v4 as uuidv4 } from "uuid";
let posts = [];



export const getPosts = (req, res) => {
  res.send(posts);
};

export const getPost = (req, res) => {
  const { id } = req.params;
  const foundPost = posts.find((post) => post.id === id);

  res.send(foundPost);
};

export const createPost = (req, res) => {
  const post = req.body;
  posts.push({ ...post, id: uuidv4() });
  res.send(`post with the name ${post.firstName} added`);
};

export const deletePost = (req, res) => {
  const { id } = req.params;
  posts = posts.filter((post) => post.id != id);
  res.send(`post With the id ${id} has been deleted`);
};

export const updatePost = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, email } = req.body;
  const post = posts.find((post) => post.id === id);

  if (firstName) post.firstName = firstName;
  if (lastName) post.lastName = lastName;
  if (age) post.age = age;
  if (email) post.email = email;

  res.send(`Post with the id ${id} has been updated`);
};
