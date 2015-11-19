using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeaShopFaq.Models
{
    public class DBA
    {
        public List<Post> GetAllPosts()
        {
            using (var db = new FaqContext())
            {
                var AllPosts = db.Posts.ToList().Select(p => new Post
                {
                    PostId = p.PostId,
                    Question = p.Question,
                    Answer = p.Answer,
                    TimeStamp = p.TimeStamp,
                    UserEmail = p.UserEmail,
                    IsAnswered = p.IsAnswered,
                    Category = p.Category
                }).ToList();

                return AllPosts;
            }
        }

        public void AddPost(Post NewPost)
        {
            Debug.WriteLine(NewPost.Category);

            try { 

            using (var db = new FaqContext())
            {
                var NewPostRow = new Posts();
                NewPostRow.PostId = NewPost.PostId;
                NewPostRow.Question = NewPost.Question;
                NewPostRow.Answer = NewPost.Answer;
                NewPostRow.Category = NewPost.Category;
                NewPostRow.UserEmail = NewPost.UserEmail;
                NewPostRow.TimeStamp = DateTime.Now.ToString();
                NewPostRow.IsAnswered = false;

                db.Posts.Add(NewPostRow);
                db.SaveChanges();

                }

            }

            catch(Exception e) {

                Debug.WriteLine("klikker her");
                Debug.WriteLine(e.ToString());

            }
        }

        public void UpdatePost(Post InnPost)
        { 
            using (var db = new FaqContext())
            {
                Posts post = (from p in db.Posts
                              where p.PostId == InnPost.PostId
                              select p).First();
                post.Answer = InnPost.Answer;
                post.TimeStamp = DateTime.Now.ToString();
                post.IsAnswered = true;
                db.SaveChanges();
            }

        }

    }


    }
