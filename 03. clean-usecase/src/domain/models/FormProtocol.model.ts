import { FormErrors } from "@/infra/types/FormErrors.type";
import Observable from "@/infra/Observable";

export class FormProtocolModel extends Observable<ObservableEvents> {
  private _isLoading = false;
  private _errors: FormErrors<FormFields> = {
    name: [],
    email: [],
    document: [],
    presenter: [],
    financialManager: [],
  };
  private _values: FormValues = new Proxy<FormValues>(
    {
      name: "",
      email: "",
      document: "",
      presenter: "",
      financialManager: "",
    },
    {
      set: (target, prop: keyof FormValues, value) => {
        target[prop] = value;
        this.validate();
        return true;
      },
    },
  );

  get isLoading() {
    return this._isLoading;
  }

  get errors() {
    return this._errors;
  }

  get values() {
    return this._values;
  }

  private validate() {
    let isValid = true;

    this._errors.name = [];
    if (!this._values.name) this._errors.name.push("Nome obrigatorio");
    if (this._values.name.length < 5) this._errors.name.push("Tamanho mínimo de 5 caracteres");

    this._errors.document = [];
    if (!this._values.document) this._errors.document.push("Documento obrigatorio");
    if (this._values.document.length < 11)
      this._errors.document.push("Tamanho mínimo de 11 caracteres");

    this._errors.presenter = [];
    if (!this._values.presenter) this._errors.presenter.push("Requerente obrigatorio");

    this._errors.financialManager = [];
    if (!this._values.financialManager)
      this._errors.financialManager.push("Gerente financeiro obrigatorio");

    for (const key of Object.keys(this._errors) as FormFields[]) {
      if (this._errors[key].length) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }

  private async submit() {
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

type FormValues = {
  name: string;
  email: string;
  document: string;
  presenter: string;
  financialManager: string;
};

type FormFields = keyof FormValues;

type ObservableEvents = {
  submit: FormValues;
};
