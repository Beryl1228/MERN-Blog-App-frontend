import classes from './featuredBlogs.module.css'
import React from 'react'
import cancúnImg from '../../assets/cancún.jpg'
import assateagueImg from '../../assets/assateague.jpeg'
import oceancityImg from '../../assets/oceancity.jpeg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

const FeaturedBlogs = () => {
  return (
    <div  className={classes.container}> 
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>
        <div  className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={cancúnImg} alt='cancún' />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                 <span className={classes.category}>Nature</span>
                 <div className={classes.metadata}>
                  <MdOutlinePreview /> 56 views
                 </div>
                 <div className={classes.metadata}>
                 <AiFillLike />  46 likes
                </div>
               </div>
               <h4>Blog 1 Cancún</h4>
               <p className={classes.desc}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
               labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               </p>
               <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Emily </span>
                  <span><span>Created:</span> 27-08-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
          <div className={classes.secondaryBlog}>
              <img src={assateagueImg} alt="assateague" />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 2 Assateague</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, hic inventore? Atque?
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Rory</span>
                  <span><span>Created:</span> 16-07-2023</span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={oceancityImg} alt="oceancity" />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 3 Oceancity</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, hic inventore? Atque?
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Paris</span>
                  <span><span>Created:</span> 27-05-2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs