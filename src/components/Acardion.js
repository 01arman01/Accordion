import React, {useState} from 'react';

function Acardion({item}){
    const [isOpen,setIsOpen] = useState(false)
    const onChangeIsOpen =  ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div className={isOpen?'acardion blockIsOpen':'acardion'}>
            <div className='header' onClick={onChangeIsOpen}>
                <h2 className={isOpen?'coloredit':''}><span className={isOpen?'headerId coloredit ':'headerId'}>{item.id}</span> {item.title}</h2>
                <div><span className='onChangeButton' >{isOpen?'-':'+'}</span></div>
            </div>
            {
                isOpen && <p className="description">{item.text}</p>
            }
        </div>
    )
}
export default Acardion;