
import './Category_tab.css';
import inbox from '../../img/inbox.png';
import social from '../../img/social.png';
import tag from '../../img/tag.png';

function Category_tab(){
    return(
        <div className="category-bar df border-bottom">
                <div className="category-bar-1 df all-icon-size">
                    <div><img src={inbox} alt="" /></div>
                    <div>Primary</div>
                </div> 
                <div className="category-bar-2 df all-icon-size">
                    <div><img src={social} alt="" /></div>
                    <div>Social</div>
                </div>
                <div className="category-bar- df all-icon-size">
                    <div><img src={tag} alt="" /></div>
                    <div>Promotions</div>
                </div>    
            </div>

    );
}
export default Category_tab;