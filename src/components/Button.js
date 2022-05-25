import "./Button.css"
const Button =({label})=>{

    function mensage(e) {
        e.preventDefault()
        alert(`A label desse botão é ${label}`)
    }

    return (
        <button className="btn" onClick={mensage}>{label}</button>
    )
}


export {Button}

