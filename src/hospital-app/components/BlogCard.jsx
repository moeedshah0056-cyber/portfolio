import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, User } from "lucide-react";

export default function BlogCard({ blog }) {
  const [imgError, setImgError] = useState(false);

  if (!blog) return null;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-200">
      <div>
        {/* Blog Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          {!imgError && blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold p-6 text-center">
              {blog.category}
            </div>
          )}

          <div className="absolute top-3 left-3 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm shadow-sm">
            {blog.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Clock size={13} className="text-blue-500" />
              {blog.readTime}
            </span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
            <Link to={`/blog/${blog.slug || blog.id}`}>{blog.title}</Link>
          </h3>

          <p className="mt-2.5 text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>
      </div>

      {/* Author & Footer Link */}
      <div className="flex items-center justify-between border-t border-gray-100 p-6 pt-4">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-semibold">
            <User size={13} />
          </div>
          <span className="font-medium text-gray-800 truncate max-w-[140px]">
            {blog.author}
          </span>
        </div>

        <Link
          to={`/blog/${blog.slug || blog.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 transition-transform group-hover:translate-x-1"
        >
          <span>Read More</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
