import { useState } from "react";
import { BookOpen, Download, Play, FileText, Music, Camera, Share2, ExternalLink, Search, Filter, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const resources = [
    {
      id: 1,
      title: "Daily Devotional Guide 2024",
      description: "Start each day with God's Word. A comprehensive daily devotional with scripture readings, reflections, and prayers.",
      category: "devotional",
      type: "PDF",
      size: "2.5 MB",
      downloads: 324,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      downloadUrl: "/resources/daily-devotional-2024.pdf",
      featured: true
    },
    {
      id: 2,
      title: "New Member's Handbook",
      description: "Everything you need to know about UKCCU - our beliefs, values, ministries, and how to get involved.",
      category: "handbook",
      type: "PDF",
      size: "1.8 MB",
      downloads: 189,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      downloadUrl: "/resources/new-member-handbook.pdf"
    },
    {
      id: 3,
      title: "Sunday Service Recordings - January 2024",
      description: "Audio recordings of all Sunday services from January 2024, including sermons and worship songs.",
      category: "audio",
      type: "MP3 Collection",
      size: "45.2 MB",
      downloads: 156,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop",
      downloadUrl: "/resources/sunday-services-jan-2024.zip"
    },
    {
      id: 4,
      title: "Bible Study Materials - Romans",
      description: "Comprehensive study guide for the Book of Romans with discussion questions and leader's notes.",
      category: "study",
      type: "PDF",
      size: "3.1 MB",
      downloads: 278,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop",
      downloadUrl: "/resources/romans-study-guide.pdf"
    },
    {
      id: 5,
      title: "Worship Songs Collection 2024",
      description: "Chord sheets and lyrics for all the worship songs we sing during our services.",
      category: "music",
      type: "PDF",
      size: "4.7 MB",
      downloads: 203,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      downloadUrl: "/resources/worship-songs-2024.pdf"
    },
    {
      id: 6,
      title: "Prayer Guide - 40 Days of Prayer",
      description: "A structured 40-day prayer journey with daily themes, scriptures, and prayer points.",
      category: "prayer",
      type: "PDF",
      size: "1.2 MB",
      downloads: 167,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop",
      downloadUrl: "/resources/40-days-prayer-guide.pdf"
    },
    {
      id: 7,
      title: "Youth Conference 2023 Highlights",
      description: "Video highlights from our amazing Youth Conference 2023 - testimonies, worship, and key messages.",
      category: "video",
      type: "MP4",
      size: "125.8 MB",
      downloads: 89,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop",
      downloadUrl: "/resources/youth-conference-2023-highlights.mp4"
    },
    {
      id: 8,
      title: "Financial Stewardship Workbook",
      description: "Learn biblical principles of money management and financial stewardship with practical exercises.",
      category: "study",
      type: "PDF",
      size: "2.9 MB",
      downloads: 134,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
      downloadUrl: "/resources/financial-stewardship-workbook.pdf"
    },
    {
      id: 9,
      title: "Campus Ministry Guidelines",
      description: "Guidelines and best practices for campus ministry, evangelism, and student outreach programs.",
      category: "handbook",
      type: "PDF",
      size: "1.5 MB",
      downloads: 98,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
      downloadUrl: "/resources/campus-ministry-guidelines.pdf"
    },
    {
      id: 10,
      title: "Marriage & Relationships Course",
      description: "Biblical foundations for healthy relationships and marriage preparation course materials.",
      category: "study",
      type: "PDF",
      size: "5.3 MB",
      downloads: 211,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=200&fit=crop",
      downloadUrl: "/resources/marriage-relationships-course.pdf"
    }
  ];

  const categories = [
    { value: "all", label: "All Resources", icon: BookOpen },
    { value: "devotional", label: "Devotionals", icon: BookOpen },
    { value: "study", label: "Bible Study", icon: FileText },
    { value: "audio", label: "Audio", icon: Music },
    { value: "video", label: "Video", icon: Play },
    { value: "music", label: "Music & Worship", icon: Music },
    { value: "handbook", label: "Handbooks", icon: FileText },
    { value: "prayer", label: "Prayer Resources", icon: BookOpen }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (resource: any) => {
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = resource.downloadUrl;
    link.download = resource.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // In a real application, you would track the download
    console.log(`Downloaded: ${resource.title}`);
  };

  const handleShare = (resource: any) => {
    const shareData = {
      title: resource.title,
      text: resource.description,
      url: `${window.location.origin}/resources/${resource.id}`
    };

    // Check if Web Share API is supported
    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      // Fallback to copying URL to clipboard
      const resourceUrl = `${window.location.origin}/resources/${resource.id}`;
      navigator.clipboard.writeText(resourceUrl).then(() => {
        alert('Resource link copied to clipboard! You can now share it.');
      }).catch(() => {
        // Further fallback - show share options
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Check out this resource: ${resource.title} - ${resourceUrl}`)}`;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resourceUrl)}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(resource.title)}&url=${encodeURIComponent(resourceUrl)}`;
        
        const shareWindow = window.open('', '_blank', 'width=500,height=400');
        shareWindow?.document.write(`
          <html>
            <head><title>Share Resource</title></head>
            <body style="font-family: Arial, sans-serif; padding: 20px;">
              <h2>Share "${resource.title}"</h2>
              <p>Choose a platform to share this resource:</p>
              <a href="${whatsappUrl}" target="_blank" style="display: block; margin: 10px 0; padding: 10px; background: #25D366; color: white; text-decoration: none; border-radius: 5px;">Share on WhatsApp</a>
              <a href="${facebookUrl}" target="_blank" style="display: block; margin: 10px 0; padding: 10px; background: #1877F2; color: white; text-decoration: none; border-radius: 5px;">Share on Facebook</a>
              <a href="${twitterUrl}" target="_blank" style="display: block; margin: 10px 0; padding: 10px; background: #1DA1F2; color: white; text-decoration: none; border-radius: 5px;">Share on Twitter</a>
              <p style="margin-top: 20px;"><strong>Or copy this link:</strong></p>
              <input type="text" value="${resourceUrl}" style="width: 100%; padding: 5px;" readonly onclick="this.select()">
            </body>
          </html>
        `);
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Resources & Downloads</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Access our collection of spiritual resources, study materials, and multimedia content to support your faith journey
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
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
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="flex items-center space-x-1 hover:shadow-md transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>

          {/* Featured Resource */}
          {filteredResources.filter(resource => resource.featured).map(resource => (
            <Card key={resource.id} className="mb-8 overflow-hidden border-2 border-green-600">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-yellow-500 text-white">FEATURED</Badge>
                    <Badge variant="outline" className="capitalize">{resource.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">{resource.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{resource.description}</CardDescription>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <span>Type: {resource.type}</span>
                    <span>Size: {resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => handleDownload(resource)}
                      className="hover:shadow-lg transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleShare(resource)}
                      className="hover:shadow-lg transition-all duration-300"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">All Resources</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of spiritual resources and study materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.filter(resource => !resource.featured).map(resource => (
              <Card key={resource.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge variant="outline" className="absolute top-2 left-2 bg-white capitalize">
                    {resource.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{resource.downloads} downloads</p>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      className="flex-1 hover:shadow-md transition-all duration-300"
                      onClick={() => handleDownload(resource)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleShare(resource)}
                      className="hover:shadow-md transition-all duration-300"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help or Have a Request?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact our resources team for assistance or to request specific materials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Mail className="h-5 w-5 mr-2" />
              Contact Resources Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              <ExternalLink className="h-5 w-5 mr-2" />
              Visit Online Library
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
