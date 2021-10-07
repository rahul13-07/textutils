import React,{useState} from 'react'
export default function TextForm(props) {
    const handleupClick =()=>{
        var newText = text.toUpperCase();
        setText(newText);
    }
    const handlednClick =()=>{
        var newText = text.toLowerCase();
        setText(newText);
    }
    const handleclClick =()=>{
        setText("");
    }
    const handlecpClick =()=>{
        var text = document.getElementById("Textarea");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handlespClick =()=>{
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleonClick =(event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    return (
        <>
        <div className="container">
            <h1 style={{color : props.mode ==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control my-3" id="Textarea" value={text} rows="10"
                 onChange={handleonClick} style={{backgroundColor : props.mode ==='light'?'white':'#13466e' , color : props.mode ==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn-primary" onClick={handleupClick}>Convert To UpperCase</button>
            <button className="btn-primary mx-3" onClick={handlednClick}>Convert To LowerCase</button>
            <button className="btn-primary mx-1" onClick={handleclClick}>Clear Text</button>
            <button className="btn-primary mx-3" onClick={handlecpClick}>Copy Text</button>
            <button className="btn-primary mx-2" onClick={handlespClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-5" >
            <h2 style={{color : props.mode ==='light'?'black':'white'}}>
                Your Text Summary:
            </h2>
            <p style={{color : props.mode ==='light'?'black':'white'}}>
                {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters
            </p>
            <p style={{color : props.mode ==='light'?'black':'white'}}>
                {0.008 * text.split(" ").length} Minutes Read
            </p>
            <h2 className="my-3" style={{color : props.mode ==='light'?'black':'white'}}>
                Preview
            </h2>
            <p style={{color : props.mode ==='light'?'black':'white'}}>
                {text.length>0?text:"OoPs!!!  The Above TextBox is Empty....Enter Something in it to Preview "}
            </p>
        </div>
        </>
    )
}
