"use client";

import {
  Search,
  MapPin,
  Building2,
  Clock,
  Filter,
  Users,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


const CommunityHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Users className="w-8 h-8" />
        <h1 className="text-2xl font-bold">AI Pilipinas Cebu</h1>
      </div>
      <p className="text-lg mb-4">Empowering Cebu's AI Community</p>
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Cebu City, Philippines</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>500+ Members</span>
        </div>
      </div>
    </div>
  );
};

const SearchSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="flex gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            className="pl-10"
            placeholder="Search job titles, skills, or companies"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>
      <div className="flex gap-2">
        <Badge variant="secondary">Machine Learning</Badge>
        <Badge variant="secondary">Data Science</Badge>
        <Badge variant="secondary">Remote</Badge>
        <Badge variant="secondary">Entry Level</Badge>
      </div>
    </div>
  );
};

const JobCard = ({ job }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Building2 className="w-4 h-4" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
          </div>
          <Badge variant={job.type === "Full-time" ? "default" : "outline"}>
            {job.type}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-4">{job.description}</p>
        <div className="flex gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-50">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{job.posted}</span>
          </div>
          <Button variant="outline">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const CommunitySection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-lg">Upcoming Community Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-medium">
                AI Meetup: Machine Learning in Practice
              </h4>
              <p className="text-sm text-gray-600">
                Dec 15, 2024 • Cebu IT Park
              </p>
            </div>
            <Button variant="outline" className="ml-auto">
              RSVP
            </Button>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-medium">
                Workshop: Getting Started with AI Development
              </h4>
              <p className="text-sm text-gray-600">Dec 20, 2024 • Virtual</p>
            </div>
            <Button variant="outline" className="ml-auto">
              RSVP
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export {CommunityHeader, SearchSection, JobCard, CommunitySection}; 
