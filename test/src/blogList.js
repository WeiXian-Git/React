const BlogList = (props) => {
    const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            {props.title}
            {blogs.map((blog) => (//must use braket, To return an object literal expression requires parentheses around expression. more detail https://stackoverflow.com/questions/49425755/arrow-functions-and-the-use-of-parentheses-or-or
                <div className="blog-preview" key={blog.id}> 
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => props.handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;