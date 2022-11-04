import React from 'react'
import Modal from 'react-modal';
import {RiCloseCircleLine} from 'react-icons/ri';
import parse from 'html-react-parser';

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
   },
};


function Modals(props) {
   const options = props.options
   return (
      <Modal
         isOpen={props.modalIsOpen}
         onAfterOpen={props.afterOpenModal}
         onRequestClose={props.closeModal}
         style={customStyles}
         ariaHideApp={false}
         contentLabel="Example Modal"
      >
         <div className='opppss'>
            <span className='closeBtn' onClick={props.closeModal}><RiCloseCircleLine/></span>
            <div className='modal_item'>
               <img src={`https://img-api.neople.co.kr/df/items/${options.itemId}`} alt="아이템" />
               <h3>{options.itemName}</h3>
               <h4>{options.itemTypeDetail}</h4>
               <h4 className='차원의'>{options.upgradeInfo ? `융합 - ${options.upgradeInfo.itemName}` : ""}</h4>
            </div>
            <div className='modal_options'>
               {options.growInfo ? 
               options.growInfo.options.length > 0 ?
               options.growInfo.options.map((data,index)=>(
                  <div key={index}>
                     <div><h5>{index+1} 옵션 <span className={data.level >= 60 ? "total_grow_240" : ""}>Lv. {data.level}</span></h5></div>
                     <div>
                        <span>- 피해 증가 {data.damage}</span>
                        <span>- 버프력 {data.buff}</span>
                     </div>                  
                     <div>{parse((data.explainDetail).replace(/(?:\r\n|\r|\n)/g,"<br/>"))}</div>
                  </div>
               )) :"" :""}
            </div>
         </div>
      </Modal>
   )
}

export default Modals