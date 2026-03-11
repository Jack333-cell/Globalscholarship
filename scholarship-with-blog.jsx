import React, { useState } from 'react';
import { Search, Menu, X, ChevronRight, Calendar, Tag, Globe, Zap, TrendingUp, BookOpen, Award, ArrowLeft, MapPin, Clock, DollarSign, Users, CheckCircle, Mail, PlusCircle, Edit2, Trash2 } from 'lucide-react';

const ScholarshipRegion = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // home, scholarships, blog, blog-post
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [showNewBlogForm, setShowNewBlogForm] = useState(false);
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'How to Write a Winning Scholarship Essay in 5 Steps',
      excerpt: 'Learn the proven formula for writing scholarship essays that stand out and win you funding.',
      content: 'Writing a winning scholarship essay requires more than just good grammar. You need to tell your story in a way that resonates with scholarship committees.\n\nStep 1: Start with a Strong Hook\nYour opening sentence should grab attention. Instead of generic statements, share a specific moment that changed your perspective.\n\nStep 2: Show, Don\'t Tell\nInstead of saying "I am hardworking," tell a story that demonstrates your work ethic. Use concrete examples and vivid details.\n\nStep 3: Connect to the Scholarship Mission\nResearch what the scholarship values and align your essay with those values. Show how you embody their mission.\n\nStep 4: Be Authentic\nScholarship committees read thousands of essays. Your genuine voice will stand out more than trying to impress with fancy words.\n\nStep 5: Edit and Get Feedback\nWrite multiple drafts. Have teachers, mentors, and friends review your work. Fresh eyes catch things you might miss.\n\nRemember: Your essay is your chance to show who you are beyond grades and test scores. Make it count!',
      author: 'Scholarship Region',
      date: 'March 10, 2026',
      category: 'Application Tips',
      image: '✍️',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Top 10 Scholarships for African Students in 2026',
      excerpt: 'A comprehensive guide to the best fully-funded opportunities for African students studying abroad.',
      content: 'Africa is home to millions of talented students seeking world-class education. Here are the top 10 scholarships specifically available for African students in 2026.\n\n1. DAAD Scholarships (Germany)\nThe German government offers comprehensive funding for African students pursuing postgraduate studies. Full tuition coverage plus monthly stipend.\n\n2. Fulbright Program (USA)\nThe prestigious US government scholarship for African students to study and conduct research at American universities.\n\n3. Mandela Rhodes Scholarship (Multiple Countries)\nFully funded scholarships for African leaders studying at top universities worldwide.\n\n4. Erasmus+ Scholarships (Europe)\nEuropean Union scholarships for African students studying in European universities.\n\n5. Mastercard Foundation Scholarship (Multiple)\nComprehensive funding for talented young Africans to study at leading universities globally.\n\n6. African Leadership University Scholarships\nPartially to fully funded scholarships for African students demonstrating leadership potential.\n\n7. Google Africa Scholarship\nTechnology-focused scholarships for African students in STEM fields.\n\n8. British Council Scholarships (UK)\nFunding opportunities for African students studying in United Kingdom universities.\n\n9. Australian Government RTP Scholarship\nFor African graduate students pursuing research degrees in Australia.\n\n10. Chinese Government Scholarship\nComprehensive scholarships for African students studying in Chinese universities.\n\nEach of these scholarships has specific requirements, but the opportunity is there. Start preparing your applications now!',
      author: 'Scholarship Region',
      date: 'March 8, 2026',
      category: 'Regional Guides',
      image: '🌍',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: '5 Common Scholarship Application Mistakes to Avoid',
      excerpt: 'Don\'t let these preventable errors cost you your scholarship opportunity.',
      content: 'Scholarship committees review thousands of applications. Small mistakes can eliminate your chances of winning. Here are the 5 most common mistakes and how to avoid them.\n\nMistake 1: Missing the Deadline\nAlways submit at least 48 hours before the deadline. Technical issues happen. Give yourself a buffer.\n\nMistake 2: Not Following Instructions\nRead requirements carefully. If they ask for 250 words, don\'t submit 500. If they want PDF format, don\'t send Word documents.\n\nMistake 3: Generic Essays\nAvoid cookie-cutter responses. Personalize every essay to the specific scholarship and its mission.\n\nMistake 4: Spelling and Grammar Errors\nPoor writing reflects poorly on you. Use spell-check, read aloud, and have someone else proofread.\n\nMistake 5: Incomplete Applications\nSubmit all required documents. Missing even one recommendation letter can disqualify you.\n\nBonus Tip: Keep organized records of all scholarships you\'ve applied for, deadlines, and required documents. This prevents you from missing opportunities or submitting duplicate applications.\n\nTake time to do it right. Your future is worth it!',
      author: 'Scholarship Region',
      date: 'March 5, 2026',
      category: 'Application Tips',
      image: '⚠️',
      readTime: '4 min read'
    }
  ]);
  const [newBlog, setNewBlog] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'General',
    image: '📝'
  });

  const scholarshipListings = [
    {
      id: 1,
      title: '2026 Einstein Fellowship Program in Germany | Fully Funded',
      category: 'Fellowships',
      country: 'Germany',
      date: 'March 11, 2026',
      author: 'Scholarship Region',
      featured: true,
      excerpt: 'The Einstein Fellowship offers world-class research opportunities for international scholars in cutting-edge fields of science and technology.',
      thumbnail: '🔬',
      amount: 'Fully Funded',
      deadline: '2026-04-30',
      duration: '2-3 years',
      gpa: '3.5+',
      description: 'The Einstein Fellowship Program provides comprehensive support for international researchers conducting groundbreaking research in Germany.',
      requirements: ['Bachelor\'s degree', 'Strong academic record (GPA 3.5+)', 'English language proficiency', 'Research proposal', 'Recommendation letters'],
      benefits: ['Full tuition coverage', 'Monthly stipend (€1,200-€1,500)', 'Health insurance', 'Research fund access', 'Networking opportunities'],
      university: 'Max Planck Institute & German Universities',
      link: 'https://example.com'
    },
    {
      id: 2,
      title: 'Xiamen University International Students Scholarships 2026 | Fully Funded',
      category: 'Masters Scholarships',
      country: 'China',
      date: 'March 11, 2026',
      author: 'Scholarship Region',
      featured: true,
      excerpt: 'Complete funding for international master\'s students including tuition, accommodation, and living expenses.',
      thumbnail: '🎓',
      amount: 'Fully Funded',
      deadline: '2026-05-15',
      duration: '2 years',
      gpa: '3.0+',
      description: 'Xiamen University offers comprehensive scholarships for international master\'s students.',
      requirements: ['Bachelor\'s degree', 'GPA 3.0+', 'TOEFL 80+', 'Statement of purpose', 'Recommendation letters'],
      benefits: ['Full tuition waiver', 'Free dormitory', 'Monthly stipend (3,000-5,000 CNY)', 'Health insurance', 'Chinese language class'],
      university: 'Xiamen University',
      link: 'https://example.com'
    },
    {
      id: 3,
      title: '2026 Macquarie University Vice-Chancellor Scholarships in Australia',
      category: 'Masters Scholarships',
      country: 'Australia',
      date: 'March 11, 2026',
      author: 'Scholarship Region',
      featured: true,
      excerpt: 'Excellence-based scholarships for high-achieving students pursuing postgraduate studies.',
      thumbnail: '🌏',
      amount: '$20,000 - $45,000 AUD',
      deadline: '2026-06-30',
      duration: '1-2 years',
      gpa: '3.7+',
      description: 'The Macquarie University Vice-Chancellor\'s Scholarships are awarded to high-achieving international students.',
      requirements: ['Bachelor with distinction', 'GPA 3.7+', 'IELTS 7.0+', 'Strong references', 'Leadership statement'],
      benefits: ['Tuition fee waiver', 'Priority accommodation', 'Welcome package', 'Mentorship program', 'Career support'],
      university: 'Macquarie University, Sydney',
      link: 'https://example.com'
    },
    {
      id: 4,
      title: 'German Government DAAD Scholarships EPOS 2026',
      category: 'Postgraduate Scholarships',
      country: 'Germany',
      date: 'January 14, 2026',
      featured: false,
      excerpt: 'DAAD scholarships for postgraduate studies in development-related fields.',
      thumbnail: '🇩🇪',
      amount: 'Fully Funded',
      deadline: '2026-03-15',
      duration: '1-2 years',
      gpa: '3.0+',
      description: 'The DAAD EPOS programme supports postgraduate students from developing countries.',
      requirements: ['Bachelor\'s degree', 'Work experience (preferred)', 'Language proficiency', 'Development commitment'],
      benefits: ['Full coverage', 'Monthly allowance', 'Health insurance', 'Internship opportunities', 'Professional networking'],
      university: 'Various German Universities',
      link: 'https://example.com'
    },
    {
      id: 5,
      title: 'Savannah Energy Scholarship SEE-IT 2026 For Nigerians',
      category: 'Internships',
      country: 'Nigeria',
      date: 'March 11, 2026',
      featured: false,
      excerpt: 'Fully funded internship program combining classroom learning with industry experience.',
      thumbnail: '⚡',
      amount: 'Fully Funded + Stipend',
      deadline: '2026-04-20',
      duration: '1 year',
      gpa: '2.5+',
      description: 'The Savannah Energy SEE-IT program develops young talent in the Nigerian energy sector.',
      requirements: ['Nigerian citizen', 'Current student or recent grad', 'GPA 2.5+', 'Interest in energy/engineering', 'Communication skills'],
      benefits: ['Tuition sponsorship', 'Monthly stipend (₦50,000)', 'Training & certification', 'Industry mentorship', 'Job opportunities'],
      university: 'Savannah Energy (Nigeria)',
      link: 'https://example.com'
    },
    {
      id: 6,
      title: 'United States Fulbright Scholarship 2026 | Fully Funded',
      category: 'Fellowships',
      country: 'USA',
      date: 'January 30, 2026',
      featured: false,
      excerpt: 'Premier international exchange program for graduate study and research.',
      thumbnail: '🗽',
      amount: 'Fully Funded',
      deadline: '2026-08-01',
      duration: '1-2 years',
      gpa: '3.5+',
      description: 'The prestigious Fulbright Program is the US government\'s flagship international exchange initiative.',
      requirements: ['Undergraduate degree', 'GPA 3.5+', 'English proficiency', 'Strong academics', 'Leadership potential', 'Commitment to service'],
      benefits: ['Full tuition', 'Living allowance ($1,500-$2,500)', 'Travel & settling allowance', 'Health insurance', 'Development opportunities'],
      university: 'Multiple US Universities',
      link: 'https://example.com'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Scholarships' },
    { id: 'fellowships', label: 'Fellowships' },
    { id: 'undergraduate', label: 'Undergraduate' },
    { id: 'masters', label: 'Masters' },
    { id: 'phd', label: 'PhD' },
    { id: 'postgraduate', label: 'Postgraduate' },
    { id: 'internships', label: 'Internships' }
  ];

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.excerpt && newBlog.content) {
      const blogPost = {
        id: blogs.length + 1,
        ...newBlog,
        author: 'You',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        readTime: `${Math.ceil(newBlog.content.split(' ').length / 200)} min read`
      };
      setBlogs([blogPost, ...blogs]);
      setNewBlog({ title: '', excerpt: '', content: '', category: 'General', image: '📝' });
      setShowNewBlogForm(false);
      setCurrentPage('blog');
    }
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowNewsletterSuccess(true);
      setEmail('');
      setTimeout(() => setShowNewsletterSuccess(false), 3000);
    }
  };

  // BLOG DETAIL PAGE
  if (currentPage === 'blog-post' && selectedBlogPost) {
    const blog = blogs.find(b => b.id === selectedBlogPost);
    return (
      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button onClick={() => { setCurrentPage('blog'); setSelectedBlogPost(null); }} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <ArrowLeft className="w-5 h-5" /> Back
              </button>
              <h1 className="text-xl font-bold text-slate-900">Blog Post</h1>
              <div className="w-16"></div>
            </div>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article>
            <div className="mb-8">
              <div className="text-5xl mb-4">{blog.image}</div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{blog.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {blog.readTime}</span>
                <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {blog.category}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-slate-700">
              {blog.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Stay Updated</h3>
                <p className="text-slate-600 mb-4">Subscribe to our newsletter for more scholarship tips and guides.</p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                  <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Subscribe</button>
                </form>
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // BLOG LIST PAGE
  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <ArrowLeft className="w-5 h-5" /> Home
              </button>
              <h1 className="text-xl font-bold text-slate-900">Blog</h1>
              <button onClick={() => setShowNewBlogForm(!showNewBlogForm)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                <PlusCircle className="w-5 h-5" /> Write Article
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {showNewBlogForm && (
            <div className="mb-12 bg-slate-50 rounded-lg p-8 border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Write New Article</h2>
              <form onSubmit={handleAddBlog} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Article Title *</label>
                  <input type="text" value={newBlog.title} onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })} placeholder="Enter article title" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Emoji Icon</label>
                  <input type="text" maxLength="2" value={newBlog.image} onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })} placeholder="Choose emoji" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Short Excerpt *</label>
                  <textarea value={newBlog.excerpt} onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })} placeholder="2-3 sentence summary" rows="3" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Category</label>
                  <select value={newBlog.category} onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>General</option>
                    <option>Application Tips</option>
                    <option>Regional Guides</option>
                    <option>Success Stories</option>
                    <option>Visa & Immigration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Full Article Content *</label>
                  <textarea value={newBlog.content} onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })} placeholder="Write your full article here. Use double line breaks to separate paragraphs." rows="12" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono text-sm" required />
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Publish Article</button>
                  <button type="button" onClick={() => setShowNewBlogForm(false)} className="px-6 py-3 bg-slate-300 text-slate-900 font-medium rounded-lg hover:bg-slate-400 transition">Cancel</button>
                </div>
              </form>
            </div>
          )}

          <div className="grid gap-6">
            {blogs.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 text-lg">No articles yet. Write your first one!</p>
              </div>
            ) : (
              blogs.map((blog) => (
                <article key={blog.id} className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="flex gap-6 p-6">
                    <div className="text-5xl flex-shrink-0">{blog.image}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 onClick={() => { setSelectedBlogPost(blog.id); setCurrentPage('blog-post'); }} className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2 cursor-pointer flex-1">{blog.title}</h3>
                        {blog.author === 'You' && (
                          <button onClick={() => handleDeleteBlog(blog.id)} className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{blog.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blog.readTime}</span>
                        <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{blog.category}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition flex-shrink-0 mt-1 cursor-pointer" onClick={() => { setSelectedBlogPost(blog.id); setCurrentPage('blog-post'); }} />
                  </div>
                </article>
              ))
            )}
          </div>
        </main>
      </div>
    );
  }

  // SCHOLARSHIP DETAIL PAGE
  if (selectedScholarship) {
    const scholarship = scholarshipListings.find(s => s.id === selectedScholarship);
    return (
      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button onClick={() => setSelectedScholarship(null)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <ArrowLeft className="w-5 h-5" /> Back
              </button>
              <h1 className="text-xl font-bold text-slate-900">Scholarship Details</h1>
              <div className="w-16"></div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl">{scholarship.thumbnail}</div>
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-2">{scholarship.title}</h1>
                <p className="text-lg text-slate-600 mb-4">{scholarship.university}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    <Globe className="w-4 h-4" /> {scholarship.country}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    <DollarSign className="w-4 h-4" /> {scholarship.amount}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                    <Clock className="w-4 h-4" /> Deadline: {scholarship.deadline}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-1">Funding Amount</p>
                <p className="text-xl font-bold text-blue-600">{scholarship.amount}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-1">Deadline</p>
                <p className="text-lg font-bold text-green-600">{scholarship.deadline}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-1">Duration</p>
                <p className="text-lg font-bold text-purple-600">{scholarship.duration}</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-1">GPA Required</p>
                <p className="text-lg font-bold text-orange-600">{scholarship.gpa}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed">{scholarship.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {scholarship.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What You Get</h2>
              <ul className="space-y-3">
                {scholarship.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Apply?</h3>
              <p className="text-blue-100 mb-6">Don't miss this opportunity. Apply now before the deadline!</p>
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition">
                Apply Now
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // MAIN HOME PAGE
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Global Scholarship</h1>
                <p className="text-xs text-slate-500">Scholarships & Education</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => setCurrentPage('home')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Scholarships</button>
              <button onClick={() => setCurrentPage('blog')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Blog</button>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">About</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden sm:block p-2 hover:bg-slate-100 rounded-lg transition">
                <Search className="w-5 h-5 text-slate-600" />
              </button>
              <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-slate-200">
              <button onClick={() => setCurrentPage('home')} className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600 w-full text-left">Scholarships</button>
              <button onClick={() => setCurrentPage('blog')} className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600 w-full text-left">Blog</button>
              <a href="#" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">About</a>
              <a href="#" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">Find Your Perfect Global Scholarship</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Explore thousands of scholarships from universities and organizations worldwide. Discover your path to world-class education.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input type="text" placeholder="Search scholarships by name, country, field..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Search</button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200"><div className="text-3xl font-bold text-blue-600 mb-1">500+</div><p className="text-sm text-slate-600">Active Scholarships</p></div>
            <div className="bg-white rounded-lg p-6 border border-slate-200"><div className="text-3xl font-bold text-blue-600 mb-1">150+</div><p className="text-sm text-slate-600">Countries Covered</p></div>
            <div className="bg-white rounded-lg p-6 border border-slate-200"><div className="text-3xl font-bold text-blue-600 mb-1">$50M+</div><p className="text-sm text-slate-600">Total Funding Available</p></div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">By Type</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`w-full text-left px-4 py-2 rounded-lg transition font-medium text-sm ${activeCategory === cat.id ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>{cat.label}</button>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
              <h4 className="font-bold text-sm mb-2">Get New Scholarships</h4>
              <p className="text-xs text-blue-100 mb-4">Subscribe to our newsletter for latest opportunities.</p>
              <form onSubmit={handleNewsletterSubmit}>
                <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-blue-500 placeholder-blue-300 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white mb-3" required />
                <button type="submit" className="w-full px-3 py-2 bg-white text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-50 transition">Subscribe</button>
              </form>
              {showNewsletterSuccess && (
                <div className="mt-3 flex items-center gap-2 text-sm bg-blue-500 rounded p-2">
                  <CheckCircle className="w-4 h-4" /> Subscribed!
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2">
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-6"><Zap className="w-5 h-5 text-amber-500" /><h2 className="text-2xl font-bold text-slate-900">Featured Scholarships</h2></div>
              <div className="grid gap-4">
                {scholarshipListings.filter(s => s.featured).map((scholarship) => (
                  <article key={scholarship.id} onClick={() => setSelectedScholarship(scholarship.id)} className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                    <div className="flex gap-4 p-5">
                      <div className="text-4xl flex-shrink-0">{scholarship.thumbnail}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">{scholarship.title}</h3>
                          <span className="flex-shrink-0 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">Featured</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-3 line-clamp-2">{scholarship.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{scholarship.category}</span>
                          <span className="flex items-center gap-1"><Globe className="w-3 h-3" />{scholarship.country}</span>
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{scholarship.date}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition flex-shrink-0 mt-1" />
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-2 mb-6"><TrendingUp className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold text-slate-900">Latest Opportunities</h2></div>
              <div className="grid gap-4">
                {scholarshipListings.filter(s => !s.featured).map((scholarship) => (
                  <article key={scholarship.id} onClick={() => setSelectedScholarship(scholarship.id)} className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                    <div className="flex gap-4 p-5">
                      <div className="text-3xl flex-shrink-0">{scholarship.thumbnail}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2 mb-2">{scholarship.title}</h3>
                        <p className="text-sm text-slate-600 mb-3 line-clamp-1">{scholarship.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{scholarship.category}</span>
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{scholarship.date}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition flex-shrink-0 mt-1" />
                    </div>
                  </article>
                ))}
              </div>
              <button className="w-full mt-6 px-4 py-3 border border-slate-300 text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition">Load More Scholarships</button>
            </section>

            <section>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
                </div>
                <button onClick={() => setCurrentPage('blog')} className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</button>
              </div>
              <div className="grid gap-4">
                {blogs.slice(0, 3).map((blog) => (
                  <article key={blog.id} onClick={() => { setSelectedBlogPost(blog.id); setCurrentPage('blog-post'); }} className="group bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5 hover:shadow-lg transition cursor-pointer">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">{blog.title}</h3>
                      </div>
                      <div className="text-2xl flex-shrink-0">{blog.image}</div>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-1">{blog.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{blog.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blog.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><Globe className="w-5 h-5 text-white" /></div>
                <h3 className="font-bold text-white">Global Scholarship</h3>
              </div>
              <p className="text-sm text-slate-400">Connecting students worldwide with scholarships and educational opportunities.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">For Students</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Browse Scholarships</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Application Tips</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Success Stories</a></li>
                <li><button onClick={() => setCurrentPage('blog')} className="hover:text-blue-400 transition">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Study Guides</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-400">&copy; 2026 Global Scholarship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScholarshipRegion;