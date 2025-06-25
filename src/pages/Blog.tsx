
import { useState } from "react";
import { Calendar, User, ChevronRight, Search, Heart, MessageCircle, Share2, BookOpen, Cross, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Walking by Faith: Lessons from Abraham's Journey",
      excerpt: "Discover how Abraham's journey of faith can inspire us to trust God in our own life adventures and uncertainties.",
      content: "Abraham's story is one of extraordinary faith and obedience. When God called him to leave his homeland and go to a place he had never seen, Abraham obeyed without hesitation...",
      author: "Pastor David Mwangi",
      date: "2024-01-25",
      category: "faith",
      tags: ["faith", "trust", "abraham", "journey"],
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=300&fit=crop",
      readTime: "5 min read",
      likes: 42,
      comments: 8,
      featured: true
    },
    {
      id: 2,
      title: "The Power of Prayer: My Healing Testimony",
      excerpt: "Sarah shares her powerful testimony of how God healed her from a chronic illness through the power of prayer and faith.",
      content: "Two years ago, I was diagnosed with a condition that doctors said would limit my life significantly. But God had other plans...",
      author: "Sarah Wanjiku",
      date: "2024-01-20",
      category: "testimony",
      tags: ["healing", "prayer", "testimony", "faith"],
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=300&fit=crop",
      readTime: "7 min read",
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: "Building Community: The Early Church Model",
      excerpt: "Exploring how the early church in Acts serves as a blueprint for building authentic Christian community today.",
      content: "The book of Acts gives us a beautiful picture of what Christian community can look like when believers are united in purpose...",
      author: "Elder John Kamau",
      date: "2024-01-18",
      category: "community",
      tags: ["community", "fellowship", "acts", "church"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop",
      readTime: "6 min read",
      likes: 35,
      comments: 12
    },
    {
      id: 4,
      title: "Navigating University Life as a Christian",
      excerpt: "Practical tips for maintaining your faith and values while thriving in the university environment.",
      content: "University life presents unique challenges for Christian students. From academic pressure to social temptations...",
      author: "Grace Njeri",
      date: "2024-01-15",
      category: "student-life",
      tags: ["university", "student", "challenges", "faith"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      readTime: "8 min read",
      likes: 58,
      comments: 22
    },
    {
      id: 5,
      title: "The Great Commission: Our Call to Missions",
      excerpt: "Understanding Jesus' final command and how every believer can participate in the Great Commission.",
      content: "Before ascending to heaven, Jesus gave His disciples a clear mandate that still applies to us today...",
      author: "Pastor Michael Otieno",
      date: "2024-01-12",
      category: "missions",
      tags: ["missions", "evangelism", "great-commission", "calling"],
      image: "https://images.unsplash.com/photo-1594149595248-91f136e10368?w=600&h=300&fit=crop",
      readTime: "10 min read",
      likes: 44,
      comments: 7
    },
    {
      id: 6,
      title: "From Darkness to Light: My Salvation Story",
      excerpt: "Peter shares his journey from a life of confusion and emptiness to finding purpose and joy in Christ.",
      content: "Growing up, I thought I had everything figured out. Good grades, popularity, and what seemed like a bright future...",
      author: "Peter Kiprotich",
      date: "2024-01-10",
      category: "testimony",
      tags: ["salvation", "testimony", "transformation", "purpose"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      readTime: "9 min read",
      likes: 73,
      comments: 18
    },
    {
      id: 7,
      title: "The Role of Women in Ministry",
      excerpt: "Exploring the biblical foundation for women's participation in ministry and church leadership.",
      content: "Throughout scripture, we see God using women in powerful ways to advance His kingdom...",
      author: "Dr. Ruth Mbugua",
      date: "2024-01-08",
      category: "ministry",
      tags: ["women", "ministry", "leadership", "biblical"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=300&fit=crop",
      readTime: "7 min read",
      likes: 39,
      comments: 11
    },
    {
      id: 8,
      title: "Worship Beyond Sunday: Living a Life of Praise",
      excerpt: "Discovering how worship extends beyond our Sunday services into every aspect of our daily lives.",
      content: "True worship isn't confined to a building or a specific day of the week. It's a lifestyle...",
      author: "Worship Leader Mary",
      date: "2024-01-05",
      category: "worship",
      tags: ["worship", "lifestyle", "praise", "daily-life"],
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=300&fit=crop",
      readTime: "6 min read",
      likes: 51,
      comments: 9
    }
  ];

  const categories = [
    { value: "all", label: "All Posts", icon: BookOpen },
    { value: "faith", label: "Faith & Growth", icon: Cross },
    { value: "testimony", label: "Testimonies", icon: Heart },
    { value: "community", label: "Community", icon: Users },
    { value: "student-life", label: "Student Life", icon: User },
    { value: "missions", label: "Missions", icon: Users },
    { value: "ministry", label: "Ministry", icon: Cross },
    { value: "worship", label: "Worship", icon: Heart }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Blog & Articles</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Inspiring stories, biblical insights, and testimonies from our community
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="flex items-center space-x-1"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "all" && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="bg-yellow-500 text-white mb-4">FEATURED ARTICLE</Badge>
              <h2 className="text-2xl font-bold text-gray-900">Editor's Pick</h2>
            </div>
            <Card className="overflow-hidden border-2 border-blue-600">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge variant="outline" className="mb-4 capitalize">
                    {featuredPost.category.replace('-', ' ')}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button>
                      Read Full Article
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{featuredPost.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{featuredPost.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === "all" ? "Latest Articles" : `${categories.find(c => c.value === selectedCategory)?.label} Articles`}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge variant="outline" className="absolute top-2 left-2 bg-white capitalize">
                    {post.category.replace('-', ' ')}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <div className="flex space-x-1">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                    <div className="flex items-center space-x-3 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                      <Share2 className="h-4 w-4 cursor-pointer hover:text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss inspiring articles, testimonies, and updates from our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="bg-white text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
