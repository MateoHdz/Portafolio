import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-hover',
  imports: [NgFor],
  templateUrl: './letter-hover.component.html',
  styleUrl: './letter-hover.component.css'
})
export class LetterHoverComponent implements OnInit{
  title: string = "Hi, I'm Mateo Hernández";
  subtitle: string = 'A Passionate Software Developer Creating Seamless Digital Experiences';

  titleLetters: string[] = [];
  subtitleLetters: string[] = [];

  ngOnInit(): void {
    // Dividir el título y el subtítulo en letras, reemplazando espacios con &nbsp;
    this.titleLetters = this.splitTextIntoLetters(this.title);
    this.subtitleLetters = this.splitTextIntoLetters(this.subtitle);
  }

  // Función para dividir el texto en letras, reemplazando espacios con &nbsp;
  splitTextIntoLetters(text: string): string[] {
    return text.split('').map((char) => (char === ' ' ? '&nbsp;' : char));
  }
}

