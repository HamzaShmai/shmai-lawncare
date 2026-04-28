import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layouts/Layout";
import { lawnliftBlogs } from "@/src/data/blogs";

const BlogSingle = ({ blog }) => {
  if (!blog) return null;

  return (
    <Layout>
      <PageBanner pageName={blog.title} description={blog.excerpt} />
      <section className="blog-details-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <article className="blog-details-wrapper wow fadeInUp">
                <div className="post-thumbnail mb-30">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="post-meta mb-20">
                  <span className="date mr-20">{blog.date}</span>
                  <span className="comment">{blog.comments}</span>
                </div>
                <h3 className="title mb-20">{blog.title}</h3>
                {blog.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="author mt-35 d-flex align-items-center">
                  <img src={blog.authorImage} alt={blog.author} className="mr-15" />
                  <h6 className="mb-0">
                    Written by <span>{blog.author}</span>
                  </h6>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = () => ({
  paths: lawnliftBlogs.map((blog) => ({ params: { slug: blog.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const blog = lawnliftBlogs.find((item) => item.slug === params.slug) || null;
  return { props: { blog } };
};

export default BlogSingle;
