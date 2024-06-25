import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Index = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const storedJobListings = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobListings(storedJobListings);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Job Listing Website</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Search for Jobs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="job-title">Job Title</Label>
            <Input id="job-title" placeholder="Enter job title" />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter location" />
          </div>
          <div>
            <Label htmlFor="job-type">Job Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full">Search</Button>
        </CardContent>
      </Card>
      <Link to="/post-job">
        <Button className="mt-4">Post a Job</Button>
      </Link>
      <div className="w-full max-w-md mt-8 space-y-4">
        {jobListings.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.jobTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Company:</strong> {job.companyName}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.jobType}</p>
              <p>{job.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;