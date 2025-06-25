import { BookOpen, Download, ExternalLink, FileText, Video, Headphones, Users, Calendar, Heart, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resources = () => {
  const bibleVersions = [
    {
      name: "New International Version (NIV)",
      description: "A contemporary translation that balances accuracy with readability",
      url: "https://www.biblegateway.com/versions/New-International-Version-NIV-Bible/",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "King James Version (KJV)",
      description: "The traditional English translation with classical language",
      url: "https://www.biblegateway.com/versions/King-James-Version-KJV-Bible/",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "English Standard Version (ESV)",
      description: "A literal translation that emphasizes word-for-word accuracy",
      url: "https://www.biblegateway.com/versions/English-Standard-Version-ESV-Bible/",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "New Living Translation (NLT)",
      description: "A thought-for-thought translation in contemporary English",
      url: "https://www.biblegateway.com/versions/New-Living-Translation-NLT-Bible/",
      color: "bg-orange-100 text-orange-800"
    },
    {
      name: "The Message (MSG)",
      description: "A contemporary paraphrase in everyday language",
      url: "https://www.biblegateway.com/versions/Message-MSG-Bible/",
      color: "bg-red-100 text-red-800"
    },
    {
      name: "New American Standard Bible (NASB)",
      description: "Known for its literal accuracy and scholarly approach",
      url: "https://www.biblegateway.com/versions/New-American-Standard-Bible-NASB/",
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  const studyGuides = [
    {
      title: "New Believer's Guide",
      description: "Essential foundations for those new to the Christian faith",
      author: "UKCCU Leadership Team",
      pages: 24,
      downloadUrl: "#",
      category: "Foundations"
    },
    {
      title: "Prayer and Fasting Handbook",
      description: "A comprehensive guide to developing a strong prayer life",
      author: "Rev. Dr. Michael Kamau",
      pages: 36,
      downloadUrl: "#",
      category: "Spiritual Disciplines"
    },
    {
      title: "Biblical Leadership Principles",
      description: "Leadership lessons from Scripture for campus ministry",
      author: "UKCCU Ministry Team",
      pages: 48,
      downloadUrl: "#",
      category: "Leadership"
    },
    {
      title: "Evangelism in the 21st Century",
      description: "Practical approaches to sharing faith in modern contexts",
      author: "Dr. Sarah Kimani",
      pages: 32,
      downloadUrl: "#",
      category: "Evangelism"
    }
  ];

  const devotionals = [
    {
      title: "Daily Bread for Students",
      description: "30-day devotional specifically designed for university students",
      author: "Campus Ministry Network",
      duration: "30 days",
      downloadUrl: "#"
    },
    {
      title: "Walking with God Through Exams",
      description: "Finding peace and strength during academic pressure",
      author: "Rev. Grace Muthoni",
      duration: "14 days",
      downloadUrl: "#"
    },
    {
      title: "Identity in Christ",
      description: "Discovering who you are as a child of God",
      author: "UKCCU Discipleship Team",
      duration: "21 days",
      downloadUrl: "#"
    }
  ];

  const sermons = [
    {
      title: "The Power of Community",
      speaker: "Pastor David Mwangi",
      date: "March 15, 2024",
      duration: "35 min",
      audioUrl: "#",
      videoUrl: "#",
      description: "Understanding the importance of Christian fellowship and community"
    },
    {
      title: "Faith in Times of Uncertainty",
      speaker: "Dr. Ruth Wanjala",
      date: "March 8, 2024",
      duration: "42 min",
      audioUrl: "#",
      videoUrl: "#",
      description: "How to maintain faith when facing life's challenges"
    },
    {
      title: "Purpose-Driven Student Life",
      speaker: "Rev. Michael Kamau",
      date: "March 1, 2024",
      duration: "38 min",
      audioUrl: "#",
      videoUrl: "#",
      description: "Discovering and living out God's purpose for your academic journey"
    }
  ];

  const books = [
    {
      title: "Mere Christianity",
      author: "C.S. Lewis",
      description: "A foundational work on Christian apologetics and faith",
      category: "Apologetics",
      available: true
    },
    {
      title: "The Purpose Driven Life",
      author: "Rick Warren",
      description: "Discovering the meaning and purpose of life through God's plan",
      category: "Christian Living",
      available: true
    },
    {
      title: "Desiring God",
      author: "John Piper",
      description: "Meditations of a Christian hedonist on finding joy in God",
      category: "Theology",
      available: false
    },
    {
      title: "The Cost of Discipleship",
      author: "Dietrich Bonhoeffer",
      description: "A profound exploration of what it means to follow Christ",
      category: "Discipleship",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Grow in your faith with our collection of study materials, devotionals, and spiritual resources
          </p>
        </div>
      </section>

      {/* Online Bible Versions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Online Bible Reading</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access different Bible translations online for your personal study and devotion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bibleVersions.map((bible, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{bible.name}</CardTitle>
                    <Badge className={bible.color}>Online</Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {bible.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    onClick={() => window.open(bible.url, '_blank')}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Online
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Study Guides</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive guides to help you dive deeper into Scripture and Christian living
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p><strong>Author:</strong> {guide.author}</p>
                    <p><strong>Pages:</strong> {guide.pages}</p>
                    <Badge variant="outline">{guide.category}</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Devotionals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Daily Devotionals</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your day with God through these inspiring devotional resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {devotionals.map((devotional, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{devotional.title}</CardTitle>
                  <CardDescription>
                    {devotional.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p><strong>Author:</strong> {devotional.author}</p>
                    <p><strong>Duration:</strong> {devotional.duration}</p>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Devotional
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons & Messages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sermons & Messages</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Listen to inspiring messages from our leadership team and guest speakers
            </p>
          </div>

          <div className="space-y-6">
            {sermons.map((sermon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{sermon.title}</CardTitle>
                      <CardDescription className="mb-2">
                        {sermon.description}
                      </CardDescription>
                      <div className="text-sm text-gray-600">
                        <p><strong>Speaker:</strong> {sermon.speaker}</p>
                        <p><strong>Date:</strong> {sermon.date} • <strong>Duration:</strong> {sermon.duration}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4 md:mt-0">
                      <Button variant="outline" size="sm">
                        <Headphones className="h-4 w-4 mr-2" />
                        Audio
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="h-4 w-4 mr-2" />
                        Video
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recommended Reading</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential books for spiritual growth and Christian development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{book.title}</CardTitle>
                  <CardDescription>
                    <strong>by {book.author}</strong>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{book.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{book.category}</Badge>
                    <Badge className={book.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                      {book.available ? "Available" : "Coming Soon"}
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full" disabled={!book.available}>
                    <FileText className="h-4 w-4 mr-2" />
                    {book.available ? "Borrow Book" : "Not Available"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need a Specific Resource?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Can't find what you're looking for? Let us know what resources would help you in your spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              onClick={() => window.location.href = 'mailto:resources@ukccu.org?subject=Resource Request'}
            >
              <Mail className="h-5 w-5 mr-2" />
              Request Resource
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              <Users className="h-5 w-5 mr-2" />
              Join Study Group
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
