import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Consultant',
      company: 'Genpact India (G)',
      duration: 'Feb 2021 - Now',
      description: [
        'Developed Web-Application related to Gas-Power and Aero-alliance with General Electric (GE)',
        'Worked with all StakeHolders in Requirenment Gathering , Which reduced schedule over-run by 80%',
        'Implemented Modern UX Design,Resulting in Easy Data Monitoring and Analysis. Which reduced stakeholder decision fatigue.',
        'Optimised Web Applications, which reduced load time, Increasing overall User Experience',
      ],
    },
    {
      role: 'Software Intern',
      company: 'Vinove',
      duration: 'Mar 2020 - Jun 2020',
      description: [
        'Learned HTML, CSS, JavaScript made a prototype project',
        'Helped Team solve complex bugs in the application',
      ],
    },
    {
      role: 'Software Intern',
      company: 'UPES',
      duration: 'Jul 2019 - Oct 2019',
      description: [
        'Worked on university internal project of student management',
        'Worked on various skills like python, javascript, Tableau',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}

