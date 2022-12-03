import './Header.css';
import search from '../../img/search.png';
import bar from '../../img/bar.jpg';
import logo from '../../img/gmail-logo.png';
import search_bar from '../../img/search-bar.png';
import question from '../../img/search-bar.png';
import setting from '../../img/setting.png';
import dot from '../../img/dot.svg';
import prof from '../../img/prof.jpg';

import { useState } from 'react';

function Header(){
    const[_color, _setColor] = useState('');

        function set_Color(){
            _setColor(true);
        }
        function remove_Color(){
            _setColor(false);
        }

    return(
        <header className="header df fixed">
            <div className="logo df flex-shrink "> 
                <div className="all-icon-style icon-margin-8"><a href="" className="menu-icon all-icon-size "><img src={bar} alt=""/></a></div>
                <div><a href="#" className="logo_icon"><img src={logo} alt="" /></a></div>
            </div>

           <div className="header-main df">
                <div className={`search-box df all-icon-style all-icon-size icon-margin-8 ${_color?'searchBoxFocus':''}`}>
                     <a className="bg-color" href=""><img src={search} alt="" /></a>
                    <div className="search">
                        <input type="search" name="search" id="search" className="bg-color" placeholder="Search mail" onFocus={set_Color} onBlur={remove_Color} />
                    </div>
                    <a className="bg-color" href=""><img src={search_bar} alt="" /></a>
                </div>
               <div className="header-right df flex-shrink all-icon-style all-icon-size icon-margin-8">
                    <a href=""><img src={question}  alt="" />
                    </a>
                    <a href=""><img src={setting} alt="" /></a>
                    <a href=""><img src={dot} alt="" /></a>
                    <a className="profile-img" href=""><img src={prof} alt=""  /></a>
                </div>
           </div>
        </header>
    );
}
export default Header;