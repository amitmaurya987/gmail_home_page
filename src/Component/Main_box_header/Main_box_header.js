
import './Main_box_header.css';
import arrow_down2 from '../../img/arrow-down2.png';
import refresh from '../../img/refresh.png';
import more from '../../img/more.png';
import arr from '../../img/arr.png';
import arrow_do from '../../img/arrow-do.png';
import join_meating from '../../img/join-meating.png';

function Main_box_header(props){
    return(
        <>
                <div className={`main-box-header df fixed border-bottom ${props.toggle?'main_box_header':''}`}>
                <div className="main-box-header-left df"> 
                    <div className="check-box  df">
                        <div><input type="checkbox" name="select" id="" /></div> 
                            <a href=""><img src={arrow_down2} alt="" /></a>
                        </div> 
                        <div className="refresh all-icon-style df all-icon-size">
                            <a href=""><img src={refresh} alt="" /></a>
                            <a href=""><img src={more} alt="" /></a>
                        </div>
                    </div> 
                <div className="main-box-header-right">
                    <div className="df headerRight v-align-center mainBoxHeader all-icon-size">
                        <div>
                            <p>1-8 of 8</p>
                        </div>
                        <div><a href=""><img src={arr} alt="" /></a></div>
                        <div><a href=""><img src={ arrow_do} alt="" /></a></div>
                        <div>
                            <a href=""><img src={join_meating} alt="" /></a>
                            <a href=""><img src={arrow_down2} alt="" /></a>
                        </div>
                    </div>
                </div>
            
            </div>
            
     </>
    );
}

export default Main_box_header;