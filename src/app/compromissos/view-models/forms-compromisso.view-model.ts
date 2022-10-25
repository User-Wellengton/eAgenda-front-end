import { Timestamp } from "rxjs";
import { FormsContatoViewModel } from "src/app/contatos/view-models/forms-contato.view-model";
import { TipoLocalizacaoCompromissoEnum } from "./tipo-local-compromisso.enum";

export class FormsCompromissoViewModel {
  public id: string;
  public assunto: string;
  public tipoLocalizacaoCompromisso: TipoLocalizacaoCompromissoEnum;
  public local: string;
  public link: string;
  public data: Date;
  public horaInicio: Timestamp<string>;
  public horaTermino: Timestamp<string>;
  public contato: FormsContatoViewModel;
  public contatoId: string;
}
