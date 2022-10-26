import { FormsCategoriaViewModel } from "src/app/categorias/view-models/forms-categoria.view-model";

export class FormsDespesaViewModel {
  id: string;
  descricao: string;
  valor: number;
  data: Date;
  formaPagamento: FormaPagamentoEnum;
  categoriasSelecionadas: CategoriaSelecionadaViewModel[] = [];
}


export enum FormaPagamentoEnum {
  PIX = 0,
  Dinheiro = 1,
  CartaoCredito = 2

}

export class CategoriaSelecionadaViewModel {

  id: string;
  titulo: string;
  selecionada: boolean;
}
