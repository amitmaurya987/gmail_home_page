import './Right_sidebar.css';
import calender from '../../img/calendar.png';
import bulb from '../../img/bulb.png';
import right_tik from '../../img/right-tik.png';
import contacts from '../../img/contacts.png';
import plus_simple from '../../img/plus-simple.png';

function Right_sidebar(props){
    console.log(props.toggle);
    return(
        <div className={`right-sidebar-box all-icon-style fixed all-icon-size ${props.toggle?'right_sidebar_box':''}`} id="right-sidebar">
        <div className="right-sidebar-icons df">
             <a href=""><img src={calender} alt=""/></a>
             <a href=""><img src={bulb} alt=""/></a>
             <a href=""><img src={right_tik} alt=""/></a>
             <a href=""><img src={contacts} alt=""/></a>
             <div className="right-sidebar-border"></div>
             <a href=""><img src={plus_simple} alt=""/></a>
        </div>
    </div>
    );
}

export default Right_sidebar;