const FormRowSelect = ({ labelText, name, value, defaultValue, handleChange, list, style, labelStyle, inputStyle, selectText }) => {

   const rowClassName = `form-select ${style}`
   const labelClassName = `form-label ${labelStyle}`
   const inputClassName = `form-input  ${inputStyle}`

  return (
    <div className={rowClassName}>
      <label
         htmlFor={name}
         className={labelClassName}
      >
        {labelText || name}
      </label>

      <select
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        className={inputClassName}
      >
        {
           list.map((itemValue, index) => {
              return (
                 <option
                    key={index}
                    value={itemValue}
                 >
                    {selectText || itemValue}
                 </option>
              )
           })
        }
      </select>
    </div>
  )
}

export default FormRowSelect
