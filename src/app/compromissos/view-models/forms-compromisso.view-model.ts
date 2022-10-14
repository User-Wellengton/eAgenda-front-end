import { TipoLocalizacaoCompromissoEnum } from "./tipo-local-compromisso.enum";

export class FormsCompromissoViewModel {

  id: string;
  assunto: string;
  local: string;
  tipoLocal: TipoLocalizacaoCompromissoEnum;
  link: string;
  data: string;
  horaInicio: string;
  horaTermino: string;
  contatoId: string;

}
