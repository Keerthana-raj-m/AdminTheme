import React from 'react';
import "./Widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { blue, red } from '@mui/material/colors';

const Widget = ({type}) => {
    let data;

    //temporary//

    const amount = 100;
    const diff = 20;


    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link:"See all users",
                icon:<PersonOutlinedIcon className='icon'
                style={{
                    color:"crimson",
                    backgroundColor:"rgba(255, 0, 0, 0.2)",
                }}
                />,
            };
            break;
            case "order":
                data = {
                 title:"ORDERS",
                 isMoney:false,
                 link: "View all orders",
                 icon: <ShoppingCartOutlinedIcon className='icon'
                 style={{
                    color:"gold",
                    backgroundColor:"rgba(218, 165, 32, 0.2)",
                }}
                 />
                 
                };
                break;
                case "earning":
                    data = {
                     title:"EARNINGS",
                     isMoney:true,
                     link: "view net earnings",
                     icon: <MonetizationOnOutlinedIcon className='icon'
                     style={{
                        color:"green",
                        backgroundColor:"rgba(0, 128, 0, 0.2)",
                    }}
                     />
                    };
                    break;
                    case "balance":
                        data = {
                         title:"BALANCE",
                         isMoney: true,
                         link: "see details",
                         icon: <AccountBalanceWalletOutlinedIcon className='icon'
                        
                         style={{
                            color:"purple",
                            backgroundColor:"rgba(128, 0, 0, 0.2)",
                        }}
                         />
                         
                    
                        };
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"}{amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
          {data.icon}
        </div>
      
    </div>
  );
};

export default Widget

