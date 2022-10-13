import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { VisualizarContatoViewModel } from '../view-models/forms-contato.view-model';

@Component({
  selector: 'app-excluir-contato',
  templateUrl: './excluir-contato.component.html',
  styles: [
  ]
})
export class ExcluirContatoComponent implements OnInit {
  public contatoFormVM: VisualizarContatoViewModel = new VisualizarContatoViewModel();

  constructor(titulo: Title,
    private route: ActivatedRoute,
    private router: Router,
    private contatoService: ContatoService
  ) {
    titulo.setTitle('Excluir Contato - e-Agenda')
  }

  ngOnInit(): void {
    this.contatoFormVM = this.route.snapshot.data['contato'];
    this.contatoFormVM.id = this.route.snapshot.params['id'];
  }

  public gravar() {
    this.contatoService.excluir(this.contatoFormVM.id)
      .subscribe({
        next: (contatoId) => this.processarSucesso(contatoId),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(contatoId: string): void {
    this.router.navigate(['/contatos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.error(erro);
    }
  }

};
