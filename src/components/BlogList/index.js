import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogItems-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
      ))}
    </ul>
  )
}
export default BlogList
