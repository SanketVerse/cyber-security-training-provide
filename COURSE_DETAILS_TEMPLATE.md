ssh -keygen# Course Details Template

## How to Add Course Information

To add detailed information for each course, edit the `courseData` object in `/app/courses/[courseId]/page.tsx`.

## Template for Each Course

```javascript
"course-id": {
  id: "course-id",
  title: "Course Title",
  subtitle: "Course Subtitle",
  description: "Detailed course description (2-3 sentences)",
  duration: "X-Y months",
  level: "Beginner/Intermediate/Advanced/Expert",
  modules: 8,
  price: "Contact for Pricing",
  icon: Shield, // Icon component
  features: [
    "Feature 1",
    "Feature 2", 
    "Feature 3",
    // Add 6-10 key features
  ],
  curriculum: [
    {
      module: "Module 1",
      title: "Module Title",
      topics: ["Topic 1", "Topic 2", "Topic 3", "Topic 4"]
    },
    {
      module: "Module 2", 
      title: "Module Title",
      topics: ["Topic 1", "Topic 2", "Topic 3", "Topic 4"]
    }
    // Add all modules
  ],
  prerequisites: "Prerequisites description",
  certification: "Certification details",
  placement: "Career opportunities description"
}
```

## Current Course IDs

1. `basic-cyber-security` - Basic Cyber Security Course
2. `intermediate-cyber-security` - Intermediate Cyber Security Course  
3. `advance-cyber-security` - Advance Cyber Security Course
4. `expert-cyber-security` - Expert Cyber Security Course
5. `certified-ethical-hacking` - Certified Ethical Hacking
6. `soc-analyst-1` - Security Operations Center Analyst 1
7. `soc-analyst-2` - Security Operations Center Analyst 2
8. `splunk-siem` - Splunk Admin, Developer & SIEM

## Example (Already Added)

The `basic-cyber-security` course is already configured as an example. You can follow this pattern for other courses.

## What Information to Provide

For each course, please provide:

1. **Basic Info**: Title, subtitle, description, duration, level
2. **Features**: 6-10 key learning outcomes
3. **Curriculum**: Detailed module breakdown with topics
4. **Prerequisites**: What students need before starting
5. **Certification**: What certificate they'll receive
6. **Placement**: Career opportunities after completion

## Features Added

✅ **Get Details** buttons on course cards
✅ **Dynamic routing** `/courses/[courseId]`
✅ **Professional course detail pages** with:
- Hero section with course info
- Course overview with stats
- Key features list
- Detailed curriculum
- Sidebar with course info
- Enrollment CTAs
- Contact information

✅ **Responsive design** for all devices
✅ **SEO optimized** with proper metadata
✅ **Integrated with existing design** system
