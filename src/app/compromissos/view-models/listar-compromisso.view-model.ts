import { FormsContatoViewModel } from "src/app/contatos/view-models/forms-contato.view-model";

export class ListarCompromissoViewModel {
  id: string;
  assunto: string;
  data: string;
  horaInicio: string;
  horaTermino: string;
  nomeContato: FormsContatoViewModel;
}
