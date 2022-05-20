import "./Button.css"
const Button =({label})=>{

    function mensage(e) {
        e.preventDefault()
        alert("A label desse botão é Baixar CV")
    }

    return (
        <button className="btn" onClick={mensage}>{label}</button>
    )
}


export default Button

