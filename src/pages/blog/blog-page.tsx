import { HeartSparkleBackground } from "@/components/heart-sparkle-background"
import PolaroidBlog from "@/components/polaroid-blog"
import Test from "@/assets/test-image.jpg";
import { Link } from "react-router-dom";

const BlogPage = () => {
    const blogs = [
        { title: "blog 1", id: 1 },
        { title: "blog 2", id: 2 },
        { title: "blog 3", id: 3 },
        { title: "blog 4", id: 4 },
    ]

    return (
        <>
            <HeartSparkleBackground />
            <div className="flex justify-center pt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
                    {blogs.map((blog, index) => (
                        <Link to={`/blog/blog-content/${blog.id || 123}`} key={index}>
                            <PolaroidBlog srcImg={Test} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogPage