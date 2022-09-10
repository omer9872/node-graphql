# node-graphql
Nodejs-Graphql integration..


Open Graphiql on port 4000 and run following Queries/Mutations:

```
// Fetch Authors...
{
  getAuthors {
    _id
    createdAt
    updatedAt
    email
    username
    likes
    auth {
      lastLogin
      password
    }
  } 
}
```

```
// Fetch Author...
{
  getAuthor(id:"_id") {
    createdAt
    updatedAt
    email
    username
    likes
    auth {
      lastLogin
      password
    }
  } 
}
```

```
// Create Author...
mutation {
  createAuthor(input:{
    email:"omer@gmail.com"
    username:"omer9872"
    auth:{
      password:"SomeSecret"
    }
  })
}
```

```
// Fetch Posts...
{
  getPosts {
    _id
    title
    content
  } 
}
```

```
// Fetch Post...
{
  getPost(id:"_id") {
    title
    content
    createdBy
  } 
}
```

```
// Create Post...
mutation {
  createPost(input:{
    title:"Lorem Ipsum"
    content:"Lorem ipsum dolor sit amet"
   	createdBy:"_id"
  })
}
```



