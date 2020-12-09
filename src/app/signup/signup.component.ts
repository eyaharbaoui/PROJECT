import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  specs = ["DS","GL","WEB"]
  nom = "harbeouiiiiii"
  etudiants= [
    {
      nom:'Mohamed',
      age: 25,
      spec:"DS",
      sexe:"M"

    },
    {
      nom:'eya',
      age: 23,
      spec:"GL",
      sexe:"F"
    },
    {
      nom:'Syrine',
      age: 24,
      spec:"WEB",
      sexe:"F"

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
