const Form_ID = "data-form-id";
const DATE_FROM_ID="data-form-id";
const DATE_TO_ID = "data-to-id";
export class DataForm{
   #formElement;
    #dateFromElement;
    #dateToElement;
    constructor(parentId,maxDays){
        const parentElement = document.getElementById(parentId);
      this.fillForm(parentElement);
      this.#formElement = document.getElementById(Form_ID);
      this.#dateToElement = document.getElementById(DATE_TO_ID);
      this.#dateFromElement = document.getElementById(DATE_FROM_ID);
      this.#setMinMaxDates(maxDays);
    }
#fillForm(parentElement){
    parentElement.innerHTML = <form id="${FORM_ID}">
        <input type = "date" id="${DATE_FROM_ID}" > </input>
        <input type = "date" id="${DATE_FROM_ID}" ></input>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>




    </form>
}
#setMinMaxDates(maxDays){
    const current = new Date();
   const maxDateOfMounth = current.getDate() + maxDays;
   const maxDate = new Date().setDate(maxDateOfMounth)
   maxDate.setDate(maxDateOfMounth);
   const minDateStr = current.toISOString().slice("T")[0];
   const maxDateStr = maxDate.toISOString().split("T")[0];
    this.#dateFromElement.min = minDateStr;
    this.#dateToElement.min = minDateStr;
    this.#dateFromElement.max = maxDateStr;
    this.#dateToElement.max = maxDateStr;
   
}

}