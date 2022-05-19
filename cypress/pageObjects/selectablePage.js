import BasePage from "./basePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get allElements() {
    return cy.get('#verticalListContainer > li')
}
  
  static get cras () {
    return cy.get("#verticalListContainer > li:nth-child(1)").contains(/^\bCras justo odio\b/);
  }

  static get morbi () {
    return cy.get("#verticalListContainer > li:nth-child(3)").contains(/^\bMorbi leo risus\b/);
  }
  
  static get dapidus () {
    return cy.get("#verticalListContainer > li:nth-child(2)");
  }
  static get porta () {
    return cy.get("#verticalListContainer > li:nth-child(4)");
  }


static get gridButton() {
    return cy.get("#demo-tab-grid")
}

static get allGridButtons() {
    return cy.get("#gridContainer")
}
}

export default SelectablePage;




