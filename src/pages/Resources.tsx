import { BookOpen, Download, ExternalLink, Calendar, Clock, User, Search, Filter, Share2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = [
    {
      id: 1,
      title: "New Believer's Guide to Faith",
      description: "A comprehensive guide for new Christians covering the basics of faith, prayer, Bible reading, and Christian living.",
      category: "study-guide",
      type: "PDF",
      author: "UKCCU Leadership Team",
      dateAdded: "2024-01-15",
      downloads: 156,
      size: "2.3 MB",
      pages: 24,
      featured: true,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Daily Devotional - Walking with Christ",
      description: "A 30-day devotional journey designed to deepen your relationship with Jesus through daily scripture reading and reflection.",
      category: "devotional",
      type: "PDF",
      author: "Pastor David Mwangi",
      dateAdded: "2024-01-20",
      downloads: 203,
      size: "1.8 MB",
      pages: 35,
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Prayer Guide for Students",
      description: "Learn different types of prayer and how to develop a consistent prayer life while managing academic responsibilities.",
      category: "prayer",
      type: "PDF",
      author: "Grace Wanjiku",
      dateAdded: "2024-01-10",
      downloads: 89,
      size: "1.2 MB",
      pages: 16,
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Bible Study Method Workshop",
      description: "Video series teaching effective Bible study methods including inductive study, topical studies, and character studies.",
      category: "bible-study",
      type: "Video Series",
      author: "Sarah Achieng",
      dateAdded: "2024-01-25",
      downloads: 124,
      duration: "2.5 hours",
      parts: 6,
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Leadership in the Christian Context",
      description: "A study on biblical leadership principles and their application in Christian ministry and everyday life.",
      category: "leadership",
      type: "eBook",
      author: "Elder John Kamau",
      dateAdded: "2024-01-05",
      downloads: 78,
      size: "3.1 MB",
      pages: 42,
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Worship and Music Resources",
      description: "Collection of contemporary Christian songs, chord charts, and worship leading guidelines for musicians.",
      category: "worship",
      type: "Audio/PDF",
      author: "Peter Otieno",
      dateAdded: "2024-01-30",
      downloads: 167,
      size: "15.2 MB",
      songs: 25,
      downloadUrl: "#"
    },
    {
      id: 7,
      title: "Evangelism Training Manual",
      description: "Practical guide to sharing your faith effectively, including conversation starters and common questions answered.",
      category: "evangelism",
      type: "PDF",
      author: "Faith Njeri",
      dateAdded: "2024-01-12",
      downloads: 92,
      size: "2.8 MB",
      pages: 28,
      downloadUrl: "#"
    },
    {
      id: 8,
      title: "Marriage and Relationships - God's Design",
      description: "Biblical perspectives on dating, courtship, and marriage for young adults navigating relationships.",
      category: "relationships",
      type: "PDF",
      author: "Dr. Ruth Mbugua",
      dateAdded: "2024-01-18",
      downloads: 134,
      size: "2.1 MB",
      pages: 31,
      downloadUrl: "#"
    },
    {
      id: 9,
      title: "Financial Stewardship for Students",
      description: "Learn biblical principles of money management, budgeting, and giving while in university.",
      category: "stewardship",
      type: "PDF",
      author: "Mary Nyambura",
      dateAdded: "2024-01-22",
      downloads: 76,
      size: "1.9 MB",
      pages: 20,
      downloadUrl: "#"
    },
    {
      id: 10,
      title: "Missions and Global Outreach Guide",
      description: "Understanding God's heart for missions and how students can get involved in local and global missions.",
      category: "missions",
      type: "PDF",
      author: "Pastor Michael Otieno",
      dateAdded: "2024-01-08",
      downloads: 64,
      size: "2.5 MB",
      pages: 26,
      downloadUrl: "#"
    }
  ];

  const categories = [
    { value: "all", label: "All Resources" },
    { value: "study-guide", label: "Study Guides" },
    { value: "devotional", label: "Devotionals" },
    { value: "bible-study", label: "Bible Study" },
    { value: "prayer", label: "Prayer Resources" },
    { value: "leadership", label: "Leadership" },
    { value: "worship", label: "Worship & Music" },
    { value: "evangelism", label: "Evangelism" },
    { value: "relationships", label: "Relationships" },
    { value: "stewardship", label: "Stewardship" },
    { value: "missions", label: "Missions" }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResource = resources.find(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  const handleDownload = (resource: any) => {
    // Simulate download
    console.log(`Downloading: ${resource.title}`);
    // In a real app, this would trigger an actual download
    window.open(resource.downloadUrl, '_blank');
  };

  const handleShare = (resource: any) => {
    const shareData = {
      title: resource.title,
      text: resource.description,
      url: window.location.origin + '/resources#' + resource.id,
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${resource.title} - ${shareData.url}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Free Resources & Materials</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Growing in faith together through free resources, study guides, and spiritual materials for every believer
          </p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources for Your Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a new believer or have been walking with Christ for years, 
            these carefully curated resources will help you grow deeper in faith, 
            understand God's word better, and live out your calling with purpose.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      {featuredResource && selectedCategory === "all" && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="bg-yellow-500 text-white mb-4">FEATURED RESOURCE</Badge>
              <h2 className="text-2xl font-bold text-gray-900">Most Helpful</h2>
            </div>
            <Card className="overflow-hidden border-2 border-blue-600">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{featuredResource.type}</h3>
                    <p className="opacity-90">{featuredResource.pages} pages</p>
                    <p className="opacity-90">{featuredResource.size}</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <Badge variant="outline" className="mb-4 capitalize">
                    {featuredResource.category.replace('-', ' ')}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredResource.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{featuredResource.description}</p>
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredResource.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredResource.dateAdded)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button onClick={() => handleDownload(featuredResource)}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Resource
                    </Button>
                    <Button variant="outline" onClick={() => handleShare(featuredResource)}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Resources Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === "all" ? "All Resources" : `${categories.find(c => c.value === selectedCategory)?.label} Resources`}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularResources.map(resource => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="capitalize">
                      {resource.category.replace('-', ' ')}
                    </Badge>
                    <Badge className="bg-blue-600 text-white">
                      {resource.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(resource.dateAdded)}</span>
                    </div>
                    {resource.size && (
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>
                          {resource.pages && `${resource.pages} pages, `}
                          {resource.size}
                        </span>
                      </div>
                    )}
                    {resource.duration && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{resource.duration}, {resource.parts} parts</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" onClick={() => handleDownload(resource)}>
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleShare(resource)}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Looking for Something Specific?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Can't find what you're looking for? Let us know what resources would help you in your spiritual journey, and we'll do our best to provide them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Request a Resource
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              Suggest Content
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
