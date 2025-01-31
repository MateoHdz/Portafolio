import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LetterHoverComponent } from './letter-hover/letter-hover.component';

@Component({
  selector: 'app-root',
  imports: [LetterHoverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        /* document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        }); */
    });
});

// Simple animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.classList.add('animate__fadeInUp');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const text: HTMLElement | null = document.querySelector('.text-center');

  if (text) {
    const letters: string[] = text.textContent?.split('') || [];
    text.textContent = ''; // Limpiamos el contenido original

    letters.forEach((letter: string) => {
      const span: HTMLSpanElement = document.createElement('span');
      span.textContent = letter;
      span.classList.add('letter');
      text.appendChild(span);
    });
  }
});
