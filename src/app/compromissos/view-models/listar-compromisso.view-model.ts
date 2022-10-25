import { Time } from "@angular/common";
import { FormsContatoViewModel } from "src/app/contatos/view-models/forms-contato.view-model";
import { TipoLocalizacaoCompromissoEnum } from "./tipo-local-compromisso.enum";

export class ListarCompromissoViewModel {
  public id: string;
  public assunto: string;
  public data: string;
  public horaInicio: string;
  public horaTermino: string;
  public nomeContato: string;
}
