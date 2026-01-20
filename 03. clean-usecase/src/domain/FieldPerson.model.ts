import Observable from "@/infra/Observable";
import { FormErrors } from "@/infra/types/FormErrors.types";

export class FieldPersonModel extends Observable<ObservableEvents> {
  private _isLoading = false;
  private _errors: FormErrors<Fields> = { document: [] };
  private _values: FormValues = { document: "" };

  person: Person | null = null;

  get isLoading() {
    return this._isLoading;
  }

  get errors() {
    return this._errors;
  }

  get values() {
    return this._values;
  }

  set values(newValues: FormValues) {
    this._values = newValues;
    this.validate();
  }

  private validate() {
    let isValid = true;

    this._errors.document = [];
    if (!this._values.document) this._errors.document.push("Documento obrigatorio");
    if (this._values.document.length < 11)
      this._errors.document.push("Tamanho mínimo de 11 caracteres");

    for (const key of Object.keys(this._errors) as Fields[]) {
      if (this._errors[key].length) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }

  private async submit() {
    this.person = null;
    await this.notifyAll("search", undefined);

    if (this.validate()) {
      const input = this._values;
      this._isLoading = true;
      await this.notifyAll("submit", input);
      this._isLoading = false;
    }
  }

  handleSubmit() {
    this.submit();
  }
}

type Person = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

type FormValues = {
  document: string;
};

type Fields = keyof FormValues;

type ObservableEvents = {
  search: undefined;
  submit: FormValues;
};
