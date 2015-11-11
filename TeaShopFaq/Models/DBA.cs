﻿using System;
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
                    IsAnswered = p.IsAnswered
                }).ToList();

                return AllPosts;
            }
        }

        public void AddPost(Post NewPost)
        {


            try { 

            using (var db = new FaqContext())
            {
                var NewPostRow = new Posts();
                NewPostRow.PostId = NewPost.PostId;
                NewPostRow.Question = NewPost.Question;
                NewPostRow.Answer = NewPost.Answer;
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

        
        }
    }