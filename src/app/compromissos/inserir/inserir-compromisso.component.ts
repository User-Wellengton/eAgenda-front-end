import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from 'src/app/contatos/services/contato.service';
import { ListarContatoViewModel } from 'src/app/contatos/view-models/listar-contato.view-model';
import { CompromissoService } from '../services/compromisso.service';
import { FormsCompromissoViewModel } from '../view-models/forms-compromisso.view-model';
import { TipoLocalizacaoCompromissoEnum } from '../view-models/tipo-local-compromisso.enum';

@Component({
  selector: 'app-inserir-compromisso',
  templateUrl: './inserir-compromisso.component.html'


})
export class InserirCompromissoComponent implements OnInit {

  public formCompromisso: FormGroup;
  public compromissoFormVM: FormsCompromissoViewModel = new FormsCompromissoViewModel();
  public contatos = this.contatoService.selecionarTodos();

  public tipoLocal = Object.values(TipoLocalizacaoCompromissoEnum)
    .filter(v => !Number.isFinite(v));



  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private router: Router,

    private compromissoService: CompromissoService,
    private contatoService: ContatoService,


  ) {
    titulo.setTitle('Cadastrar Compromisso - e-Agenda')
  }

  ngOnInit(): void {
    this.formCompromisso = this.formBuilder.group({
      assunto: ['', [Validators.required, Validators.minLength(3)]],
      tipoLocalizacaoCompromisso: [''],
      local: [''],
      link: [''],
      data: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaTermino: ['', [Validators.required]],
      contato: [''],
      contatoId: ['', [Validators.required]]
    });

    this.processarTipoCompromisso();

  }

  get assunto() {
    return this.formCompromisso.get('assunto');
  }

  get tipoLocalizacaoCompromisso() {
    return this.formCompromisso.get('tipoLocalizacaoCompromisso');
  }

  get local() {
    return this.formCompromisso.get('local');
  }

  get link() {
    return this.formCompromisso.get('link');
  }


  get data() {
    return this.formCompromisso.get('data');
  }


  get horaInicio() {
    return this.formCompromisso.get('horaInicio');
  }


  get horaTermino() {
    return this.formCompromisso.get('horaTermino');
  }


  get contato() {
    return this.formCompromisso.get('contato');
  }


  get contatoId() {
    return this.formCompromisso.get('contatoId');
  }


  public gravar() {
    if (this.formCompromisso.invalid) return;

    this.compromissoFormVM = Object.assign({}, this.compromissoFormVM, this.formCompromisso.value);

    this.compromissoService.inserir(this.compromissoFormVM)
      .subscribe({
        next: (compromissoInserido) => this.processarSucesso(compromissoInserido),
        error: (erro) => this.processarFalha(erro)
      });
  }

  private processarSucesso(tarefa: FormsCompromissoViewModel) {
    this.router.navigate(['/compromissos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro)
      console.log(erro);
  }

  //se selecionar tipo local compromisso : se for remoto coloca o link , se for presencial o local

  private processarTipoCompromisso(): void {
    this.tipoLocalizacaoCompromisso?.valueChanges
      .subscribe(valor => {
        if (valor === TipoLocalizacaoCompromissoEnum.Presencial) {
          this.local?.enable();
          this.local?.setValidators([Validators.required, Validators.minLength(3)]);
          this.local?.reset();
          this.link?.clearValidators();
          this.link?.disable();
        }
        else {
          this.link?.enable();
          this.link?.setValidators([Validators.required, Validators.minLength(3)]);
          this.link?.reset();
          this.local?.clearValidators();
          this.local?.disable();
        }
      }
      )
  }
}


