import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-hover',
  standalone: true, // Si estás usando Angular 14+ con componentes independientes
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './letter-hover.component.html',
  styleUrl: './letter-hover.component.css'
})
export class LetterHoverComponent implements OnInit {
  title: string = "Hi, I'm Mateo Hernández";
  subtitle: string = 'A Passionate Software Developer Creating Seamless Digital Experiences';

  titleLetters: string[] = [];
  subtitleLetters: string[] = [];

  ngOnInit(): void {
    this.titleLetters = this.splitTextIntoLetters(this.title);
    this.subtitleLetters = this.splitTextIntoLetters(this.subtitle);
  }

  splitTextIntoLetters(text: string): string[] {
    return text.split('').map((char) => (char === ' ' ? '&nbsp;' : char));
  }
}
