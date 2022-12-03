
import './Left_sidebar.css';

import plus from '../../img/plus.png';
import inbox from '../../img/inbox.png';
import star from '../../img/star.png';
import watch from '../../img/watch.png';
import send from '../../img/send.png';
import draft from '../../img/draft.png';
import important from '../../img/important.png';
import chait from '../../img/chait.png';
import arrow_down from '../../img/arrow-down.png';
import schedule_send from '../../img/schedule_send.png';
import mail from '../../img/mail.png';
import span from '../../img/span.png';
import trash from '../../img/trash.png';
import arrow_down_category from '../../img/arrow_down-category.png';
import category from '../../img/category.png';
import social from '../../img/social.png';
import update from '../../img/update.png';
import fornus from '../../img/fornus.png';
import tag from '../../img/tag.png';
import setting from '../../img/setting.png';
import plus_simple from '../../img/plus-simple.png';
import meet_title from '../../img/meet-title.png';
import meating from '../../img/meating.png';
import join_meating from '../../img/join-meating.png';
import hangout from '../../img/hangout.png';
import prof from '../../img/prof.jpg';
import arrow_down2 from '../../img/arrow-down2.png';
import contacts from '../../img/contacts.png';

import { useState } from 'react';

function Left_sidebar(){
        const [show, setShow] = useState(true);
        const [show_cat,setShow_cat] = useState(true);

        function toggle_more(){
            (show)?setShow(false):setShow(true);
        }
        function show_catrgory(){
            (show_cat)?setShow_cat(false):setShow_cat(true);
        }
    return(
        <div className="left-sidebar-box fixed " id="left-sidebar-box">
        <div className="plus-icon df">
            <div><a href="#"><img src={plus} alt=""/></a></div>
            <div className="plus-icon-text"><span>Compose</span></div>
        </div>
        <div className="left-sidebar-top border-bottom all-icon-style all-icon-size left-sidebar-icon">
            <a href="#"><img src={inbox} alt="" /> <span>Inbox </span><span className="count">1</span></a>
            <a href="#"><img src={star} alt="" /><span>Starred</span></a>
            <a href="#"><img src={watch} alt="" /><span>Snoozed</span></a>
            <a href="#"><img src={send} alt="" /><span>Sent</span></a>
            <a href="#"><img src={draft} alt="" /><span>Drafts</span> <span className="count">6</span></a>
            <a href="#" id="more" onClick={toggle_more} ><img src={arrow_down} alt="" /><span>More</span></a>
               <div id="more-box" className={`${show?'hidden':' '}`}>
                    <a href="#"><img src={important} alt="" /><span>Important</span></a>
                    <a href="#"><img src={chait} alt="" /><span>Chats</span></a>
                    <a href="#"><img src={schedule_send} alt="" /><span>Scheduled</span></a>
                    <a href="#"><img src={mail} alt="" /><span>All Mail</span></a>
                    <a href="#"><img src={span} alt="" /><span>Spam </span><span className="count">9</span></a>
                    <a href="#"><img src={trash} alt="" /><span>Trash</span></a>
                    <a href="#" id="category" onClick={show_catrgory} ><img className="category-img-1" src={arrow_down_category} alt="" />
                        <img className="category-img-2" src={category} alt="" /><span>Category</span></a>
                    <div id="category-box" className={`${show_cat?'hidden':''}`}>
                        <a href="#" ><img src={social} alt="" /><span>Social</span> <span className="count">10</span></a>
                        <a href="#"><img src={update} alt="" /><span>Updates</span> <span className="count">5</span></a>
                        <a href="#"><img src={fornus} alt="" /><span>Forums</span></a>
                        <a href="#"><img src={tag} alt="" /><span>Promotions</span> <span className="count">6</span></a>
                    </div>
                    <a href="#"><img src={setting} alt="" /><span>Manage labels</span></a>
                    <a href="#"><img src={plus_simple} alt="" /><span>Create new label</span></a>
               </div>
        </div>

        <div className="left-sidebar-top_2">
            <div className="left-sidebar-middle border-bottom all-icon-style all-icon-size left-sidebar-icon">
                <a href="#" className="no-hover"><img src={meet_title} alt="" /></a>
                <a href="#"><img src={meating} alt="" /><span>New meeting</span></a>
                <a href="#"><img src={join_meating} alt="" /><span>Join a meeting</span></a>
            </div>
            
            <div className="left-sidebar-bottom border-bottom all-icon-style all-icon-size left-sidebar-icon">
                <a href="#" className="no-hover"><img src={hangout} alt="" /></a>
               <div className="df"> 
                    <a href="#" className="profile-img no-hover">
                            <img src={prof} alt="" /><span>amit maurya</span> 
                            <img src={arrow_down2} alt="" /> 
                            <img src={plus_simple} alt="" />
                    </a>
                </div>
                
                <div className="hangout-box">
                    <div>
                        <p> No hangout contacts</p>
                        <a href="#" className="no-hover">Find someone</a>
                    </div>
                  
                </div>
            </div> 
          

        </div>
        <div className="left-sidebar-footer df all-icon-style all-icon-size">
            <a href="#"><img src={contacts} alt="" /></a>
            <a href="#"><img src= {hangout} alt="" /></a>
        </div>
    </div>
    );
}

export default Left_sidebar;