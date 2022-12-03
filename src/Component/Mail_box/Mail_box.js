
import './Mail_box.css';
import star from '../../img/star.png';
import achi from '../../img/achi.png';
import trash from '../../img/trash.png';
import mail from '../../img/mail.png';
import watch from '../../img/watch.png';


function  Mail_box(props){
return(
        
     <div className="mail border-bottom" key={props.index} >
     <div className="mail-box df">
            
         <div className="mail-box-left df">
             <div className="check-box  ">
                     <input type="checkbox" name="select" id="" />
             </div> 
             <div className="all-icon-style df all-icon-size">
                 <a href=""><img src={star} alt="" /></a>
                 <div className="padding-8">{props.data.title}</div>
             </div>
         </div>
         <div className="mail-box-right df padding-8">
                 <div className="mail-box-heading"><h4>{props.data.heading}-</h4></div>
                 <div className="mail-box-desc"><p>{props.data.desc}</p></div>
         </div>
         <div className="mail-box-time">
             <div>{props.data.time}</div>
         </div>
         <div className="mail-box-menu df all-icon-style df all-icon-size">
             <a href=""><img src={achi} alt="" /></a>
             <a href=""><img src={trash} alt="" /></a>
             <a href=""><img src={mail} alt="" /></a>
             <a href=""><img src={watch} alt="" /></a>
         </div>
     </div>
     <div className="attachment df ">
                            <a href="" className="df">
                                <div><img src="asset/images/image.png" alt=""/></div>
                                <div>amit.jpg</div>
                            </a>
                            <a href="" className="count-attech">
                                +1
                            </a>

    </div>
</div>
    
 );
    
}
export default Mail_box;