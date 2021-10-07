import React from 'react'

function Alert(props) {
    const capitalize=(text)=>{
         text = text.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return (
        props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)} :</strong> {props.alert.msg}
        </div>
    )
}

export default Alert
