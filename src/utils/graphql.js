// utils/graphql.js
import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://wordpress/graphql';
const endpointFromClient = 'http://localhost:8000/graphql';
const credentials = btoa('user:pass');

// Initialize GraphQL Client
const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
});
const clientSide = new GraphQLClient(endpointFromClient, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
});

// Function to fetch all works
export async function getAllWorks() {
  const query = `
    query GetWorks {
      works {
        nodes {
          title
          excerpt
          date
          slug
          workFields {
            description
            cover {
              node {
                mediaItemUrl
              }
            }
            gallery {
              nodes {
                mediaItemUrl
              }
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request(query);
    const projects = data.works.nodes.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log(projects)
    return projects;
  } catch (error) {
    console.error('Error fetching works:', error);
    return { slugs: [] };
  }
}
// Function to fetch all works
export async function getAllSocial() {

    const query = `
    query GetSocialContact {
      socialContacts {
        nodes {
          title
          socials {
            icon
            link
          }
        }
      }
    }

  `;

  try {
    const data = await client.request(query);
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching social:', error);
    return { slugs: [] };
  }
}

// Function to fetch home page content
export async function GetHomePage() {
  const query = `
    query GetHomePage {
      pageBy(uri: "/home") {
        homeContent {
          introduction {
            description
            title
            photo {
              node {
                mediaItemUrl
              }
            }
          }
          achievement {
            description
            link
            title
          }
          profile {
            icon
            name
          }
          rewards {
            icon
            title
            description
          }
        }
      }
    }
  `;

  try {
    const data = await client.request(query);
    return data.pageBy.homeContent;
  } catch (error) {
    console.error('Error fetching home page content:', error);
    return { slugs: [] };
  }
}

// Function to fetch all posts
export async function getAllPosts() {
  const query = `
    query getAllPosts {
      posts {
        nodes {
          title
          id
          content
          date
          databaseId
          comments {
            nodes {
              parentId
              databaseId
              content
              author {
                node {
                  name
                }
              }
              date
              replies {
                nodes {
                  databaseId
                  content
                  date
                  author {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          slug
          excerpt
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request(query);
    const posts = data.posts.nodes.sort((a, b) => new Date(b.date) - new Date(a.date));
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { slugs: [] };
  }
}

// Function to add a comment
export async function addComment(postId, commentData) {
  const query = `
    mutation CreateComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        comment {
          id
          content
          date
          status
          parent {
            node {
              id
              content
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  const variables = {
    input: {
      "approved": "1",
      "clientMutationId": "CreateComment",
      "type": "artifact",
      status: "APPROVE" ,
      commentOn: parseInt(postId),
      content: commentData.content,
      author: commentData.authorName,
      authorEmail: commentData.authorEmail,
      parent: commentData.parent,
      
    }
  };

  try {
    const data = await clientSide.request(query, variables);
    return data.createComment.comment;
  } catch (error) {
    console.error('Error adding comment:', error);
   // throw error;
  }
}

// Function to fetch comments by post ID
export async function GetCommentsByPost(postId) {
  const query = `
    query GetCommentsByPostId($postId: ID!) {
      post(id: $postId, idType: DATABASE_ID) {
        comments {
          nodes {
            id
            parentId
            databaseId
            content
            author {
              node {
                name
              }
            }
            date
            replies {
              nodes {
                id
                databaseId
                content
                date
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    postId: postId
  };

  try {
    const data = await clientSide.request(query, variables);
    return data.post.comments.nodes;
  } catch (error) {
    console.error('Error fetching comments:', error);
    //throw error;
  }
}
// Function to fetch comments by post ID
export async function getSkills() {
  const query = `
  
query getSkills {
  skils(first: 1000){
    nodes {
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      title
      skillsFields {
        stars
      }
      categories {
        nodes {
          parent {
            node {
              name
              slug
            }
          }
          name
          slug
        }
      }
      slug
    }
  }
}

  `;



  try {
    const data = await client.request(query);
 
    let skillsObj={}
     data.skils.nodes.map((s) =>{
      let categ = s.categories.nodes.filter(p=>p.parent == null)[0];
      let subcateg = s.categories.nodes.filter(p=>p.parent != null)[0];


      if( !skillsObj.hasOwnProperty(categ.slug)){
        skillsObj[categ.slug]={
          name:categ.name,
          children:{
          }
        }
      }
    
      if(!skillsObj[categ.slug].children.hasOwnProperty(subcateg.slug)){
      
        
        skillsObj[categ.slug].children[subcateg.slug ]= {
          name:subcateg.name,
          posts:[]
        }
      }
      skillsObj[categ.slug].children[subcateg.slug ].posts.push(s)
      
      
    })
   
    return skillsObj ;
  } catch (error) {
    console.error('Error fetching comments:', error);
    //throw error;
  }
}

// Function to add a comment reply
export async function addCommentReply(parentCommentId, commentData) {
  const query = `
    mutation CreateCommentReply($input: CreateCommentInput!) {
      createComment(input: $input) {
        comment {
          id
          content
          status
          date
          parent {
            node {
              id
              content
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  const variables = {
    input: {
      status:"APPROVE",
      content: commentData.content,
      authorName: commentData.authorName,
      authorEmail: commentData.authorEmail,
      commentOn: commentData.postId,
      parent: commentData.parent,
     
    }
  };

  try {
    const data = await clientSide.request(query, variables);
    return data.createComment.comment;
  } catch (error) {
    console.error("Error adding comment reply:", error);
    //throw error;
  }
}

// Function to update a comment
export async function UpdateComment(commentId, commentData) {
  const query = `
mutation updateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    comment {
      id
      content
    }
  }
}
  `;

  const variables = {
    input: {
    id: commentId.replace("==",""),
    author: commentData.authorName,
    authorEmail: commentData.authorEmail,
    content: commentData.content}
  };

  try {
    const data = await clientSide.request(query, variables);
    console.log("Updated Comment:", data);
    return data.updateComment.comment;
  } catch (error) {
    console.error('Error updating comment:', error);
    //throw error;
  }
}

// Function to update a comment
export async function DeleteComment(commentId) {
  const query = `
mutation deletComment($id: ID!, $forceDelete: Boolean!) {
  deleteComment(input: {id: $id, forceDelete: $forceDelete}) {
    clientMutationId
    deletedId
  }
}
  `;
  const variables = {
    id: commentId.replace("==",""),
    forceDelete:true
  };

  try {
    const data = await clientSide.request(query, variables);
    console.log("Delete Comment:", data);
    return data.updateComment.comment;
  } catch (error) {
    console.error('Error Delete comment:', error);
    //throw error;
  }
}
