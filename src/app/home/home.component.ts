import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemExpanded: Map<string, boolean> = new Map();
  workExperienceItems: Array<Object>;
  certificatesItems: Array<Object>;
  educationItems: Array<Object>;
  achievementsItems: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.workExperienceItems = [
      { url: 'https://www.linkedin.com/company/kumulus-soft/about/', title: 'Software Engineer @ Kumulus Soft', dateRange: '12/2018 - Present', content: 'Implemented cloud solutions using AWS. Designed and implemented serverless microservices. Implemented RESTful APIs to support client applications. Built frontend clients for development and production. Used Lambda, DynamoDB, S3, API Gateway, RDS, Neptune.' },
      { url: 'https://www.microsoft.com/sr-latn-rs/mdcs', title: 'Intern Software Engineer @ Microosft', dateRange: '08/2018 – 11/2018', content: 'Built Office-Addin which will help students to learn and practice math problems. Combined and integrated services from multiple Office products. Implemented both frontend and backend: C++, C#, TypeScript, React.' },
      { url: 'https://www.microsoft.com/sr-latn-rs/mdcs', title: 'Intern Software Engineer @ Microsoft', dateRange: '08/2017 – 12/2017', content: 'Created an internal Big Data tool that provides insights about system health and performance. The tool helps to discover performance bottlenecks and quickly recover from failures. Developed with C# and proprietary Big Data Engines.' },
      { url: 'http://www.koraknapred.rs/', title: 'Programming Lecturer @ Korak Napred', dateRange: '10/2016 – 08/2018', content: 'Preparing high school students for national programming competitions. Teaching advanced computer science topics such as dynamic programming, graph theory, data structures.' }
    ];

    this.certificatesItems = [
      { url: 'https://aws.amazon.com/certification/', title: 'AWS Certified Big Data - Specialty', dateRange: '11/2019', content: 'Implement core AWS Big Data services according to basic architecture best practices.Design and maintain Big Data. Leverage tools to automate data analysis.' },
      { url: 'https://aws.amazon.com/certification/', title: 'AWS Certified Sysops Administrator Associate', dateRange: '03/2019', content: 'Deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS. Implement and control the flow of data to and from AWS. Select the appropriate AWS service based on compute, data, or security requirements.' },
      { url: 'https://aws.amazon.com/certification/', title: 'AWS Certified Developer Associate', dateRange: '01/2019', content: 'Demonstrate an understanding of core AWS services, uses, and basic AWS architecture best practices. Demonstrate proficiency in developing, deploying, and debugging cloud-based applications using AWS.' },
      { url: 'https://aws.amazon.com/certification/', title: 'AWS Certified Solutions Architect Associate', dateRange: '11/2018', content: 'Effectively demonstrate knowledge of how to architect and deploy secure and robust applications on AWS technologies. Define a solution using architectural design principles based on customer requirements. Provide implementation guidance based on best practices to the organization throughout the lifecycle of the project.' }
    ];

    this.educationItems = [
      { url: 'https://raf.edu.rs/', title: 'Faculty of Computing, Computer Science', dateRange: '2016 - Present', content: 'Currantly a Computer Science student at the Faculty of Computing in Belgrade. Final year student. Expected graduation in 2020.' },
      { url: '#', title: 'Grammar School Ivo Andric', dateRange: '2012 - 2016', content: 'High School finished in Visegrad, Bosnia and Herzegovina from 2012 to 2016.' }
    ]

    this.achievementsItems = [
      { url: 'http://hakaton.fonis.rs/', title: 'FON Hackathon - 1st Place', dateRange: '04/2018', content: 'Distributed cloud-based analysis system that consumes and processes telco data to create interactive data visualization. The app contains a tool for personalized package recommendation, which uses clustering as well as a tool for detecting irregularities in the network in real-time.' },
      { url: 'https://stats.ioinformatics.org/people/5855', title: 'International Olympiad in Informatics', dateRange: '08/2016', content: 'Member of the four-man team that represented Bosnia and Herzegovina.' },
      { url: 'http://boi2016.euc.ac.cy/welcome-to-boi-2016/competition/tasks/', title: 'Balkan Olympiad in Informatics - Bronze Medal', dateRange: '07/2016', content: 'Member of the four-man team that represented Bosnia and Herzegovina. Individually won the Bronze Medal' }
    ]
  }

  toggleElement(e) {
    let id = e.currentTarget.id;
    let expanded = this.itemExpanded.get(id);
    this.itemExpanded.set(id, !expanded);
  }

  isExpanded(id: string): boolean {
    if (!this.itemExpanded.has(id)) {
      this.itemExpanded.set(id, true);
    }
    return this.itemExpanded.get(id);
  }
}
