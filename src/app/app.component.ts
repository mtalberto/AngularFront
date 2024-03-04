import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquiposComponent } from './equipos/equipos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EquiposComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoDeAprendizaje';
}
