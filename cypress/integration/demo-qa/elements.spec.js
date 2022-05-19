import CheckBoxPage from "../../pageObjects/checkBoxPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import WebTablesPage from "../../pageObjects/webTablesPage";
import ButtonsPage from "../../pageObjects/buttonsPage";
import LinksPage from "../../pageObjects/linksPage";
import SelectablePage from "../../pageObjects/selectablePage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      
      
      // Add scenario stuff here

      TextBoxPage.fullNameInput.type("Dude McDudester");
      TextBoxPage.userEmailInput.type("Waeva@whatever.com");
      TextBoxPage.currentAddressInput.type("Zelgauska, Latvia, Navel of the Universe");
      TextBoxPage.permanentAddressInput.type("Address area 51");

 

      // TextBoxPage.fullNameInput.type("George");
      // TextBoxPage.userEmailInput.type("randomemail@randomdomain.com");
      // TextBoxPage.currentAddressInput.type("Some Random Current Address 1234");
      // TextBoxPage.permanentAddressInput.type(
      //   "Some Random Permanent Address 1234"
      // );

      //submit poga 

      TextBoxPage.submitButton.click();

      TextBoxPage.nameParagraph
        .should("be.visible")
        .should("contain", "Dude McDudester");

      TextBoxPage.emailParagraph
        .should("be.visible")
        .should("contain", "Waeva@whatever.com");

      TextBoxPage.currentAddressParagraph
        .should("be.visible")
        .should("contain", "Zelgauska, Latvia baby");

      TextBoxPage.permanentAddressParagraph
        .should("be.visible")
        .should("contain", "Address area 51");

     
// ar invoke var piekļūt apakšelementiem 
//attr attribute 
    //   TextBoxPage.fullNameInput
    //     .invoke("attr", "placeholder")
    //     .should("contain", "Full Name");
    // });
  });

    //NEW SCRIPT it.skip skip scenario. it.only do only those
    //then piešķir nosaukumu data šinī gadijumā json.viewer.hu var apskatīt hashmap cy.log(data.fullName )
    // make fixtures to avoid making typos in scenarios



    it("Filling in Text Boxes with fixture", () => {
      cy.fixture("textBoxPageData").then((data) => {
        TextBoxPage.fullNameInput.type(data.fullName);
        TextBoxPage.userEmailInput.type(data.email);
        TextBoxPage.currentAddressInput.type(data.currentAddress);
        TextBoxPage.permanentAddressInput.type(data.permanentAddress);

        TextBoxPage.submitButton.click();

        TextBoxPage.nameParagraph
          .should("be.visible")
          .should("contain", data.fullName);
        TextBoxPage.emailParagraph
          .should("be.visible")
          .should("contain", data.email);
        TextBoxPage.currentAddressParagraph
          .should("be.visible")
          .should("contain", data.currentAddress);
        TextBoxPage.permanentAddressParagraph
          .should("be.visible")
          .should("contain", data.permanentAddress);
      });
    });
  });

  context("Checkbox scenarios", () => {
    beforeEach(() => {
      // Preconditions
      CheckBoxPage.visit();
    });

    it("Clicking checkbox - Notes", () => {
      // Scenario stuff
      CheckBoxPage.expandAllButton.click();
      CheckBoxPage.checkboxListItems.contains("Notes").click();
      CheckBoxPage.checkboxListItems.contains("General").click();
      CheckBoxPage.selectedItemsArea
        .should("contain", "notes")
        .should("contain", "general");
    });

    it("Clicking checkbox - Office", () => {
      CheckBoxPage.expandAllButton.click();
      CheckBoxPage.checkboxListItems.contains("Office").click();
      CheckBoxPage.selectedItemsArea
        .should("contain", "office")
        .should("contain", "public")
        .should("contain", "private")
        .should("contain", "classified")
        .should("contain", "general");
    });
  });

  // RADIO BUTTON SCENARIO


  context("Radio buttons scenarios", () => {
    beforeEach(() => {
      // Preconditions
      RadioButtonsPage.visit();
    });

    it("Click Radio buttons scenario", () => {
      RadioButtonsPage.yesRadioButton.click();
      RadioButtonsPage.resultsText.should("contain", "Yes");
      RadioButtonsPage.impressiveRadioButton.click();
      RadioButtonsPage.resultsText.should("contain", "Impressive");
      RadioButtonsPage.noRadioButton.should("be.disabled");
    });
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      // Preconditions
      WebTablesPage.visit();
    });

    it("Creating new Web table", () => {
      // 1. Click "Add" button
      WebTablesPage.addButton.click();
      // 2. Input all the necessary text fields:
      // First Name, Last Name, Email, Age, Salary, Department
      WebTablesPage.firstName.type("Jakobe");
      WebTablesPage.lastName.type("Strasdin");
      WebTablesPage.userEmail.type("s21strajeka@venta.lv");
      WebTablesPage.userAge.type("50");
      WebTablesPage.salary.type("0000");
      WebTablesPage.department.type("Science");
      // 3. Click "Submit" button
      WebTablesPage.submitButton.click();
      // 4. Validate that user has been added.
      WebTablesPage.allTable.should("contain", "s21strajeka@venta.lv");
      WebTablesPage.allTableRows.should("contain", "s21strajeka@venta.lv");
    });

    it("Delete all records", () => {
      // Delete user with email: alden@example.com
      WebTablesPage.deleteRow("alden@example.com");
      WebTablesPage.deleteRow("cierra@example.com");
      WebTablesPage.deleteRow("kierra@example.com");
    });
  });

  context("Buttons page scenarios", () => {
    beforeEach(() => {
      // Preconditions
      ButtonsPage.visit();
    });

    it("Click buttons", () => {
      // 1. Do A double click and validate
      ButtonsPage.doubleClickButton.dblclick();
      ButtonsPage.doubleClickSuccessMsg.should(
        "contain",
        "You have done a double click"
      );
      // 2. Do a Right click and validate
      ButtonsPage.rightClickButton.rightclick();
      ButtonsPage.rightClickSuccessMsg.should(
        "contain",
        "You have done a right click"
      );
      // 3. Do a dynamic click and validate
      ButtonsPage.dynamicClickButton.click();
      ButtonsPage.dynamicClickSuccessMsg.should(
        "contain",
        "You have done a dynamic click"
      );
    });
  });

  // context("Links scenarios", () => {
  //   beforeEach(() => {
  //     // Preconditions
  //     LinksPage.visit();
  //   });

  //   //intercept norāda ko gribam saņemt caur cypress API metode API endpoint
  //   //fake api request test negative cases 

  //   it("Click Links buttons", () => {
  //     cy.intercept("GET", "created", { statusCode: 500 }).as("getCreated");
  //     LinksPage.createdLink.click();
  //     cy.wait("@getCreated").then((data) => {
  //       expect(data.response.statusCode).to.eq(201);
  //     });

