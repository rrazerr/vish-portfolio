import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Ellite',
      technologies: 'AWS, Angular, Bootstrap, RestAPI',
      description: [
        'Ellite is an application in the GAS-POWER portfolio. ',
        'Owned end-to-end responsibility for developing components following agile development. ',
        'Worked with the backend team for API integration.',
        'Solved backlogged bugs in the application. Which overall increased revenue by 70%.',
      ],
    },
    {
      title: 'Security Services',
      technologies: 'CodeQl, GraphQL, shell Script, Ansible, Cloud Security, GitHub',
      description: [
        'Orchestrated the seamless migration of on-premises infrastructure to GitHub Cloud, resulting in a 40% reduction in maintenance costs and improved scalability for security services. ',
        'Conducted comprehensive security assessments to identify and rectify vulnerabilities, enhancing the protection of data and systems during the migration project, and safeguarding company assets.',
        
      ],
    },
    {
      title: 'Smartshop',
      technologies: 'HTML, CSS, JS, Angular, MySQL, AWS, GitHub',
      description: [
        'Smartshop is an aero project related to the servicing of aero products. ',
        'Worked as a support engineer, closely with data analysts, and a functional team.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
