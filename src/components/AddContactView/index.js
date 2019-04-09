import React from 'react';
import s from './styles';

const AddContactView = ({ updateContactText, addNewContact, clearName, value }) => (
  <div className={s.buttonStyle}>
    <input
      type="text"
      className={s.inputStyle}
      value={value}
      onChange={e => updateContactText(e.target.value)}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          addNewContact(value)
          clearName();
        }
      }}
    />
    <span className={s.addButton} onClick={() => {
      addNewContact(value)
      clearName()
    }}>+</span>
  </div>
);

export default AddContactView;