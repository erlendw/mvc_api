using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TeaShopFaq.Models;

namespace TeaShopFaq.Controllers
{
    public class PostsController : ApiController
    {

        DBA db = new DBA(); //the class that handles the database accsess

        public List<Post> Get()
        {
            Debug.WriteLine("Blir kalt GET");

            return db.GetAllPosts();

        }

        public List<Post> Post(Post post)
        {

            Debug.WriteLine(post.Question);

            db.AddPost(post);
            return db.GetAllPosts();

        }

        public List<Post> Put(Post post)
        {

            

            Debug.WriteLine(post.PostId + " | " + post.Answer);

            db.UpdatePost(post);
            return db.GetAllPosts();

        }


    }
}
