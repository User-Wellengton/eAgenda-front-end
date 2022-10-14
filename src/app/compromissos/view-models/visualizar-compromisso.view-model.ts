import { TipoLocalizacaoCompromissoEnum } from "./tipo-local-compromisso.enum";

export class VisualizarCompromissoViewModel {
  id: string;
  assunto: string;
  local: string;
   TipoLocal: TipoLocalizacaoCompromissoEnum;
  link: string;
  data: string;
  horaInicio: string;
  horaTermino: string;

}
