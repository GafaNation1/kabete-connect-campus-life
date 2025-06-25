
import { useState } from "react";
import { Calendar, Camera, Users, Heart, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // 50+ placeholder images for the gallery
  const galleryImages = [
    // Worship & Service Images
    { id: 1, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop", title: "Sunday Worship Service", category: "worship", date: "2024-01-15" },
    { id: 2, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop", title: "Praise and Worship", category: "worship", date: "2024-01-22" },
    { id: 3, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", title: "Community Worship", category: "worship", date: "2024-02-05" },
    { id: 4, src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop", title: "Worship Team Practice", category: "worship", date: "2024-02-12" },
    { id: 5, src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop", title: "Evening Worship", category: "worship", date: "2024-02-19" },

    // Fellowship & Community Images
    { id: 6, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop", title: "Fellowship Gathering", category: "fellowship", date: "2024-01-10" },
    { id: 7, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop", title: "Small Group Meeting", category: "fellowship", date: "2024-01-17" },
    { id: 8, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop", title: "Youth Fellowship", category: "fellowship", date: "2024-01-24" },
    { id: 9, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop", title: "Community Dinner", category: "fellowship", date: "2024-01-31" },
    { id: 10, src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop", title: "Student Fellowship", category: "fellowship", date: "2024-02-07" },

    // Events & Conferences
    { id: 11, src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop", title: "Youth Conference 2024", category: "events", date: "2024-03-15" },
    { id: 12, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop", title: "Leadership Retreat", category: "events", date: "2024-03-22" },
    { id: 13, src: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&h=300&fit=crop", title: "Campus Revival", category: "events", date: "2024-04-05" },
    { id: 14, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop", title: "Prayer Conference", category: "events", date: "2024-04-12" },
    { id: 15, src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=300&fit=crop", title: "Missions Conference", category: "events", date: "2024-04-19" },

    // Outreach & Community Service
    { id: 16, src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", title: "Community Outreach", category: "outreach", date: "2024-02-14" },
    { id: 17, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop", title: "Feeding Program", category: "outreach", date: "2024-02-21" },
    { id: 18, src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=400&h=300&fit=crop", title: "Hospital Visit", category: "outreach", date: "2024-02-28" },
    { id: 19, src: "https://images.unsplash.com/photo-1594149595248-91f136e10368?w=400&h=300&fit=crop", title: "School Ministry", category: "outreach", date: "2024-03-07" },
    { id: 20, src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", title: "Street Evangelism", category: "outreach", date: "2024-03-14" },

    // Bible Study & Teaching
    { id: 21, src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop", title: "Bible Study Session", category: "study", date: "2024-01-03" },
    { id: 22, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", title: "Teaching Ministry", category: "study", date: "2024-01-10" },
    { id: 23, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop", title: "Scripture Study", category: "study", date: "2024-01-17" },
    { id: 24, src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop", title: "Discipleship Class", category: "study", date: "2024-01-24" },
    { id: 25, src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop", title: "Book Study Group", category: "study", date: "2024-01-31" },

    // More Fellowship Images
    { id: 26, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop", title: "Campus Fellowship", category: "fellowship", date: "2024-02-14" },
    { id: 27, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop", title: "Prayer Circle", category: "fellowship", date: "2024-02-21" },
    { id: 28, src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop", title: "Group Discussion", category: "fellowship", date: "2024-02-28" },
    { id: 29, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop", title: "Fellowship Meal", category: "fellowship", date: "2024-03-07" },
    { id: 30, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop", title: "Student Gathering", category: "fellowship", date: "2024-03-14" },

    // Additional Worship Images
    { id: 31, src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop", title: "Choir Performance", category: "worship", date: "2024-03-01" },
    { id: 32, src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop", title: "Musical Worship", category: "worship", date: "2024-03-08" },
    { id: 33, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop", title: "Worship Night", category: "worship", date: "2024-03-15" },
    { id: 34, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop", title: "Sunday Service", category: "worship", date: "2024-03-22" },
    { id: 35, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", title: "Corporate Worship", category: "worship", date: "2024-03-29" },

    // More Events
    { id: 36, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop", title: "Graduation Ceremony", category: "events", date: "2024-04-26" },
    { id: 37, src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop", title: "Anniversary Celebration", category: "events", date: "2024-05-03" },
    { id: 38, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop", title: "Fundraising Event", category: "events", date: "2024-05-10" },
    { id: 39, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300&fit=crop", title: "Sports Day", category: "events", date: "2024-05-17" },
    { id: 40, src: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=400&h=300&fit=crop", title: "Cultural Night", category: "events", date: "2024-05-24" },

    // Additional Study & Teaching
    { id: 41, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", title: "Leadership Training", category: "study", date: "2024-04-07" },
    { id: 42, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop", title: "Theology Class", category: "study", date: "2024-04-14" },
    { id: 43, src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop", title: "Mentorship Session", category: "study", date: "2024-04-21" },
    { id: 44, src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop", title: "Scripture Memorization", category: "study", date: "2024-04-28" },
    { id: 45, src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop", title: "Biblical Studies", category: "study", date: "2024-05-05" },

    // More Outreach
    { id: 46, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop", title: "Children's Ministry", category: "outreach", date: "2024-05-12" },
    { id: 47, src: "https://images.unsplash.com/photo-1594149595248-91f136e10368?w=400&h=300&fit=crop", title: "Community Service", category: "outreach", date: "2024-05-19" },
    { id: 48, src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", title: "Medical Camp", category: "outreach", date: "2024-05-26" },
    { id: 49, src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=400&h=300&fit=crop", title: "Orphanage Visit", category: "outreach", date: "2024-06-02" },
    { id: 50, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop", title: "Prison Ministry", category: "outreach", date: "2024-06-09" },

    // Final set to reach 50+
    { id: 51, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop", title: "New Members Welcome", category: "fellowship", date: "2024-06-16" },
    { id: 52, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop", title: "Special Service", category: "worship", date: "2024-06-23" },
    { id: 53, src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop", title: "Testimony Night", category: "events", date: "2024-06-30" }
  ];

  const categories = [
    { value: "all", label: "All Photos" },
    { value: "worship", label: "Worship & Music" },
    { value: "fellowship", label: "Fellowship" },
    { value: "events", label: "Events & Conferences" },
    { value: "outreach", label: "Outreach & Service" },
    { value: "study", label: "Bible Study & Teaching" }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         image.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Capturing moments of faith, fellowship, and service in our community
          </p>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Photos</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Events</p>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-600">Members</p>
            </div>
            <div>
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">5</h3>
              <p className="text-gray-600">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
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
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Showing {filteredImages.length} of {galleryImages.length} photos
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-80">{new Date(image.date).toLocaleDateString()}</p>
                    <span className="inline-block bg-blue-600 text-xs px-2 py-1 rounded mt-2 capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Photo Submission */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Share Your Photos</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Have photos from our events? We'd love to include them in our gallery! 
            Share your memories with the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Camera className="h-5 w-5 mr-2" />
              Submit Photos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              Photo Guidelines
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
