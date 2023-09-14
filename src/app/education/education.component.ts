import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "University of Petroleum and Energy Studies",
      course: 'B.tech in computer science',
      duration: '2016-2020',
      score: '6.3 CGPA',
    },
    {
      institute: 'The Air Force School, Subroto Park',
      course: 'HSC',
      duration: '2015-2016',
      score: '80%',
    },
    {
      institute: 'The Air force School, Jaisalmer',
      course: 'SSC',
      duration: '2013-2014',
      score: '86%',
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
