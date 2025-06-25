
import { Calendar, User, Clock, Tag, Search, ExternalLink, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Walking in Faith During University Life",
      excerpt: "Discover how to maintain your faith journey while navigating the challenges and opportunities of campus life...",
      author: "David Mwangi",
      date: "March 20, 2024",
      readTime: "5 min read",
      category: "Faith & Life",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      tags: ["faith", "student life", "discipleship"],
      documentUrl: "https://docs.google.com/document/d/1example_faith_university/edit?usp=sharing"
    },
    {
      id: 2,
      title: "The Power of Community in Christian Fellowship",
      excerpt: "Exploring the biblical foundation of community and how Christian fellowship transforms lives in practical ways...",
      author: "Grace Wanjiku",
      date: "March 15, 2024",
      readTime: "7 min read",
      category: "Community",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
      tags: ["community", "fellowship", "biblical"],
      documentUrl: "https://docs.google.com/document/d/1example_community_fellowship/edit?usp=sharing"
    },
    {
      id: 3,
      title: "Preparing for Life After Campus: A Christian Perspective",
      excerpt: "As graduation approaches, learn how to carry your faith into the professional world and make an impact...",
      author: "Samuel Kiprotich",
      date: "March 10, 2024", 
      readTime: "6 min read",
      category: "Career & Purpose",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop",
      tags: ["career", "purpose", "graduation"],
      documentUrl: "https://docs.google.com/document/d/1example_life_after_campus/edit?usp=sharing"
    },
    {
      id: 4,
      title: "Prayer: The Foundation of Student Leadership",
      excerpt: "Understanding how prayer shapes godly leaders and provides direction for effective Christian leadership on campus...",
      author: "Mary Nyambura",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      tags: ["prayer", "leadership", "spiritual discipline"],
      documentUrl: "https://docs.google.com/document/d/1example_prayer_leadership/edit?usp=sharing"
    },
    {
      id: 5,
      title: "Overcoming Academic Pressure with God's Peace",
      excerpt: "Practical strategies for managing stress, anxiety, and academic pressure through faith and biblical principles...",
      author: "Peter Otieno",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      tags: ["stress", "mental health", "peace", "academics"],
      documentUrl: "https://docs.google.com/document/d/1example_academic_pressure/edit?usp=sharing"
    },
    {
      id: 6,
      title: "Building Lasting Friendships in Christ",
      excerpt: "How to form deep, meaningful relationships that honor God and provide mutual support throughout your university journey...",
      author: "Esther Mbugua",
      date: "February 25, 2024",
      readTime: "5 min read",
      category: "Relationships",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=250&fit=crop",
      tags: ["friendship", "relationships", "community"],
      documentUrl: "https://docs.google.com/document/d/1example_christian_friendship/edit?usp=sharing"
    },
    {
      id: 7,
      title: "The Role of Scripture in Daily Decision Making",
      excerpt: "Learn how to apply biblical wisdom to everyday choices and let God's Word guide your path as a student...",
      author: "John Maina",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Biblical Living",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      tags: ["scripture", "decision making", "wisdom"],
      documentUrl: "https://docs.google.com/document/d/1example_scripture_decisions/edit?usp=sharing"
    },
    {
      id: 8,
      title: "Evangelism in the Modern Campus",
      excerpt: "Effective and respectful ways to share the Gospel with fellow students in today's diverse university environment...",
      author: "Sarah Achieng",
      date: "February 15, 2024",
      readTime: "7 min read",
      category: "Evangelism",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
      tags: ["evangelism", "outreach", "witness"],
      documentUrl: "https://docs.google.com/document/d/1example_campus_evangelism/edit?usp=sharing"
    }
  ];

  const categories = [
    "All Posts",
    "Faith & Life",
    "Community", 
    "Leadership",
    "Biblical Living",
    "Career & Purpose",
    "Mental Health",
    "Relationships",
    "Evangelism"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">UKCCU Blog</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Inspiring articles, testimonies, and insights to strengthen your faith journey
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-500" />
              <Input placeholder="Search articles..." className="w-64" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow lg:flex">
            <div className="lg:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <Badge className="bg-blue-100 text-blue-800">{blogPosts[0].category}</Badge>
                <span className="text-sm text-gray-500 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {blogPosts[0].date}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                </div>
                <Button 
                  onClick={() => window.open(blogPosts[0].documentUrl, '_blank')}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Read Full Article
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-800">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(post.documentUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, updates, and spiritual encouragement directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="text-gray-900"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
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
