import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
    // const [name, setname] = useState('mario');
    // var boo = useRef(true); //because if didnt use useRef, the value will be reset back to initial value every rerender
    // console.log(boo);

    // const handleClick = () => {
    //     boo.current = !boo.current;
    //     console.log(boo);

    //     if(boo.current){
    //         setname('mario');
    //         console.log('mario');
    //     }else{
    //         setname('luigi');
    //         console.log('luigi');
    //     }
    // }

    // const handleClickAgain = (name) => {
    //     console.log('Nyahallo ', name);
    // }
    const [blogs, setBlogs] = useState([
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState("mario");
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => (blog.id !== id));
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("Nyahallo");
        console.log(name);
    }, [name]); //do this to add dependency, by now, console log will only run when first launch, and when the variable (in this case name) changes

    useEffect(() => {
        console.log("Nyahallo Initial Run");
    }, []); //Add this array if want the function to only run when the app initially launch

    return (
        <div className="home">
            {/* <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleClickAgain('Boi');
            }}>Click me again</button> */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!"/> */}
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;