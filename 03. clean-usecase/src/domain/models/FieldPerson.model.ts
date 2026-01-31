import Observable from "@/infra/Observable";
import { FormErrors } from "@/infra/types/FormErrors.type";

export class FieldPersonModel extends Observable<ObservableEvents> {
  private _isLoading = false;
  private _errors: FormErrors<FormFields> = { document: [] };
  private _values: FormValues = { document: "" };
  private _person: Person | null = null;

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

  get person() {
    return this._person;
  }

  set person(newValues: Person | null) {
    this._person = newValues;
  }

  private validate() {
    let isValid = true;

    this._errors.document = [];
    if (!this._values.document) this._errors.document.push("Documento obrigatório");
    if (this._values.document.length < 11)
      this._errors.document.push("Tamanho mínimo de 11 caracteres");

    for (const key of Object.keys(this._errors) as FormFields[]) {
      if (this._errors[key].length) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }

  private async submit() {
    this._person = null;
    await this.notifyAll("search", undefined);

    if (this.validate()) {
      const input = this._values;
      this._isLoading = true;
      await this.notifyAll("submit", input);
      this._isLoading = false;
    }
  }

  handleSubmit() {
    return this.submit();
  }
}

export type Person = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

type FormValues = {
  document: string;
};

type FormFields = keyof FormValues;

type ObservableEvents = {
  search: undefined;
  submit: FormValues;
};
