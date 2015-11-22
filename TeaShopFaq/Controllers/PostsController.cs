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
            return db.GetAllPosts();
        }

        public Post Get(int id)
        {
            return null;
        }

        public void Post(Post post)
        {
            db.AddPost(post);
        }

        public void Put(Post post)
        {
            db.UpdatePost(post);
        }




    }
}
