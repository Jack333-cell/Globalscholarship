import React, { useState } from 'react';
import { Search, Menu, X, ChevronRight, Calendar, Tag, Globe, Zap, TrendingUp, BookOpen, Award, ArrowLeft, MapPin, Clock, DollarSign, Users, CheckCircle, Mail } from 'lucide-react';

const ScholarshipRegion = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);
  const [email, setEmail] = useState('');

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
      description: 'The Einstein Fellowship Program provides comprehensive support for international researchers conducting groundbreaking research in Germany. This prestigious fellowship covers all costs including tuition, accommodation, research materials, and monthly stipend.',
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
      description: 'Xiamen University offers comprehensive scholarships for international master\'s students. The scholarship covers full tuition, accommodation in university dormitories, and a monthly stipend. Xiamen is ranked among Asia\'s top universities.',
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
      description: 'The Macquarie University Vice-Chancellor\'s Scholarships are awarded to high-achieving international students. Partial scholarships cover partial tuition fees.',
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
      description: 'The DAAD EPOS programme supports postgraduate students from developing countries pursuing development-related courses.',
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
      description: 'The Savannah Energy SEE-IT program develops young talent in the Nigerian energy sector with formal training and paid internship.',
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
      excerpt: 'Premier international exchange program for graduate study and research in the United States.',
      thumbnail: '🗽',
      amount: 'Fully Funded',
      deadline: '2026-08-01',
      duration: '1-2 years',
      gpa: '3.5+',
      description: 'The prestigious Fulbright Program is the US government\'s flagship international educational exchange initiative.',
      requirements: ['Undergraduate degree', 'GPA 3.5+', 'English proficiency', 'Strong academics', 'Leadership potential', 'Commitment to service'],
      benefits: ['Full tuition', 'Living allowance ($1,500-$2,500)', 'Travel & settling allowance', 'Health insurance', 'Development opportunities'],
      university: 'Multiple US Universities',
      link: 'https://example.com'
    }
  ];

  const successStories = [
    { id: 1, title: 'Meet Obinna Nwannegbo - UNIBEN\'s overall best with 4.80CGPA', date: 'March 11, 2026', category: 'International Success', excerpt: 'From struggling to becoming the top pharmacy student.' },
    { id: 2, title: 'After 17 rejections, determined lady won Mastercard scholarship', date: 'March 11, 2026', category: 'Nigerian Success', excerpt: 'How perseverance led to securing a prestigious award.' },
    { id: 3, title: 'Married couple earned PhDs on same day at same university', date: 'March 11, 2026', category: 'International Success', excerpt: 'A heartwarming tale of mutual support and success.' }
  ];

  const explainers = [
    { id: 1, title: 'How To Fill Seplat Scholarship Application Form 2026', date: 'February 23, 2026', excerpt: 'Step-by-step guide with tips and common mistakes to avoid.' },
    { id: 2, title: 'New UK Visa Fees 2026 | Full List + Requirements', date: 'December 5, 2025', excerpt: 'Complete breakdown of updated fees and document requirements.' },
    { id: 3, title: '25 US Universities with Application Fee Waivers & Full Funding', date: 'November 28, 2025', excerpt: 'Comprehensive list for international graduate students.' }
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

  const countries = [
    { id: 'usa', label: 'USA', count: 45 },
    { id: 'uk', label: 'UK', count: 38 },
    { id: 'canada', label: 'Canada', count: 22 },
    { id: 'australia', label: 'Australia', count: 18 },
    { id: 'europe', label: 'Europe', count: 65 },
    { id: 'africa', label: 'Africa', count: 42 }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowNewsletterSuccess(true);
      setEmail('');
      setTimeout(() => setShowNewsletterSuccess(false), 3000);
    }
  };

  // Scholarship Detail Page
  if (selectedScholarship) {
    const scholarship = scholarshipListings.find(s => s.id === selectedScholarship);
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
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

        {/* Detail Content */}
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

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed">{scholarship.description}</p>
            </div>

            {/* Requirements */}
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

            {/* Benefits */}
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

            {/* CTA */}
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

  // Main Home Page
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
                <h1 className="text-xl font-bold text-slate-900">Scholarship Region</h1>
                <p className="text-xs text-slate-500">Global Scholarships & Education</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Scholarships</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Blog</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Guides</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">About</a>
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
              <a href="#" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">Scholarships</a>
              <a href="#" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">Blog</a>
              <a href="#" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">Guides</a>
              <a href="#" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">About</a>
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
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Study Countries</h3>
              <div className="space-y-2">
                {countries.map((country) => (
                  <a key={country.id} href="#" className="flex items-center justify-between p-3 rounded-lg text-slate-700 hover:bg-slate-100 transition group">
                    <span className="font-medium text-sm">{country.label}</span>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition">{country.count}</span>
                  </a>
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
            {/* Featured */}
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

            {/* Latest */}
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

            {/* Success Stories */}
            <section>
              <div className="flex items-center gap-2 mb-6"><Award className="w-5 h-5 text-green-600" /><h2 className="text-2xl font-bold text-slate-900">Success Stories</h2></div>
              <div className="grid gap-4">
                {successStories.map((story) => (
                  <article key={story.id} className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5 hover:shadow-lg transition cursor-pointer">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-green-600 transition line-clamp-2 flex-1">{story.title}</h3>
                      <ChevronRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">{story.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{story.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{story.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Guides */}
      <section className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8"><BookOpen className="w-5 h-5 text-slate-900" /><h2 className="text-3xl font-bold text-slate-900">Educational Guides & Explainers</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {explainers.map((guide) => (
              <article key={guide.id} className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition mb-2 line-clamp-2">{guide.title}</h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{guide.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{guide.date}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><Globe className="w-5 h-5 text-white" /></div>
                <h3 className="font-bold text-white">Scholarship Region</h3>
              </div>
              <p className="text-sm text-slate-400">Connecting students worldwide with scholarships and educational opportunities.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">For Students</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Browse Scholarships</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Application Tips</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Success Stories</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Study Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Explainers</a></li>
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
                <li><a href="#" className="hover:text-blue-400 transition">Advertise</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-slate-400">&copy; 2026 Scholarship Region. All rights reserved. Empowering students worldwide.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-slate-400 hover:text-white transition">Twitter</a>
                <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScholarshipRegion;