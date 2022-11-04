import React from 'react'
import Modal from 'react-modal';
import {RiCloseCircleLine} from 'react-icons/ri'

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
            </div>
            <div className='modal_options'>
               {options.growInfo ? 
               options.growInfo.options.length > 0 ?
               options.growInfo.options.map((data,index)=>(
                  <div key={index}>
                     <h5>{index+1} 옵션 <span>Lv. {data.level}</span></h5>
                     <p>
                        <span>피해 증가{data.damage}</span>
                        <span>버프력{data.buff}</span>
                     </p>                  
                     <span>{data.explainDetail}</span>
                  </div>
               )) :"" :""}
            </div>
         </div>
      </Modal>
   )
}

export default Modals