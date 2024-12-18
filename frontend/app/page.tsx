"use client";
import {CommunityHeader, SearchSection,JobCard, CommunitySection} from "@/components/utils/home";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function App() {
  const [activeTab, setActiveTab] = useState("all");

  const jobs = [
    {
      title: "AI Research Engineer",
      company: "TechHub Cebu",
      location: "Cebu Business Park",
      type: "Full-time",
      description:
        "Join our research team in developing cutting-edge AI solutions for local businesses.",
      skills: ["Python", "TensorFlow", "Machine Learning"],
      posted: "Posted 2 days ago",
    },
    {
      title: "Machine Learning Developer",
      company: "InnovateX",
      location: "Remote - Philippines",
      type: "Contract",
      description:
        "Looking for ML developers to work on exciting computer vision projects.",
      skills: ["PyTorch", "Computer Vision", "Deep Learning"],
      posted: "Posted 3 days ago",
    },
    {
      title: "Junior Data Scientist",
      company: "Cebu AI Solutions",
      location: "IT Park, Cebu",
      type: "Full-time",
      description:
        "Great opportunity for fresh graduates interested in data science and analytics.",
      skills: ["Python", "SQL", "Data Analysis"],
      posted: "Posted 1 week ago",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <CommunityHeader />
      <SearchSection />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Jobs</TabsTrigger>
              <TabsTrigger value="fulltime">Full-time</TabsTrigger>
              <TabsTrigger value="contract">Contract</TabsTrigger>
              <TabsTrigger value="remote">Remote</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <CommunitySection />

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Community Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-medium">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Open Positions</span>
                  <span className="font-medium">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Companies Hiring</span>
                  <span className="font-medium">12</span>
                </div>
                <Button className="w-full">Join Community</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
 
}  

export default App;
