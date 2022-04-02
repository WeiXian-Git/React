const Navbar = () => {
    // const styling = {
    //     backgroundColor: '#f1356d',
    //     borderRadius: '8px'
    // }

    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            {/* <div className="link" style={styling}> */}
            <div className="link">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;