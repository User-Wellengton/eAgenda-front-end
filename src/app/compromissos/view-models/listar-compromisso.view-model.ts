import { Time } from "@angular/common";
import { FormsContatoViewModel } from "src/app/contatos/view-models/forms-contato.view-model";
import { TipoLocalizacaoCompromissoEnum } from "./tipo-local-compromisso.enum";

export class ListarCompromissoViewModel {
  public id: string;
  public assunto: string;
  public tipoLocalizacaoCompromisso: TipoLocalizacaoCompromissoEnum;
  public local: string;
  public link: string;
  public data: Date;
  public contato: FormsContatoViewModel;
}