//MD 1 Selectable scenarios

    context("Selectable scenarios", () => {
      beforeEach(() => {
          SelectablePage.visit();
      });

      it.only("Click cras and morbi", () => {
        // 1. Noklikot uz laukiem "Cras justo odio" un "Morbi leo risus".
        SelectablePage.cras.click();
        SelectablePage.morbi.click();

        // 2. Novalidēt, ka noklikotie lauki ir aktīvi.
        SelectablePage.cras.should('have.class', 'active');
        SelectablePage.morbi.should('have.class', 'active');

        // 3. Novalidēt, ka pārējie lauki nav mainījuši stāvokli.
        SelectablePage.dapidus.should('not.have.class', 'active');
        SelectablePage.porta.should('not.have.class', 'active');
      });

      it.only("Click on grid buttons", () => {
        // 1. Atvērt sadaļu “Grid”.
        SelectablePage.gridButton.click();

        // 2. Noklikot laukus “Two”, “Four”, “Six” un “Eight”.
        SelectablePage.allGridButtons.contains("Two").click();
        SelectablePage.allGridButtons.contains("Four").click();
        SelectablePage.allGridButtons.contains("Six").click();
        SelectablePage.allGridButtons.contains("Eight").click();

        // 3. Novalidēt, ka lauki “Two”, “Four”, “Six” un “Eight” ir aktīvi.
        SelectablePage.allGridButtons.contains("Two").should('have.class', 'active');
        SelectablePage.allGridButtons.contains("Four").should('have.class', 'active');
        SelectablePage.allGridButtons.contains("Six").should('have.class', 'active');
        SelectablePage.allGridButtons.contains("Eight").should('have.class', 'active');

        // 4. Novalidēt, ka pārējie lauki nav mainījuši stāvokli.
        SelectablePage.allGridButtons.contains("One").should('not.have.class', 'active');
        SelectablePage.allGridButtons.contains("Three").should('not.have.class', 'active');
        SelectablePage.allGridButtons.contains("Five").should('not.have.class', 'active');
        SelectablePage.allGridButtons.contains("Seven").should('not.have.class', 'active');
        SelectablePage.allGridButtons.contains("Nine").should('not.have.class', 'active');

       
  });
  
});

});
