function ConditionalRend(props){
    return props.isLoggedIn?<h1> login successful</h1>:<h1>login unsuccessful</h1>
        
}
export default ConditionalRend;