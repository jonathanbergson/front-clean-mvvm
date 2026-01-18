import { FormErrors } from "@/infra/types/FormErrors.types";
import Observable from "@/infra/Observable";

export class FormPersonModel extends Observable<ObservableEvents> {
  isLoading = false;

  values: FormValues = {
    name: "",
    email: "",
    document: "",
    password: "",
  };

  errors: FormErrors<Fields> = {
    name: [],
    email: [],
    document: [],
    password: [],
  };

  validate() {
    let isValid = true;

    this.errors.name = [];
    if (!this.values.name) this.errors.name.push("Nome obrigatorio");
    if (this.values.name.length < 5) this.errors.name.push("Tamanho mínimo de 5 caracteres");

    this.errors.document = [];
    if (!this.values.document) this.errors.document.push("Documento obrigatorio");
    if (this.values.document.length < 11)
      this.errors.document.push("Tamanho mínimo de 11 caracteres");

    for (const key of Object.keys(this.errors) as Fields[]) {
      if (this.errors[key].length) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }

  async confirm() {
    if (this.validate()) {
      const input = this.values;
      await this.notifyAll("confirmed", input);
    }
  }
}

type FormValues = {
  name: string;
  email: string;
  document: string;
  password: string;
};

type Fields = keyof FormValues;

type ObservableEvents = {
  confirmed: FormValues;
};
