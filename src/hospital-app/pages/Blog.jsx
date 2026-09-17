import { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Mail,
  CheckCircle2,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import { blogs } from "../data/blogs";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    "All",
    "Heart Health",
    "Children's Health",
    "Orthopedics & Bone Health",
    "Preventive Care",
    "Mental Wellness",
    "Nutrition & Wellness",
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchesSearch =
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
      if (activeCategory === "All") return true;
      return b.category.toLowerCase() === activeCategory.toLowerCase();
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="w-full bg-slate-50/70 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <BookOpen size={14} />
            <span>Health & Wellness Library</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Medical Insights & Health Articles
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Evidence-based medical guides, preventive health tips, and wellness advice written by MediCare consultant physicians.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[69px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:max-w-md">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search health topics, articles, or symptoms..."
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                      : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between text-xs text-gray-500">
          <span>
            Showing <strong className="text-gray-900">{filteredBlogs.length}</strong> medical articles
          </span>
          {(searchQuery || activeCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="font-bold text-blue-600 hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-xs">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Search size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No articles found</h3>
            <p className="mt-1 text-xs text-gray-500 max-w-sm mx-auto">
              Try searching for &quot;heart&quot;, &quot;skincare&quot;, &quot;vaccines&quot;, or &quot;stress&quot;.
            </p>
            <div className="mt-5">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Newsletter Subscription Box */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 p-8 sm:p-12 text-white shadow-xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Mail size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Subscribe to MediCare Health Digest
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
              Get monthly wellness advice, preventive screening reminders, and updates directly from our hospital physicians.
            </p>

            {subscribed ? (
              <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/20 px-6 py-3 text-sm font-bold text-white border border-white/30">
                <CheckCircle2 size={18} className="text-emerald-300" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 rounded-xl bg-white px-4 py-3 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
                <Button variant="white" size="md" type="submit">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
