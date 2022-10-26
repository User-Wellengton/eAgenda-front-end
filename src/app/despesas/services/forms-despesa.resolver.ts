import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FormsDespesaViewModel } from "../view-model/forms-despesa.view-model";
import { DespesaService } from "./despesa.service";

@Injectable()
export class FormsDespesaResolver implements Resolve<FormsDespesaViewModel> {

  constructor(private compromissoService: DespesaService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<FormsDespesaViewModel> {
    return this.compromissoService.selecionarPorId(route.params['id']);
  }
}
