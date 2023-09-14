import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Vishal'],
    ['DOB', '29/03/1998'],
    ['Work Exp', '2.6 Years'],
    ['Education', 'B.tech (2020)'],
    ['Interests', 'Front-End, Cloud, Open source'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 2.5 years of experience in software industry.',
    'Software Engineer at Genpact, I help Elevate User Exp, Amplify User Retention by 5x',
    'Experienced in Agile Software development life cycle as Front-End/Full stack/Software developer having knowledge in Angular, Bootstrap, Javascript, Typescript, CSS3, HTML5. Python3, REST API, GraphQL, CodeQL.',
    'Im enthusiastic about technologies like Open-Source, Front-End, Cloud, Software testing, Cryptography.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
