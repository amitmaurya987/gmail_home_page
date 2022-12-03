import logo from './logo.svg';
import './App.css';
import arr from './img/arr.png';
import Header from './Component/Header/Header';
import Left_sidebar from './Component/Left_sidebar/Left_sidebar';
import Right_sidebar from './Component/Right_sidebar/Right_sidebar';
import Main_box_header from './Component/Main_box_header/Main_box_header';
import Category_tab from './Component/Category_tab/Category_tab';
import Mail_box from './Component/Mail_box/Mail_box';

import {useState} from 'react';

function App() {
    const [toggle_rotate, setToggle_rotate] = useState(false);
    const [data, setdata] = useState([
        { id:0,
        title:'Facebook',
        heading:'New jobs for Php Developer',
        desc:'We found 20 new jobs for you. Click on the following jobs to apply',
        time:'10 may'
       },
       { id:1,
        title:'Fresher Jobs',
        heading:'Apply For Jobs @ HCL Now - Check Details & apply online Now',
        desc:'We are looking for Software Engineer for our offices in different locations across India.',
        time:'1:02 PM'
       },
       { id:2,
        title:'Team HR',
        heading:'New jobs for Php Developer Laravel Codeigniter Frameworks',
        desc:'Hello Amit Kumar,We found 15 new jobs for you. Click on the following jobs to apply',
        time:'1 year ago'
       }

    ]);
    function right_sidebar(){

        if(!toggle_rotate){
            setToggle_rotate(true);
        }else{
            setToggle_rotate(false);
        }
    }

  return (
    <div className="App">
        <Header />
        <div className="wrapper df">
            <Left_sidebar />
            <Right_sidebar toggle={toggle_rotate} />
            <div className={`main-section ${toggle_rotate?'toggle-sidebar':''}`} id="main-section">
                < Main_box_header toggle={toggle_rotate} />
                <div className="mail-box-wrapper">
                    <Category_tab />
                    {
                        data.map((items,index) => 
                            <Mail_box data={items} index={index}/>
                            )  
                    }  
                    
                </div>
                <div className={`toggle-arrow all-icon-size ${toggle_rotate?'toggle_arrow':''}`}  onClick={right_sidebar} >
                <img src={arr} alt="" />
            </div>
            </div>
        </div>
    </div>
  );
}

export default App;
