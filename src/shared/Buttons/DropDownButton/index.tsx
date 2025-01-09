import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IButtonProps } from "../BaseButton"
import { useEffect, useState } from 'react';
import { Dropdown } from 'bootstrap'
import "./dropdown.css"

export interface IDropDownButtonProps extends IButtonProps {
    items: string[]
}

const DropDownButton = (props: IDropDownButtonProps) => {
  const [dropdown, setDropdown] = useState(<></>)

  useEffect(() => {
    const bsDropdown = new Dropdown(document.getElementById('subjectsMenu') as HTMLElement)
    setDropdown(bsDropdown as any)
    return () => bsDropdown.dispose()
  }, [])

  return (
    <div className="btn-group">
      <button 
        className={`button btn primary btn-sm dropdown-toggle ${props.className}`} 
        type="button" data-bs-toggle="dropdown" aria-expanded="false"
        data-theme={props.theme ? props.theme : 'white'}
      >
        {props.text}
      </button>
      <ul id="subjectsMenu" className={`dropdown-menu ${props.theme ? props.theme : 'white'}`}>
        {dropdown && props.items.map((item, index) => (
                    <li key={index} onClick={props.onClick}>
                         <a className="dropdown-item" href="#">{item}</a>
                     </li>
                 ))}
      </ul>
    </div>
  )
}
export default DropDownButton