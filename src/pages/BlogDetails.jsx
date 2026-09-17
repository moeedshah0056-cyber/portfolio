import { useParams, Link } from "react-router-dom";
import {
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  CalendarDays,
} from "lucide-react";
import Button from "../components/Button";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.slug === id || b.id === id);

  if (!blog) {
    return (
      <main className="w-full py-20 text-center">
        <div className="mx-auto max-w-md p-8 rounded-3xl border border-gray-200 bg-white shadow-xs">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <BookOpen size={36} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Article Not Found</h2>
          <p className="mt-2 text-sm text-gray-600">
            The health article you are trying to view does not exist or has been relocated.
          </p>
          <div className="mt-6">
            <Button variant="primary" to="/blog" icon={ArrowLeft}>
              Back to Health Library
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <main className="w-full bg-slate-50/60 pb-20">
      {/* Back Navigation Bar */}
      <div className="border-b border-gray-200 bg-white py-3">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft size={14} />
            <span>Back to Health Library</span>
          </Link>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header Metadata */}
        <div className="mb-6">
          <div className="flex items-center gap-3 text-xs font-semibold text-blue-600 mb-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              {blog.category}
            </span>
            <span className="flex items-center gap-1 text-gray-500 font-normal">
              <Clock size={13} /> {blog.readTime}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 font-normal">{blog.date}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {blog.title}
          </h1>

          {/* Author Card */}
          <div className="mt-6 flex items-center justify-between border-y border-gray-100 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                {blog.author.split(" ")[1]?.[0] || "D"}
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">{blog.author}</h4>
                <p className="text-xs text-gray-500">{blog.authorSpecialty}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => alert("Article link copied to clipboard!")}
                className="rounded-xl border border-gray-200 p-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition"
                title="Share Article"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {blog.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-sm mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-10 shadow-sm">
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
            <p className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed">
              {blog.excerpt}
            </p>

            <div className="my-6 border-t border-gray-100" />

            <div className="space-y-4 whitespace-pre-line">
              {blog.content}
            </div>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-8 border-t border-gray-100 pt-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Article Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Doctor Consultation CTA */}
        <div className="my-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold">Have Questions About This Condition?</h3>
            <p className="mt-1 text-xs sm:text-sm text-blue-100">
              Schedule a personalized consultation with {blog.author} or our medical team.
            </p>
          </div>
          <Button variant="white" size="md" to="/appointment" icon={CalendarDays}>
            Book Consultation
          </Button>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Recommended Health Reading
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedBlogs.map((rel) => (
                <div
                  key={rel.id}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-2xs hover:shadow-md transition"
                >
                  <span className="text-[11px] font-bold text-blue-600">{rel.category}</span>
                  <h4 className="text-base font-bold text-gray-900 mt-1 line-clamp-2">
                    <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{rel.readTime} • {rel.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
