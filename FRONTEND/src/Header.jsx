
function Header(props){
    return(
        <header className={props.Text} id={props.ident}>
            <h1>{props.text1}</h1>
        </header>
    );
}

export default Header