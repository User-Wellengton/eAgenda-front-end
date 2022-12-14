import { Time } from "@angular/common";
import { Timestamp } from "rxjs";
import { FormsContatoViewModel } from "src/app/contatos/view-models/forms-contato.view-model";
import { TipoLocalizacaoCompromissoEnum } from "./tipo-local-compromisso.enum";


export class VisualizarCompromissoViewModel {
  id: string;
  assunto: string;
  tipoLocalizacaoCompromisso: TipoLocalizacaoCompromissoEnum;
  local: string;
  link: string;
  data: Date;
  horaInicio: Timestamp<string>;
  horaTermino: Timestamp<string>;
  contato: FormsContatoViewModel;
  contatoId: string;

}
