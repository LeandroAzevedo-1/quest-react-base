function Title ({text, color, background, padding}){

    const textUppercase = text.toUpperCase()

    return (
        <h1  style={{color: color, background, padding}}>{textUppercase}</h1>
    )
}
Title.defaultProps = {
    color: " ", //Created in white for color
    background: "#c1c1c1", //created whit a defined color
    padding: "20px" // created whit a defined padding 
}

export default Title
